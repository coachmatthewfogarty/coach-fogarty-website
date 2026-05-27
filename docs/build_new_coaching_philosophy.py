from pathlib import Path
import shutil

from PIL import Image, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
DESKTOP_OUT = Path("/Users/Fogg/Desktop/NEW Coaching Philosophy")
PDF_OUT = ROOT / "assets/documents/coaching-philosophy/new"
PREVIEW_OUT = ROOT / "assets/documents/system-previews/new-coaching-philosophy"

PAGE_W, PAGE_H = letter
MARGIN_X = 0.58 * inch
TEXT_W = PAGE_W - (MARGIN_X * 2)

INK = colors.HexColor("#15110d")
MUTED = colors.HexColor("#4f4942")
RED = colors.HexColor("#9f3428")
RULE = colors.HexColor("#2b2621")


DOCS = [
    {
        "slug": "assistant-coach-philosophy",
        "label": "ASSISTANT COACH",
        "title": "Coaching Philosophy",
        "subtitle": "Staff Leadership, Player Development & Program Support",
        "sections": [
            ("Why I Coach", "I coach to develop disciplined, confident players through structured skill training and daily accountability. My purpose is to teach work ethic, resilience and decision-making while executing the program's systems with consistency. I support the head coach's vision by bringing precision, reliability and a commitment to sustainable program success."),
            ("Relationships & Trust", "Strong relationships are the foundation of effective coaching. I prioritize building trust with players by creating an environment where individuals feel valued, supported and held to high standards. Consistent communication, honesty and accountability help players respond to feedback and commit to their growth."),
            ("Player Development", "Individual improvement is the foundation for sustained team success. I focus on developing skills, basketball IQ, confidence and decision-making through structured training and competitive environments. Stronger individual players create stronger teams, so player development must be organized, measurable and connected to the program's standards."),
            ("Execution & Accountability", "Successful programs operate through clear systems and consistent execution. I believe in teaching with clarity, reinforcing standards daily and modeling the habits expected from players. My role is to bring organization, communication and dependable support to practices, film, scouting and player development."),
            ("Program Support", "As an assistant coach, I want to add value in the areas that help a program function every day: preparation, player relationships, skill development, recruiting support, scouting detail and staff alignment. I take pride in doing the work that helps the head coach's vision become visible in daily habits."),
        ],
    },
    {
        "slug": "assistant-coach-30-60-90-day-plan",
        "label": "ASSISTANT COACH",
        "title": "30-60-90 Day Plan",
        "subtitle": "Program Integration, Player Development & Staff Support",
        "sections": [
            ("Program Vision", "My vision as an assistant coach is to help build and support a disciplined, competitive and development-driven basketball program. I want to contribute through player development systems, recruiting relationships, scouting preparation, daily organization and a consistent commitment to the program's standards."),
            ("First 30 Days - Learn & Build Trust", "The first priority is to listen, learn and understand the program. I would meet with the head coach and staff, study offensive and defensive systems, review staff responsibilities, learn roster needs and begin building trust with players through consistent communication and humility."),
            ("Days 31-60 - Align & Contribute", "The next phase is about contributing while staying aligned with the staff's language and expectations. I would support workouts, film, scouting prep, recruiting organization and player development priorities while identifying routines that help players grow within the program structure."),
            ("Days 61-90 - Own Daily Responsibilities", "By the third phase, I would take greater ownership in player development, recruiting follow-up, scouting support and daily workflow. The goal is to become dependable in the areas assigned to me while helping the program operate with clarity, pace and shared standards."),
            ("Staff Impact", "This plan is designed to show how I would enter a program with humility, learn the system, build trust with players and staff, then contribute quickly through player development, recruiting, scouting and organization."),
        ],
    },
    {
        "slug": "assistant-coach-dei-statement",
        "label": "ASSISTANT COACH",
        "title": "Diversity, Equity & Inclusion",
        "subtitle": "Student-Athlete Support & Development",
        "sections": [
            ("Operating Standard", "Diversity, equity and inclusion are operational standards within a program, not abstract concepts. As an assistant coach, I support the head coach's vision by integrating these values into how I mentor, develop, communicate with and hold players accountable every day."),
            ("Equity In Action", "Equity means meeting student-athletes where they are while maintaining high expectations. Some athletes need academic structure, some need mentorship and some need leadership development. Fairness means providing the tools, guidance and accountability necessary for each individual to succeed."),
            ("Inclusion & Trust", "Inclusion requires voice and ownership. I build relationships rooted in respect, communication and accountability where differences are acknowledged and team identity unites the group. When student-athletes feel seen, heard and valued, they compete with greater confidence and trust."),
            ("Recruiting & Development", "Recruiting with intention reinforces this commitment. I evaluate character, academic goals, work ethic and long-term development alongside athletic performance. Opportunity should be earned through growth and discipline, not limited by background or circumstance."),
            ("Competitive Impact", "Diversity strengthens competitive performance because teams with varied perspectives become more adaptable, resilient and unified under pressure. Inclusive leadership is not separate from winning; it helps create the trust and standards that allow teams to sustain success."),
        ],
    },
    {
        "slug": "head-coach-philosophy",
        "label": "HEAD COACH",
        "title": "Coaching Philosophy",
        "subtitle": "Program Vision, Leadership & Culture",
        "sections": [
            ("Why I Coach", "I coach to develop disciplined, confident individuals who succeed both on and off the court. My purpose is to teach work ethic, resilience, leadership and teamwork through basketball. I want to build structured environments where players improve daily, understand expectations and grow through accountability."),
            ("Culture & Trust", "Strong relationships are the foundation of successful teams. I prioritize building trust with players and staff by creating an environment where people feel valued, supported and held to high standards. Trust allows athletes to accept coaching, respond to adversity and give their best to the team."),
            ("Structure & Organization", "Successful programs operate with clarity and consistency. I implement defined systems for player development, communication, scouting, recruiting and daily operations. Structure gives the program a common language and makes standards repeatable."),
            ("Player Development", "Individual improvement is essential to team growth. I focus on skill development, basketball IQ, confidence, decision-making and competitive habits. Stronger individual players create stronger teams when development is connected to role clarity, accountability and team identity."),
            ("Competitive Identity", "My teams should compete with discipline, communication, toughness and purpose. Defensive accountability, daily preparation and shared responsibility are central to that identity. Winning matters, but sustainable success comes from habits, standards and culture that endure."),
        ],
    },
    {
        "slug": "head-coach-year-one-strategic-plan",
        "label": "HEAD COACH",
        "title": "Year One Strategic Plan",
        "subtitle": "Head Coach Leadership Blueprint",
        "sections": [
            ("Program Vision", "My vision as a head coach is to build a disciplined, competitive and purpose-driven program that develops student-athletes who excel both on and off the court. The program will pursue championships while developing leaders who demonstrate integrity, accountability and competitive toughness."),
            ("First 30 Days - Assess & Align", "The first phase is to listen, evaluate and establish trust. I would meet with athletic leadership, staff, campus partners and returning student-athletes while assessing roster needs, academic performance, recruiting priorities, compliance expectations and program culture."),
            ("Days 31-60 - Build Infrastructure", "The second phase is to install the operating structure of the program. This includes staff roles, player development systems, academic monitoring, recruiting boards, practice standards, communication rhythms and expectations for daily accountability."),
            ("Days 61-90 - Establish Standards", "The third phase is to move from assessment into execution. Practices, workouts, recruiting, film and team communication should reflect the program's identity. Players and staff should understand what is expected, how we work and how we measure progress."),
            ("Season Build", "The goal of year one is to create a foundation that can last: clear standards, disciplined habits, player growth, academic responsibility, competitive practices and a culture built on communication, accountability, toughness and service."),
        ],
    },
    {
        "slug": "head-coach-dei-statement",
        "label": "HEAD COACH",
        "title": "Diversity, Equity & Inclusion",
        "subtitle": "Leadership Philosophy",
        "sections": [
            ("Leadership Standard", "Diversity, equity and inclusion shape how a program recruits, mentors, evaluates and develops student-athletes. As a head coach, my responsibility is to ensure every athlete is treated with dignity, supported intentionally and held to a consistent standard of excellence."),
            ("Equity & Expectations", "Equity means meeting student-athletes where they are while maintaining high expectations. Access to resources, transparent feedback and clear standards help athletes grow. Fairness means providing the tools, guidance and accountability necessary for each person to succeed."),
            ("Inclusive Culture", "Inclusion requires a culture rooted in respect, communication and accountability. Differences should be acknowledged while team identity unites the group. When student-athletes feel seen, heard and valued, they compete with more confidence, discipline and trust."),
            ("Recruiting With Intention", "Recruiting must evaluate character, academic goals, work ethic and long-term development alongside athletic performance. Opportunity within the program should be earned through growth, discipline and commitment, not defined by background or circumstance."),
            ("Competitive Impact", "Diverse teams are stronger when leadership turns different perspectives into trust, adaptability and resilience. Inclusive leadership is a competitive advantage because it builds belonging, shared responsibility and sustained performance under pressure."),
        ],
    },
]


def styles():
    return {
        "label": ParagraphStyle("label", fontName="Times-Bold", fontSize=8.6, leading=10, textColor=RED, alignment=TA_CENTER, spaceAfter=4),
        "title": ParagraphStyle("title", fontName="Times-Bold", fontSize=34, leading=35, textColor=INK, alignment=TA_CENTER, spaceAfter=3),
        "subtitle": ParagraphStyle("subtitle", fontName="Times-Bold", fontSize=11.8, leading=13.6, textColor=MUTED, alignment=TA_CENTER, spaceAfter=1),
        "author": ParagraphStyle("author", fontName="Times-Roman", fontSize=10.4, leading=12, textColor=MUTED, alignment=TA_CENTER, spaceAfter=16),
        "section": ParagraphStyle("section", fontName="Times-Bold", fontSize=17.6, leading=19.5, textColor=INK, alignment=TA_LEFT, spaceBefore=18, spaceAfter=7),
        "body": ParagraphStyle("body", fontName="Times-Roman", fontSize=14.4, leading=19.4, textColor=colors.HexColor("#211c17"), alignment=TA_LEFT, spaceAfter=4),
    }


def build_pdf(doc):
    PDF_OUT.mkdir(parents=True, exist_ok=True)
    DESKTOP_OUT.mkdir(parents=True, exist_ok=True)
    out = PDF_OUT / f"{doc['slug']}.pdf"
    s = styles()
    pdf = SimpleDocTemplate(
        str(out),
        pagesize=letter,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=0.42 * inch,
        bottomMargin=0.38 * inch,
    )
    story = [
        Paragraph(doc["label"], s["label"]),
        Paragraph(doc["title"], s["title"]),
        Paragraph(doc["subtitle"], s["subtitle"]),
        Paragraph("Matthew Fogarty", s["author"]),
    ]
    for title, body in doc["sections"]:
        story.append(Paragraph(title, s["section"]))
        story.append(Paragraph(body, s["body"]))
    pdf.build(story, onFirstPage=draw_page)
    shutil.copy2(out, DESKTOP_OUT / out.name)
    return out


def draw_page(canvas, _doc):
    canvas.saveState()
    canvas.setFillColor(colors.white)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(1.1)
    canvas.line(MARGIN_X, PAGE_H - 1.39 * inch, PAGE_W - MARGIN_X, PAGE_H - 1.39 * inch)
    canvas.restoreState()


def font(kind, size):
    paths = {
        "bold": ["/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf", "/System/Library/Fonts/Times.ttc"],
        "regular": ["/System/Library/Fonts/Supplemental/Times New Roman.ttf", "/System/Library/Fonts/Times.ttc"],
    }
    for path in paths[kind]:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            pass
    return ImageFont.load_default()


def wrap(draw, text, fnt, width):
    words = text.split()
    lines, line = [], ""
    for word in words:
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=fnt) <= width:
            line = trial
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def build_preview(doc):
    PREVIEW_OUT.mkdir(parents=True, exist_ok=True)
    scale = 2
    w, h = 612 * scale, 792 * scale
    img = Image.new("RGB", (w, h), "white")
    d = ImageDraw.Draw(img)
    label_f = font("bold", 18)
    title_f = font("bold", 68)
    sub_f = font("bold", 24)
    author_f = font("regular", 21)
    head_f = font("bold", 35)
    body_f = font("regular", 29)
    x = 84
    y = 66
    for text, fnt, fill, gap in [
        (doc["label"], label_f, "#9f3428", 8),
        (doc["title"], title_f, "#15110d", 4),
        (doc["subtitle"], sub_f, "#4f4942", 2),
        ("Matthew Fogarty", author_f, "#4f4942", 20),
    ]:
        tw = d.textlength(text, font=fnt)
        d.text(((w - tw) / 2, y), text, font=fnt, fill=fill)
        y += fnt.size + gap
    d.line([x, 218, w - x, 218], fill="#2b2621", width=3)
    y = 250
    for heading, body in doc["sections"]:
        d.text((x, y), heading, font=head_f, fill="#15110d")
        y += 44
        for line in wrap(d, body, body_f, w - (x * 2)):
            d.text((x, y), line, font=body_f, fill="#211c17")
            y += 41
        y += 30
    out = PREVIEW_OUT / f"{doc['slug']}.webp"
    img.save(out, "WEBP", quality=92)
    return out


def main():
    for directory in (DESKTOP_OUT, PDF_OUT, PREVIEW_OUT):
        directory.mkdir(parents=True, exist_ok=True)
    for doc in DOCS:
        print(build_pdf(doc))
        print(build_preview(doc))


if __name__ == "__main__":
    main()
