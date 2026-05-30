document.querySelectorAll(".footer-accordion-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const group = toggle.closest(".footer-links");

    if (!group || !window.matchMedia("(max-width: 1024px)").matches) {
      return;
    }

    const isOpen = group.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

const siteHeader = document.querySelector(".site-header");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileFeaturedItem = document.querySelector(".site-nav-featured");
const mobileFeaturedLink = mobileFeaturedItem?.querySelector(":scope > a");
const mobileFeaturedDropdown = mobileFeaturedItem?.querySelector(".featured-nav-dropdown");
let mobileFeaturedToggle = null;

if (siteHeader && mobileNavToggle) {
  if (mobileFeaturedItem && mobileFeaturedLink && mobileFeaturedDropdown) {
    if (!mobileFeaturedDropdown.id) {
      mobileFeaturedDropdown.id = "featured-mobile-subnav";
    }

    mobileFeaturedToggle = document.createElement("button");
    mobileFeaturedToggle.className = "mobile-subnav-toggle";
    mobileFeaturedToggle.type = "button";
    mobileFeaturedToggle.setAttribute("aria-label", "Toggle Featured submenu");
    mobileFeaturedToggle.setAttribute("aria-controls", mobileFeaturedDropdown.id);
    mobileFeaturedToggle.setAttribute("aria-expanded", "false");
    mobileFeaturedLink.insertAdjacentElement("afterend", mobileFeaturedToggle);

    mobileFeaturedToggle.addEventListener("click", () => {
      const isOpen = mobileFeaturedItem.classList.toggle("is-mobile-subnav-open");
      mobileFeaturedToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const setMobileNavOpen = (isOpen) => {
    siteHeader.classList.toggle("nav-open", isOpen);
    mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
    mobileNavToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

    if (!isOpen && mobileFeaturedItem && mobileFeaturedToggle) {
      mobileFeaturedItem.classList.remove("is-mobile-subnav-open");
      mobileFeaturedToggle.setAttribute("aria-expanded", "false");
    }
  };

  mobileNavToggle.addEventListener("click", () => {
    setMobileNavOpen(!siteHeader.classList.contains("nav-open"));
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => setMobileNavOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.classList.contains("nav-open") || siteHeader.contains(event.target)) {
      return;
    }

    setMobileNavOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileNavOpen(false);
    }
  });
}

document.querySelectorAll(".contact-form").forEach((contactForm) => {
  let statusMessage = contactForm.querySelector(".contact-form-status");

  if (!statusMessage) {
    statusMessage = document.createElement("p");
    statusMessage.className = "contact-form-status";
    statusMessage.setAttribute("role", "status");
    statusMessage.setAttribute("aria-live", "polite");
    contactForm.append(statusMessage);
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const submitButtonText = submitButton?.textContent || "Send Message";

  contactForm.addEventListener("input", () => {
    statusMessage.textContent = "";
    contactForm.classList.remove("is-sent");

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = submitButtonText;
    }
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const firstName = String(formData.get("first-name") || "").trim();
    const lastName = String(formData.get("last-name") || "").trim();
    const name = [firstName, lastName].filter(Boolean).join(" ");
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      contactForm.reportValidity();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    statusMessage.textContent = "Sending...";

    const payload = {
      name,
      email,
      phone: String(formData.get("phone") || "").trim() || "Not provided",
      organization: String(formData.get("school-organization") || "").trim() || "Not provided",
      reason: String(formData.get("reason") || "").trim() || "Not provided",
      message,
      _replyto: email,
      _subject: `Portfolio Contact from ${name}`,
      _template: "table"
    };

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed.");
      }

      statusMessage.textContent = "Message sent.";
      contactForm.classList.add("is-sent");

      if (submitButton) {
        submitButton.textContent = "Message Sent";
      }
    } catch (error) {
      statusMessage.textContent = "Message could not be sent. Please email CoachMatthewFogarty@gmail.com.";
      contactForm.classList.remove("is-sent");

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButtonText;
      }
    }
  });
});

const compactHeadingQuery = window.matchMedia("(min-width: 0px)");
const compactEyebrowSelector = [
  ".section-heading > .eyebrow",
  ".about-letter-heading > .eyebrow",
  ".featured-pillar-copy > .eyebrow",
  ".featured-strategy-panel > .eyebrow",
  ".featured-final-cta > div > .eyebrow",
  ".system-detail-copy > .eyebrow",
  ".credential-section-copy > .eyebrow",
  ".credential-packet-cta > .eyebrow",
  ".about-foundation-strip > .eyebrow",
  ".media-final-cta .eyebrow",
  ".contact-info-copy > .eyebrow"
].join(",");
const compactTitleSelector = [
  ".section-heading > h2",
  ".about-letter-heading > h1",
  ".featured-pillar-copy > h2",
  ".featured-strategy-panel > h2",
  ".featured-final-cta h2",
  ".system-detail-copy > h2",
  ".credential-section-copy > h2",
  ".credential-packet-cta h2",
  ".about-foundation-strip > h2",
  ".media-final-cta h2",
  ".contact-info-copy > h2"
].join(",");
const compactCardTitleSelector = [
  ".library-card h3",
  ".library-card.system-card h3",
  ".system-card h3",
  ".story-card h3",
  ".quote-panel h3",
  ".media-subsection-heading h3",
  ".media-album-heading h3",
  ".media-category-card h3",
  ".media-library-meta strong",
  ".achievement-card strong"
].join(",");
const compactHeroSelector = ".hero, .page-hero-system, .media-overlay";

function compactHeadingElements() {
  return [
    ...Array.from(document.querySelectorAll(compactEyebrowSelector)).map((element) => ({
      element,
      sizeProperty: "--mobile-fit-eyebrow-size",
      lineProperty: "--mobile-fit-eyebrow-line",
      fallbackSize: 11,
      fallbackLine: 13,
      minSize: 8,
      allowWrap: false
    })),
    ...Array.from(document.querySelectorAll(compactTitleSelector)).map((element) => {
      const isAboutCoverTitle = element.matches(".about-cover-page .about-letter-heading > h1");

      return {
        element,
        sizeProperty: "--mobile-fit-title-size",
        lineProperty: "--mobile-fit-title-line",
        wrapProperty: "--type-heading-white-space",
        fallbackSize: 24,
        fallbackLine: 28,
        minSize: isAboutCoverTitle
          ? {
            mobile: 14,
            tablet: 18,
            desktop: 25
          }
          : {
            mobile: 18,
            tablet: 20,
            desktop: 25
          },
        allowWrap: !isAboutCoverTitle
      };
    }),
    ...Array.from(document.querySelectorAll(compactCardTitleSelector)).map((element) => ({
      element,
      sizeProperty: "--mobile-fit-card-title-size",
      lineProperty: "--mobile-fit-card-title-line",
      wrapProperty: "--type-card-title-white-space",
      fallbackSize: 20,
      fallbackLine: 24,
      minSize: {
        mobile: 18,
        tablet: 20,
        desktop: 22
      },
      allowWrap: true
    }))
  ].filter(({ element }) => !element.closest(compactHeroSelector));
}

function resetCompactHeading({ element, sizeProperty, lineProperty, wrapProperty }) {
  element.style.removeProperty(sizeProperty);
  element.style.removeProperty(lineProperty);
  if (wrapProperty) {
    element.style.removeProperty(wrapProperty);
  }
  element.style.removeProperty("letter-spacing");
}

function fitCompactHeading(heading) {
  const { element, sizeProperty, lineProperty, wrapProperty, fallbackSize, fallbackLine, minSize, allowWrap } = heading;
  resetCompactHeading(heading);

  if (!compactHeadingQuery.matches) {
    return;
  }

  const computedStyle = window.getComputedStyle(element);
  const baseSize = Number.parseFloat(computedStyle.fontSize) || fallbackSize;
  const computedLine = Number.parseFloat(computedStyle.lineHeight);
  const baseLine = Number.isFinite(computedLine) ? computedLine : fallbackLine;
  const lineRatio = baseSize > 0 ? baseLine / baseSize : fallbackLine / fallbackSize;
  const resolvedMinSize = typeof minSize === "number"
    ? minSize
    : window.innerWidth >= 1025
      ? minSize.desktop
      : window.innerWidth >= 768
        ? minSize.tablet
        : minSize.mobile;

  element.style.setProperty(sizeProperty, `${baseSize}px`);
  element.style.setProperty(lineProperty, `${baseLine}px`);

  const availableWidth = element.clientWidth;

  if (!availableWidth || element.scrollWidth <= availableWidth) {
    return;
  }

  const fitRatio = (availableWidth / element.scrollWidth) * 0.98;
  const fittedSize = Math.max(resolvedMinSize, Math.floor(baseSize * fitRatio * 100) / 100);
  const fittedLine = Math.floor(fittedSize * lineRatio * 100) / 100;

  element.style.setProperty(sizeProperty, `${fittedSize}px`);
  element.style.setProperty(lineProperty, `${fittedLine}px`);

  if (element.scrollWidth > element.clientWidth) {
    element.style.letterSpacing = "0";
  }

  if (element.scrollWidth > element.clientWidth) {
    const tightRatio = (element.clientWidth / element.scrollWidth) * 0.98;
    const tightSize = Math.max(resolvedMinSize, Math.floor(fittedSize * tightRatio * 100) / 100);
    const tightLine = Math.floor(tightSize * lineRatio * 100) / 100;

    element.style.setProperty(sizeProperty, `${tightSize}px`);
    element.style.setProperty(lineProperty, `${tightLine}px`);
  }

  if (allowWrap && element.scrollWidth > element.clientWidth && wrapProperty) {
    element.style.setProperty(wrapProperty, "normal");
  }
}

function fitCompactHeadings() {
  compactHeadingElements().forEach(fitCompactHeading);
}

let compactHeadingFrame = 0;

function scheduleCompactHeadingFit() {
  window.cancelAnimationFrame(compactHeadingFrame);
  compactHeadingFrame = window.requestAnimationFrame(fitCompactHeadings);
}

scheduleCompactHeadingFit();
window.addEventListener("resize", scheduleCompactHeadingFit);
window.addEventListener("orientationchange", scheduleCompactHeadingFit);
window.addEventListener("load", scheduleCompactHeadingFit);
compactHeadingQuery.addEventListener?.("change", scheduleCompactHeadingFit);
