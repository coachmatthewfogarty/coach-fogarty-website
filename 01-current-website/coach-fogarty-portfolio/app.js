const librarySections = [
  {
    type: "Development",
    title: "Player Development",
    description: "Player plans, drill logs, measurable growth.",
    media: {
      src: "assets/media/player-development/photos/player-development-on-court-instruction-01-media-card-cover-center-1200x900.avif",
      alt: "On-court player development instruction"
    },
    buttons: [
      {
        label: "Overview",
        href: "./assets/documents/player-development/player-development-overview.pdf"
      },
      {
        label: "Training Programs",
        href: "./assets/documents/player-development/player-development-complete-portfolio.pdf"
      },
      {
        label: "Drill Log",
        href: "./assets/documents/player-development/player-development-drill-log.pdf"
      },
      {
        label: "Complete Portfolio",
        href: "./assets/documents/player-development/player-development-complete-portfolio.pdf"
      }
    ]
  },
  {
    type: "Scouting",
    title: "Scouting",
    description: "Opponent prep and game-ready staff tools.",
    media: {
      src: "assets/documents/system-previews/scouting-overview.webp",
      alt: "Scouting report overview document preview"
    },
    buttons: [
      {
        label: "Overview",
        href: "./assets/documents/scouting-recruiting/automated-scouting-report-overview.pdf"
      },
      {
        label: "Personnel Report",
        href: "./assets/documents/scouting-recruiting/scouting-report-player-personnel-breakdown.pdf"
      },
      {
        label: "In-Game Notes",
        href: "./assets/documents/scouting-recruiting/scouting-report-in-game-notes-template.pdf"
      },
      {
        label: "Complete Portfolio",
        href: "./assets/documents/scouting-recruiting/automated-scouting-report-complete-portfolio.pdf"
      }
    ]
  },
  {
    type: "Recruiting",
    title: "Recruiting",
    description: "Recruiting plans and program workflow.",
    media: {
      src: "assets/documents/system-previews/recruiting-development-plan.webp",
      alt: "Recruiting development plan document preview"
    },
    buttons: [
      {
        label: "Recruiting Plan",
        href: "./assets/documents/program-development/recruiting-development-plan.pdf"
      },
      {
        label: "Program Overview",
        href: "./assets/documents/program-development/program-development-overview.pdf"
      },
      {
        label: "Team Plan",
        href: "./assets/documents/program-development/team-development-plan.pdf"
      },
      {
        label: "Staff Plan",
        href: "./assets/documents/program-development/staff-development-plan.pdf"
      }
    ]
  },
  {
    type: "DPAT",
    title: "Defensive Tracker",
    description: "DPAT grading and accountability tracking.",
    media: {
      src: "dpat/final-reports/player-rankings/dpat-player-rankings-report-2025-2026.png",
      alt: "DPAT defensive tracking leaderboard report"
    },
    buttons: [
      {
        label: "Overview",
        href: "./assets/documents/program-systems/dpat/dpat-overview.pdf"
      },
      {
        label: "Game Report",
        href: "./assets/documents/program-systems/dpat/dpat-game-breakdown-report.pdf"
      },
      {
        label: "Team Rankings",
        href: "./assets/documents/program-systems/dpat/dpat-rankings.pdf"
      },
      {
        label: "Complete Portfolio",
        href: "./assets/documents/program-systems/dpat/dpat-complete-portfolio.pdf"
      }
    ]
  },
  {
    type: "Operations",
    title: "Program Support",
    description: "Operations plans and year-round organization.",
    media: {
      src: "assets/media/team-environment/photos/team-environment-banquet-media-card-cover-center-1200x900.avif",
      alt: "Team environment and program operations visual"
    },
    buttons: [
      {
        label: "Overview",
        href: "./assets/documents/program-development/program-development-overview.pdf"
      },
      {
        label: "Operations Plan",
        href: "./assets/documents/program-development/operations-development-plan.pdf"
      },
      {
        label: "Staff Plan",
        href: "./assets/documents/program-development/staff-development-plan.pdf"
      },
      {
        label: "Fundraising Plan",
        href: "./assets/documents/program-development/fundraising-development-plan.pdf"
      }
    ]
  },
  {
    type: "Leadership",
    title: "Coaching Philosophy",
    description: "Leadership, alignment, program standards.",
    media: {
      src: "assets/media/sideline-leadership/photos/sideline-leadership-staff-celebrating-media-card-cover-center-1200x900.avif",
      alt: "Staff leadership and team culture moment"
    },
    buttons: [
      {
        label: "Asst Philosophy",
        href: "./assets/documents/coaching-philosophy/assistant-coach/assistant-coach-philosophy.pdf"
      },
      {
        label: "30-60-90 Plan",
        href: "./assets/documents/coaching-philosophy/assistant-coach/assistant-coach-30-60-90-day-plan.pdf"
      },
      {
        label: "DEI Statement",
        href: "./assets/documents/coaching-philosophy/assistant-coach/assistant-coach-dei-statement.pdf"
      },
      {
        label: "HC Philosophy",
        href: "./assets/documents/coaching-philosophy/head-coach/head-coach-philosophy.pdf"
      }
    ]
  }
];

const mediaPath = (category, type, fileName) => `assets/media/${category}/${type}/${fileName}`;
const mediaPhotoPath = (category, fileName) => mediaPath(category, "photos", fileName);
const playingCareerPhoto = (fileName) => `assets/images/playing-career/photos/${fileName}`;
const playingCareerThumbnail = (fileName) => `assets/images/playing-career/thumbnails/${fileName}`;
const playingCareerAward = (fileName) => `assets/images/playing-career/awards/${fileName}`;
const anayaAssetRoot = "anaya";
const anayaAssetSections = {
  "hero": "h",
  "1-foundation": "1f",
  "2-development-process": "2d",
  "3-leadership-impact": "3l",
  "4-breakthrough-production": "4b",
  "5-accolades-recognition": "5r",
  "6-next-level-opportunities": "6n"
};
const anayaAssetSection = (section) => anayaAssetSections[section] || section;
const anayaPhotoFolder = (section) => `${anayaAssetRoot}/photos/${anayaAssetSection(section)}/`;
const anayaVideoFolder = (section) => `${anayaAssetRoot}/videos/${anayaAssetSection(section)}/`;
const anayaPhoto = (section, fileName) => `${anayaPhotoFolder(section)}${fileName}`;
const anayaVideo = (section, fileName) => `${anayaVideoFolder(section)}${fileName}`;
const anayaCaseStudyImage = (section, fileBase, caption, alt = caption) => ({
  type: "image",
  src: anayaPhoto(section, `${fileBase}-landscape-stretch-fill-q98-2400x1800.avif`),
  fullSrc: anayaPhoto(section, `${fileBase}-landscape-stretch-fill-q98-2400x1800.avif`),
  mediaCardSrc: anayaPhoto(section, `${fileBase}-media-card-stretch-fill-q98-1200x900.avif`),
  portraitSrc: anayaPhoto(section, `${fileBase}-portrait-stretch-fill-q98-1800x2400.avif`),
  thumbSrc: anayaPhoto(section, `${fileBase}-overlay-thumb-stretch-fill-q98-600x400.webp`),
  alt,
  caption
});
const caseStudySectionPath = (playerName, sectionName) => `case-study/${playerName}/${sectionName}`;

const mediaAlbums = [
  {
    title: "Sideline Leadership",
    category: "Sideline Leadership",
    thumbnail: mediaPhotoPath("sideline-leadership", "sideline-leadership-hyped-media-card-cover-bottom-mid-1200x900.avif"),
    thumbnailRole: "media-card",
    caption: "Sideline Leadership",
    crop: "sideline",
    items: [
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-high-five-media-card-cover-bottom-mid-1200x900.avif"),
        thumbSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-high-five-overlay-thumb-cover-bottom-mid-600x400.webp"),
        fullSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-high-five-landscape-cover-bottom-mid-2400x1800.avif"),
        orientation: "landscape",
        alt: "Sideline leadership high five",
        caption: "Sideline leadership high five"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-hyped-media-card-cover-bottom-mid-1200x900.avif"),
        thumbSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-hyped-overlay-thumb-cover-center-600x400.webp"),
        fullSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-hyped-up-landscape-cover-bottom-mid-2400x1800.avif"),
        orientation: "landscape",
        alt: "Sideline leadership hyped moment",
        caption: "Sideline leadership hyped moment"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-staff-celebrating-media-card-cover-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-staff-celebrating-overlay-thumb-cover-center-600x400.webp"),
        fullSrc: mediaPhotoPath("sideline-leadership", "sideline-leadership-staff-celebrating-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Staff celebrating from the sideline",
        caption: "Staff celebrating from the sideline"
      }
    ]
  },
  {
    title: "Coaching Details",
    category: "Coaching Details",
    thumbnail: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-court-preparation-media-card-cover-bottom-center-1200x900.avif"),
    thumbnailRole: "media-card",
    caption: "Coaching Details",
    crop: "teaching",
    items: [
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-pacific-academy-bench-instruction-01-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-pacific-academy-bench-instruction-01-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-pacific-academy-bench-instruction-01-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Bench instruction during a game",
        caption: "Bench instruction during a game"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-pacific-academy-bench-instruction-02-media-card-cover-center-upper-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-pacific-academy-bench-instruction-02-overlay-thumb-cover-upper-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-pacific-academy-bench-instruction-02-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Bench instruction detail",
        caption: "Bench instruction detail"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-01-media-card-cover-bottom-center-mid-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-01-overlay-thumb-cover-bottom-mid-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-01-portrait-cover-1800x2400.avif"),
        orientation: "portrait",
        alt: "Coaching observation moment",
        caption: "Coaching observation moment"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-court-preparation-media-card-cover-bottom-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-court-preparation-overlay-thumb-cover-bottom-center-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-court-preparation-portrait-cover-bottom-1800x2400.avif"),
        orientation: "portrait",
        alt: "Court preparation and coaching details",
        caption: "Court preparation and coaching details"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-pregame-talk-media-card-cover-bottom-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-pregame-talk-overlay-thumb-cover-bottom-center-mid-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-pregame-talk-portrait-cover-bottom-1800x2400.avif"),
        orientation: "portrait",
        alt: "Pregame talk coaching detail",
        caption: "Pregame talk coaching detail"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-pregame-warmup-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-pregame-warmup-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-pregame-warmup-portrait-cover-upper-1800x2400.avif"),
        orientation: "portrait",
        alt: "Pregame warmup coaching detail",
        caption: "Pregame warmup coaching detail"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-practice-talk-media-card-cover-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-practice-talk-overlay-thumb-cover-upper-mid-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-practice-talk-portrait-cover-bottom-1800x2400.avif"),
        orientation: "portrait",
        alt: "Practice talk coaching detail",
        caption: "Practice talk coaching detail"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-ball-handling-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-ball-handling-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-ball-handling-portrait-cover-bottom-1800x2400.avif"),
        orientation: "portrait",
        alt: "Ball-handling coaching detail",
        caption: "Ball-handling coaching detail"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-group-talk-media-card-cover-upper-mid-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-group-talk-overlay-thumb-cover-upper-center-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-group-talk-portrait-1800x2400.avif"),
        orientation: "portrait",
        alt: "Group talk coaching detail",
        caption: "Group talk coaching detail"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-02-media-card-cover-bottom-mid-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-02-overlay-thumb-cover-center-bottom-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-02-portrait-cover-bottom-1800x2400.avif"),
        orientation: "portrait",
        alt: "Observation coaching detail",
        caption: "Observation coaching detail"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-03-media-card-cover-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-03-overlay-thumb-cover-center-upper-600x400.webp"),
        fullSrc: mediaPhotoPath("coaching-details", "coaching-details-santa-ana-college-coaching-observation-03-portrait-cover-bottom-1800x2400.avif"),
        orientation: "portrait",
        alt: "Coaching detail on the sideline",
        caption: "Sideline coaching detail"
      }
    ]
  },
  {
    title: "Player Development",
    category: "Player Development",
    thumbnail: mediaPhotoPath("player-development", "player-development-on-court-instruction-01-media-card-cover-center-1200x900.avif"),
    thumbnailRole: "media-card",
    caption: "Player Development",
    crop: "oncourt",
    items: [
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("player-development", "player-development-on-court-instruction-01-media-card-cover-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("player-development", "player-development-on-court-instruction-01-overlay-thumb-cover-center-600x400.webp"),
        fullSrc: mediaPhotoPath("player-development", "player-development-on-court-instruction-01-portrait-cover-bottom-1800x2400.avif"),
        orientation: "portrait",
        alt: "On-court player development instruction",
        caption: "Player Development Instruction"
      }
    ]
  },
  {
    title: "Team Environment",
    category: "Team Environment",
    thumbnail: mediaPhotoPath("team-environment", "team-environment-huddle-media-card-cover-bottom-center-1200x900.avif"),
    thumbnailRole: "media-card",
    caption: "Team Environment",
    crop: "huddle",
    items: [
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-environment", "team-environment-huddle-media-card-cover-bottom-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-environment", "team-environment-huddle-overlay-thumb-cover-center-bottom-600x400.webp"),
        fullSrc: mediaPhotoPath("team-environment", "team-environment-huddle-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Team huddle environment",
        caption: "Team huddle environment"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-environment", "team-environment-banquet-media-card-cover-center-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-environment", "team-environment-banquet-overlay-thumb-cover-center-600x400.webp"),
        fullSrc: mediaPhotoPath("team-environment", "team-environment-banquet-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Team banquet environment",
        caption: "Team banquet environment"
      }
    ]
  },
  {
    title: "Team Celebration",
    category: "Team Celebration",
    thumbnail: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-01-media-card-cover-upper-mid-zoom-out-3-q98-1200x900.avif"),
    caption: "Team Celebration",
    crop: "celebration",
    items: [
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-01-media-card-cover-upper-mid-zoom-out-3-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-01-overlay-thumb-cover-upper-mid-zoom-out-3-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-01-landscape-cover-upper-mid-zoom-out-3-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Team celebrating a three pointer",
        caption: "Three-point celebration"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-02-media-card-cover-bottom-center-mid-zoom-out-3-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-02-overlay-thumb-cover-center-bottom-zoom-out-3-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-02-landscape-cover-bottom-mid-zoom-out-3-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Team celebrating a three pointer",
        caption: "Three-point celebration"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-03-media-card-north-zoom-out-3-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-03-overlay-thumb-cover-upper-center-zoom-out-3-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-03-landscape-north-zoom-out-3-shift-left-3-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Team celebrating a three pointer",
        caption: "Three-point celebration"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-big-shot-big-moment-media-card-zoom-in-124-bench-high-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-big-shot-big-moment-overlay-thumb-zoom-in-124-bench-high-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-big-shot-big-moment-landscape-zoom-in-124-bench-high-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Santa Ana bench reacting to a big shot",
        caption: "Big-shot bench moment"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-celebration-media-card-cover-bottom-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-celebration-overlay-thumb-cover-bottom-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-3-pointer-celebration-portrait-cover-center-q98-1800x2400.avif"),
        orientation: "portrait",
        alt: "Team celebrating a three pointer",
        caption: "Three-point celebration"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-01-media-card-cover-center-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-01-overlay-thumb-cover-upper-mid-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-01-landscape-cover-upper-center-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Bench cheering celebration",
        caption: "Bench cheering celebration"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-02-media-card-cover-bottom-center-mid-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-02-overlay-thumb-cover-bottom-center-mid-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-02-landscape-cover-bottom-center-mid-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Bench cheering celebration",
        caption: "Bench cheering celebration"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-03-media-card-cover-bottom-mid-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-03-overlay-thumb-cover-center-bottom-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-bench-cheering-03-landscape-cover-bottom-mid-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Bench cheering celebration",
        caption: "Bench cheering celebration"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-playoff-win-sideline-reaction-media-card-cover-upper-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-playoff-win-sideline-reaction-overlay-thumb-cover-upper-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-playoff-win-sideline-reaction-landscape-cover-upper-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Team first-round winners celebration",
        caption: "First-round winners"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-playoff-reaction-media-card-cover-center-zoom-in-2-q98-1200x900.avif"),
        thumbSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-playoff-reaction-overlay-thumb-cover-center-zoom-in-2-q98-600x400.webp"),
        fullSrc: mediaPhotoPath("team-celebration", "team-celebration-santa-ana-playoff-reaction-landscape-cover-center-zoom-in-2-q98-2400x1800.avif"),
        orientation: "landscape",
        alt: "Team locked-in celebration moment",
        caption: "Locked-in team moment"
      }
    ]
  },
  {
    title: "Championship Culture",
    category: "Championship Culture",
    thumbnail: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-three-peat-media-card-1200x900.avif"),
    thumbnailRole: "media-card",
    caption: "Championship Culture",
    crop: "culture",
    items: [
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-three-peat-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-three-peat-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-three-peat-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Pacific Academy three-peat championship culture",
        caption: "Three-peat Championship Culture"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-1st-school-championship-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-1st-school-championship-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-1st-school-championship-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "First school championship",
        caption: "First school championship"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-back-to-back-champions-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-back-to-back-champions-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-back-to-back-champions-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Back-to-back championship culture",
        caption: "Back-to-back championship culture"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-4th-school-championship-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-4th-school-championship-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-4th-school-championship-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Fourth school championship",
        caption: "Fourth school championship"
      },
      {
        type: "image",
        mediaCardSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-5th-school-championship-media-card-1200x900.avif"),
        thumbSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-5th-school-championship-overlay-thumb-600x400.webp"),
        fullSrc: mediaPhotoPath("championship-culture", "championship-culture-pacific-academy-5th-school-championship-landscape-2400x1800.avif"),
        orientation: "landscape",
        alt: "Fifth school championship",
        caption: "Fifth school championship"
      }
    ]
  }
];

const anayaSections = [
  {
    title: "Foundation",
    mediaFolder: anayaPhotoFolder("1-foundation"),
    imageSystemPath: caseStudySectionPath("anaya-beard", "foundation"),
    items: [
      {
        type: "video",
        src: anayaVideo("1-foundation", "IMG_1184.MOV"),
        poster: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-first-workout-ever-poster-q98-1200x900.webp"),
        caption: "First workout ever"
      },
      {
        type: "image",
        src: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-shooting-collage-landscape-stretch-fill-q98-2400x1800.avif"),
        thumb: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-shooting-collage-media-card-stretch-fill-q98-1200x900.avif"),
        alt: "Anaya Beard first workout photo montage",
        caption: "First workout photo montage"
      },
      {
        type: "video",
        src: anayaVideo("1-foundation", "anaya-foundation-shooting-form-baseline-01.mov"),
        poster: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-shooting-form-baseline-media-card-zoom-out-2-right-q98-1200x900.avif"),
        caption: "Baseline shooting form"
      },
      {
        type: "video",
        src: anayaVideo("1-foundation", "anaya-foundation-jump-shot-baseline-01.mp4"),
        poster: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-shooting-form-baseline-media-card-zoom-out-2-right-q98-1200x900.avif"),
        caption: "Baseline jump shot"
      },
      {
        type: "video",
        src: anayaVideo("1-foundation", "anaya-foundation-left-hand-baseline-01.mp4"),
        poster: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-left-hand-development-media-card-stretch-fill-q98-1200x900.avif"),
        caption: "Baseline left-hand finish"
      },
      {
        type: "video",
        src: anayaVideo("1-foundation", "anaya-foundation-fadeaway-baseline-01.mp4"),
        poster: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-free-throw-routine-media-card-stretch-fill-q98-1200x900.avif"),
        caption: "Baseline fadeaway"
      },
      {
        type: "video",
        src: anayaVideo("1-foundation", "anaya-foundation-sealing-baseline-01.mp4"),
        poster: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-free-throw-routine-media-card-stretch-fill-q98-1200x900.avif"),
        caption: "Baseline sealing"
      },
      {
        type: "image",
        src: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-commitment-graphic-landscape-stretch-fill-shift-down-1-q98-2400x1800.avif"),
        thumb: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-commitment-graphic-media-card-stretch-fill-shift-down-1-q98-1200x900.avif"),
        alt: "Anaya Beard commitment graphic from the foundation stage",
        caption: "Foundation commitment graphic"
      },
      {
        type: "image",
        src: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-left-hand-development-landscape-stretch-fill-q98-2400x1800.avif"),
        thumb: anayaPhoto("1-foundation", "case-study-anaya-beard-foundation-left-hand-development-media-card-stretch-fill-q98-1200x900.avif"),
        alt: "Anaya Beard left-hand development foundation work",
        caption: "Left-hand development stills"
      }
    ]
  },
  {
    title: "Development Process",
    mediaFolder: anayaPhotoFolder("2-development-process"),
    imageSystemPath: caseStudySectionPath("anaya-beard", "development-process"),
    items: [
      {
        type: "video",
        src: anayaVideo("2-development-process", "development-process-early-morning.MOV"),
        poster: anayaPhoto("2-development-process", "dp-coaching-feedback-card-q98-1200x900.avif"),
        thumb: anayaPhoto("2-development-process", "dp-coaching-feedback-card-q98-1200x900.avif"),
        caption: "Early morning development work"
      },
      {
        type: "video",
        src: anayaVideo("2-development-process", "IMG_1381.MOV"),
        poster: anayaPhoto("2-development-process", "dp-shot-release-card-q98-1200x900.avif"),
        thumb: anayaPhoto("2-development-process", "dp-shot-release-thumb-q98-600x400.webp"),
        caption: "Shot release repetition video"
      },
      {
        type: "video",
        src: anayaVideo("2-development-process", "IMG_1382.MOV"),
        poster: anayaPhoto("2-development-process", "dp-shot-repetition-card-q98-1200x900.avif"),
        thumb: anayaPhoto("2-development-process", "dp-shot-repetition-thumb-q98-600x400.webp"),
        caption: "Footwork repetition video"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-shooting-form-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-shooting-form-card-q98-1200x900.avif"),
        alt: "Anaya Beard shooting form training",
        caption: "Shooting form training"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-catch-and-shoot-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-catch-and-shoot-card-q98-1200x900.avif"),
        alt: "Anaya Beard catch-and-shoot training",
        caption: "Catch-and-shoot training"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-archer-shooting-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-archer-shooting-card-q98-1200x900.avif"),
        alt: "Anaya Beard Archer shooting development",
        caption: "Archer shooting development"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-shot-repetition-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-shot-repetition-card-q98-1200x900.avif"),
        alt: "Anaya Beard shot repetition",
        caption: "Shot repetition"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-shot-release-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-shot-release-card-q98-1200x900.avif"),
        alt: "Anaya Beard shot release repetition",
        caption: "Shot release repetition"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-seated-shooting-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-seated-shooting-card-q98-1200x900.avif"),
        alt: "Anaya Beard seated shooting drill",
        caption: "Seated shooting drill"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-coaching-feedback-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-coaching-feedback-card-q98-1200x900.avif"),
        alt: "Coach Fogarty giving Anaya Beard development feedback",
        caption: "Coaching feedback"
      },
      {
        type: "image",
        src: anayaPhoto("2-development-process", "dp-homepage-callout-landscape-q98-2400x1800.avif"),
        thumb: anayaPhoto("2-development-process", "dp-homepage-callout-card-q98-1200x900.avif"),
        alt: "Anaya Beard development process teaching moment",
        caption: "Development teaching moment"
      }
    ]
  },
  {
    title: "Leadership Impact",
    mediaFolder: anayaPhotoFolder("3-leadership-impact"),
    imageSystemPath: caseStudySectionPath("anaya-beard", "leadership-impact"),
    items: [
      {
        type: "image",
        src: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-bench-celebration-landscape-zoom-in-1.75-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-bench-celebration-landscape-zoom-in-1.75-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-bench-celebration-media-card-zoom-in-1.75-q98-1200x900.avif"),
        portraitSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-bench-celebration-portrait-zoom-in-1.75-q98-1800x2400.avif"),
        thumbSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-bench-celebration-overlay-thumb-zoom-in-1.75-q98-600x400.webp"),
        alt: "Anaya Beard bench celebration",
        caption: "Bench celebration"
      },
      {
        type: "image",
        src: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-helping-teammate-up-landscape-zoom-in-2.5-left-0.4-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-helping-teammate-up-landscape-zoom-in-2.5-left-0.4-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-helping-teammate-up-media-card-zoom-in-2.5-left-0.4-q98-1200x900.avif"),
        portraitSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-helping-teammate-up-portrait-zoom-in-2.5-left-0.4-q98-1800x2400.avif"),
        thumbSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-helping-teammate-up-overlay-thumb-zoom-in-2.5-left-0.4-q98-600x400.webp"),
        alt: "Anaya Beard helping a teammate up",
        caption: "Helping teammate up"
      },
      {
        type: "image",
        src: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-sideline-energy-landscape-zoom-in-3.5-left-1-up-1-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-sideline-energy-landscape-zoom-in-3.5-left-1-up-1-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-sideline-energy-media-card-zoom-in-3.5-left-1-up-1-q98-1200x900.avif"),
        portraitSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-sideline-energy-portrait-zoom-in-3.5-left-1-up-1-q98-1800x2400.avif"),
        thumbSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-sideline-energy-overlay-thumb-zoom-in-3.5-left-1-up-1-q98-600x400.webp"),
        alt: "Anaya Beard sideline energy",
        caption: "Sideline energy"
      },
      {
        type: "image",
        src: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-teammate-high-five-landscape-shift-down-0.75-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-teammate-high-five-landscape-shift-down-0.75-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-teammate-high-five-media-card-shift-down-0.75-q98-1200x900.avif"),
        portraitSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-teammate-high-five-portrait-shift-down-0.75-q98-1800x2400.avif"),
        thumbSrc: anayaPhoto("3-leadership-impact", "case-study-anaya-beard-leadership-impact-teammate-high-five-overlay-thumb-shift-down-0.75-q98-600x400.webp"),
        alt: "Anaya Beard high-fiving teammates",
        caption: "Teammate high-five"
      },
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-court-leadership", "Court leadership", "Anaya Beard court leadership"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-team-celebration", "Team celebration", "Anaya Beard team celebration"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-bench-leadership", "Bench leadership", "Anaya Beard bench leadership"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-team-walkout", "Team walkout", "Anaya Beard team walkout leadership moment"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-group-training", "Group training standard", "Anaya Beard group training standard"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-beach-training", "Beach training", "Anaya Beard beach training"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-defensive-slide-drill", "Defensive slide drill", "Anaya Beard defensive slide drill"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-postgame-team-moment", "Postgame team moment", "Anaya Beard postgame team moment"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-shooting-workout", "Shooting workout", "Anaya Beard shooting workout"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-three-fingers", "Three-fingers huddle", "Anaya Beard three-fingers huddle"),
      anayaCaseStudyImage("3-leadership-impact", "case-study-anaya-beard-leadership-impact-team-shooting-workout", "Team shooting workout", "Anaya Beard team shooting workout")
    ]
  },
  {
    title: "Breakthrough Production",
    mediaFolder: anayaPhotoFolder("4-breakthrough-production"),
    imageSystemPath: caseStudySectionPath("anaya-beard", "breakthrough-production"),
    items: [
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-mid-range-jumper-landscape-shift-up-2.75-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-mid-range-jumper-landscape-shift-up-2.75-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-mid-range-jumper-media-card-stretch-fill-whole-image-visible-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-mid-range-jumper-overlay-thumb-shift-up-3-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-mid-range-jumper-portrait-stretch-fill-whole-image-visible-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard mid-range jumper in breakthrough production",
        caption: "Mid-range jumper"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-contact-finish-landscape-shift-down-1-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-contact-finish-landscape-shift-down-1-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-contact-finish-media-card-shift-down-1-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-contact-finish-overlay-thumb-shift-down-1-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-contact-finish-portrait-shift-down-1-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard contact finish in breakthrough production",
        caption: "Contact finish"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-landscape-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-landscape-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-card-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-thumb-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-portrait-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard catch-and-shoot three in game performance",
        caption: "Catch-and-shoot three"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-drive-right-landscape-stretch-fill-shift-up-3-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-drive-right-landscape-stretch-fill-shift-up-3-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-drive-right-media-card-stretch-fill-shift-up-3-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-drive-right-overlay-thumb-shift-up-1-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-drive-right-portrait-stretch-fill-shift-up-3-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard drive right in breakthrough production",
        caption: "Drive right"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-high-post-jab-landscape-cover-center-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-high-post-jab-landscape-cover-center-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-high-post-jab-media-card-cover-left-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-high-post-jab-overlay-thumb-cover-center-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-high-post-jab-portrait-zoom-in-106-shift-up-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard high-post jab in breakthrough production",
        caption: "High post jab"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-landscape-stretch-fill-whole-image-visible-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-landscape-stretch-fill-whole-image-visible-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-media-card-stretch-fill-whole-image-visible-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-overlay-thumb-stretch-fill-whole-image-visible-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-portrait-stretch-fill-whole-image-visible-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard fast-break floating finish in breakthrough production",
        caption: "Fast-break floating finish"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "bp-fast-break-landscape-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "bp-fast-break-landscape-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "bp-fast-break-card-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "bp-fast-break-thumb-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "bp-fast-break-portrait-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard fast break in breakthrough production",
        caption: "Fast break"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-ecc-crossover-landscape-stretch-fill-whole-image-visible-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-ecc-crossover-landscape-stretch-fill-whole-image-visible-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-ecc-crossover-media-card-stretch-fill-whole-image-visible-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-ecc-crossover-overlay-thumb-stretch-fill-whole-image-visible-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-ecc-crossover-portrait-stretch-fill-whole-image-visible-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard ECC crossover feature in breakthrough production",
        caption: "ECC crossover"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "bp-contested-drive-landscape-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "bp-contested-drive-landscape-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "bp-contested-drive-card-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "bp-contested-drive-thumb-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "bp-contested-drive-portrait-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard contested drive in breakthrough production",
        caption: "Contested drive"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-free-throw-focus-landscape-stretch-fill-shift-down-3-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-free-throw-focus-landscape-stretch-fill-shift-down-3-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-free-throw-focus-media-card-stretch-fill-shift-down-3-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-free-throw-focus-overlay-thumb-shift-right-3-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-free-throw-focus-portrait-stretch-fill-shift-down-3-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard free throw focus in breakthrough production",
        caption: "Free throw focus"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "bp-game-action-front-landscape-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "bp-game-action-front-landscape-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "bp-game-action-front-card-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "bp-game-action-front-thumb-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "bp-game-action-front-portrait-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard game action from the front in breakthrough production",
        caption: "Game action front"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-1-landscape-stretch-fill-whole-image-visible-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-1-landscape-stretch-fill-whole-image-visible-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-1-media-card-stretch-fill-whole-image-visible-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-1-overlay-thumb-stretch-fill-whole-image-visible-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-fast-break-floating-finish-1-portrait-stretch-fill-whole-image-visible-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard transition dribble in breakthrough production",
        caption: "Transition dribble"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "bp-back-down-landscape-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "bp-back-down-landscape-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "bp-back-down-card-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "bp-back-down-thumb-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "bp-back-down-portrait-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard back-down finish in breakthrough production",
        caption: "Back-down finish"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-three-point-focus-landscape-stretch-fill-shift-down-2-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-three-point-focus-landscape-stretch-fill-shift-down-2-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-three-point-focus-media-card-stretch-fill-shift-down-3-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-three-point-focus-overlay-thumb-zoom-in-2-center-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-three-point-focus-portrait-stretch-fill-shift-down-2-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard three-point focus in breakthrough production",
        caption: "Three-point focus"
      },
      {
        type: "image",
        src: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-tip-off-landscape-stretch-fill-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-tip-off-landscape-stretch-fill-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-tip-off-media-card-stretch-fill-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-tip-off-overlay-thumb-stretch-fill-shift-down-1-q98-600x400.webp"),
        portraitSrc: anayaPhoto("4-breakthrough-production", "case-study-anaya-beard-breakthrough-production-tip-off-portrait-stretch-fill-q98-1800x2400.avif"),
        orientation: "landscape",
        alt: "Anaya Beard tip-off in breakthrough production",
        caption: "Tip-off"
      },
      {
        type: "video",
        src: anayaVideo("4-breakthrough-production", "anaya-breakthrough-production-jump-shot-01.mp4"),
        poster: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-card-q98-1200x900.avif"),
        caption: "Breakthrough jump shot"
      },
      {
        type: "video",
        src: anayaVideo("4-breakthrough-production", "anaya-breakthrough-production-left-hand-01.mp4"),
        poster: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-card-q98-1200x900.avif"),
        caption: "Breakthrough left-hand finish"
      },
      {
        type: "video",
        src: anayaVideo("4-breakthrough-production", "anaya-breakthrough-production-fadeaway-01.mp4"),
        poster: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-card-q98-1200x900.avif"),
        caption: "Breakthrough fadeaway"
      },
      {
        type: "video",
        src: anayaVideo("4-breakthrough-production", "anaya-breakthrough-production-sealing-01.mp4"),
        poster: anayaPhoto("4-breakthrough-production", "bp-catch-and-shoot-three-card-q98-1200x900.avif"),
        caption: "Breakthrough sealing"
      }
    ]
  },
  {
    title: "Accolades Recognition",
    mediaFolder: anayaPhotoFolder("5-accolades-recognition"),
    imageSystemPath: caseStudySectionPath("anaya-beard", "accolades-recognition"),
    items: [
      {
        ...anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-scholar-athlete-of-the-year", "Scholar Athlete of the Year", "Anaya Beard Scholar Athlete of the Year recognition"),
        src: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-scholar-athlete-of-the-year-landscape-wide-tighten-x-04-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-scholar-athlete-of-the-year-landscape-wide-tighten-x-04-q98-2400x1800.avif"),
        thumbSrc: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-scholar-athlete-of-the-year-overlay-thumb-wide-tighten-x-04-q98-600x400.webp"),
        mediaCardSrc: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-scholar-athlete-of-the-year-media-card-wide-tighten-x-04-q98-1200x900.avif")
      },
      {
        type: "image",
        src: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-500-point-club-landscape-shift-down-1-q98-2400x1800.avif"),
        fullSrc: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-500-point-club-landscape-shift-down-1-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-500-point-club-media-card-shift-down-1-q98-1200x900.avif"),
        portraitSrc: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-500-point-club-portrait-shift-down-1-q98-1800x2400.avif"),
        thumbSrc: anayaPhoto("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-500-point-club-overlay-thumb-shift-down-1-q98-600x400.webp"),
        alt: "Anaya Beard 500 Point Club recognition",
        caption: "500 Point Club"
      },
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-first-team-all-conference-opoy", "First Team All-Conference and OPOY", "Anaya Beard First Team All-Conference and OPOY recognition"),
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-back-to-back-first-team-all-conference", "Back-to-back First Team All-Conference", "Anaya Beard back-to-back First Team All-Conference recognition"),
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-athlete-of-the-week-01", "Athlete of the Week", "Anaya Beard Athlete of the Week recognition"),
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-awards-ceremony", "Awards ceremony recognition", "Anaya Beard awards ceremony recognition"),
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-all-tournament", "All-Tournament recognition", "Anaya Beard All-Tournament recognition"),
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-coach-photo", "Coach and athlete photo", "Anaya Beard coach and athlete recognition photo"),
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-playoff-feature", "Playoff feature", "Anaya Beard playoff feature recognition"),
      anayaCaseStudyImage("5-accolades-recognition", "case-study-anaya-beard-accolades-recognition-media-interview-01", "Media interview", "Anaya Beard media interview recognition")
    ]
  },
  {
    title: "Next-Level Opportunities",
    mediaFolder: anayaPhotoFolder("6-next-level-opportunities"),
    imageSystemPath: caseStudySectionPath("anaya-beard", "next-level-opportunities"),
    layout: "featured",
    items: [
      {
        type: "image",
        src: anayaPhoto("6-next-level-opportunities", "case-study-anaya-beard-next-level-opportunities-augusta-university-commitment-landscape-stretch-fill-soft-saturation-q98-2400x1800.avif"),
        mediaCardSrc: anayaPhoto("6-next-level-opportunities", "case-study-anaya-beard-next-level-opportunities-augusta-university-commitment-media-card-stretch-fill-soft-saturation-q98-1200x900.avif"),
        thumbSrc: anayaPhoto("6-next-level-opportunities", "case-study-anaya-beard-next-level-opportunities-augusta-university-commitment-overlay-thumb-stretch-fill-soft-saturation-q98-600x400.webp"),
        fullSrc: anayaPhoto("6-next-level-opportunities", "case-study-anaya-beard-next-level-opportunities-augusta-university-commitment-landscape-stretch-fill-soft-saturation-q98-2400x1800.avif"),
        portraitSrc: anayaPhoto("6-next-level-opportunities", "case-study-anaya-beard-next-level-opportunities-augusta-university-commitment-portrait-stretch-fill-soft-saturation-q98-1800x2400.avif"),
        alt: "Anaya Beard Augusta University next-level opportunity",
        caption: "Augusta University opportunity"
      }
    ]
  }
];

const playingCareerAlbums = [
  {
    title: "Playing Career & Achievements",
    category: "Playing Career",
    eyebrow: "PLAYING BACKGROUND",
    caption: "Playing career photo album",
    showCounter: true,
    thumbnail: playingCareerPhoto("playing-career-shasta-college-jump-shot-carousel-1200x900.avif"),
    items: [
      {
        title: "Shasta College Jump Shot",
        carouselSrc: playingCareerPhoto("playing-career-shasta-college-jump-shot-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-shasta-college-jump-shot-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-shasta-college-jump-shot-portrait-1800x2400.avif"),
        orientation: "portrait",
        carouselPosition: "50% 42%",
        alt: "Matthew Fogarty taking a jump shot at Shasta College"
      },
      {
        title: "Rocky Mountain College Portrait",
        carouselSrc: playingCareerPhoto("playing-career-rocky-mountain-college-fist-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-rocky-mountain-college-fist-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-rocky-mountain-college-fist-portrait-1800x2400.avif"),
        orientation: "portrait",
        carouselPosition: "50% 35%",
        alt: "Matthew Fogarty Rocky Mountain College portrait"
      },
      {
        title: "Foothill High School Fadeaway",
        carouselSrc: playingCareerPhoto("playing-career-foothill-high-school-fadeaway-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-foothill-high-school-fadeaway-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-foothill-high-school-fadeaway-landscape-2400x1800.avif"),
        orientation: "landscape",
        carouselPosition: "50% 38%",
        alt: "Matthew Fogarty shooting a fadeaway at Foothill High School"
      },
      {
        title: "Shasta College Ball Handling",
        carouselSrc: playingCareerPhoto("playing-career-shasta-college-ball-handling-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-shasta-college-ball-handling-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-shasta-college-ball-handling-portrait-1800x2400.avif"),
        orientation: "portrait",
        carouselPosition: "50% 45%",
        alt: "Matthew Fogarty handling the ball at Shasta College"
      },
      {
        title: "Foothill High School Section Championship Celebration",
        carouselSrc: playingCareerPhoto("playing-career-foothill-high-school-section-champions-celebration-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-foothill-high-school-section-champions-celebration-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-foothill-high-school-section-champions-celebration-landscape-2400x1800.avif"),
        orientation: "landscape",
        carouselPosition: "50% 45%",
        alt: "Matthew Fogarty celebrating a Foothill High School section championship"
      },
      {
        title: "Foothill High School Section Champions",
        carouselSrc: playingCareerPhoto("playing-career-foothill-high-school-section-champions-group-hug-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-foothill-high-school-section-champions-group-hug-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-foothill-high-school-section-champions-group-hug-landscape-2400x1800.avif"),
        orientation: "landscape",
        carouselPosition: "50% 45%",
        alt: "Matthew Fogarty with Foothill High School section champions"
      },
      {
        title: "Rocky Mountain College Free Throw",
        carouselSrc: playingCareerPhoto("playing-career-rocky-mountain-college-free-throw-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-rocky-mountain-college-free-throw-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-rocky-mountain-college-free-throw-landscape-2400x1800.avif"),
        orientation: "landscape",
        carouselPosition: "50% 42%",
        alt: "Matthew Fogarty shooting a free throw at Rocky Mountain College"
      },
      {
        title: "Rocky Mountain College Push Shot",
        carouselSrc: playingCareerPhoto("playing-career-rocky-mountain-college-push-shot-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-rocky-mountain-college-push-shot-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-rocky-mountain-college-push-shot-portrait-1800x2400.avif"),
        orientation: "portrait",
        carouselPosition: "50% 40%",
        alt: "Matthew Fogarty shooting a push shot at Rocky Mountain College"
      },
      {
        title: "Shasta College Post Finish",
        carouselSrc: playingCareerPhoto("playing-career-shasta-college-post-finish-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-shasta-college-post-finish-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-shasta-college-post-finish-landscape-2400x1800.avif"),
        orientation: "landscape",
        carouselPosition: "50% 40%",
        alt: "Matthew Fogarty finishing in the post at Shasta College"
      },
      {
        title: "Shasta College Bench Moment",
        carouselSrc: playingCareerPhoto("playing-career-shasta-college-bench-moment-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-shasta-college-bench-moment-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-shasta-college-bench-moment-landscape-2400x1800.avif"),
        orientation: "landscape",
        carouselPosition: "50% 45%",
        alt: "Matthew Fogarty during a Shasta College bench moment"
      },
      {
        title: "Shasta College Rebound",
        carouselSrc: playingCareerPhoto("playing-career-shasta-college-rebound-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-shasta-college-rebound-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-shasta-college-rebound-portrait-1800x2400.avif"),
        orientation: "portrait",
        carouselPosition: "50% 38%",
        alt: "Matthew Fogarty rebounding at Shasta College"
      },
      {
        title: "Shasta College Court Vision",
        carouselSrc: playingCareerPhoto("playing-career-shasta-college-court-vision-carousel-1200x900.avif"),
        thumbSrc: playingCareerPhoto("playing-career-shasta-college-court-vision-overlay-thumb-600x400.webp"),
        fullSrc: playingCareerPhoto("playing-career-shasta-college-court-vision-portrait-1800x2400.avif"),
        orientation: "portrait",
        carouselPosition: "50% 50%",
        alt: "Matthew Fogarty showing court vision at Shasta College"
      }
    ]
  }
];

const playingCareerAwardAlbums = [
  {
    title: "Playing Career Awards",
    category: "Awards",
    eyebrow: "PLAYING BACKGROUND",
    caption: "Playing career awards",
    showCounter: true,
    thumbnail: playingCareerAward("playing-awards-shasta-college-hall-of-fame-overlay-thumb-600x400.webp"),
    items: [
      {
        type: "image",
        fullSrc: playingCareerAward("playing-awards-shasta-college-hall-of-fame-landscape-2400x1800.avif"),
        thumbSrc: playingCareerAward("playing-awards-shasta-college-hall-of-fame-overlay-thumb-600x400.webp"),
        alt: "Shasta College Hall of Fame award",
        caption: "College Hall of Fame - Shasta College",
        orientation: "landscape"
      },
      {
        type: "image",
        fullSrc: playingCareerAward("playing-awards-shasta-college-all-state-landscape-2400x1800.avif"),
        thumbSrc: playingCareerAward("playing-awards-shasta-college-all-state-overlay-thumb-600x400.webp"),
        alt: "First Team All-State award",
        caption: "First Team All-State recognition",
        orientation: "landscape"
      },
      {
        type: "image",
        fullSrc: playingCareerAward("playing-awards-shasta-college-conference-mvp-landscape-2400x1800.avif"),
        thumbSrc: playingCareerAward("playing-awards-shasta-college-conference-mvp-overlay-thumb-600x400.webp"),
        alt: "Conference MVP award",
        caption: "Conference MVP recognition",
        orientation: "landscape"
      },
      {
        type: "image",
        fullSrc: playingCareerAward("playing-awards-shasta-college-outstanding-performance-landscape-2400x1800.avif"),
        thumbSrc: playingCareerAward("playing-awards-shasta-college-outstanding-performance-overlay-thumb-600x400.webp"),
        alt: "Outstanding performance award",
        caption: "Outstanding performance recognition",
        orientation: "landscape"
      },
      {
        type: "image",
        fullSrc: playingCareerAward("playing-awards-rocky-mountain-college-mvp-portrait-1800x2400.avif"),
        thumbSrc: playingCareerAward("playing-awards-rocky-mountain-college-mvp-overlay-thumb-600x400.webp"),
        alt: "Rocky Mountain College MVP award",
        caption: "Rocky Mountain College MVP",
        orientation: "portrait"
      },
      {
        type: "image",
        fullSrc: playingCareerAward("playing-awards-rocky-mountain-college-2nd-team-all-conference-landscape-2400x1800.avif"),
        thumbSrc: playingCareerAward("playing-awards-rocky-mountain-college-2nd-team-all-conference-overlay-thumb-600x400.webp"),
        alt: "Second Team All-Conference award",
        caption: "Second Team All-Conference recognition",
        orientation: "landscape"
      }
    ]
  }
];

const archerMediaAlbum = {
  eyebrow: "PLAYER DEVELOPMENT INNOVATION",
  title: "The Archer Training Visuals",
  showCounter: true,
  items: [
    {
      type: "image",
      src: "assets/the-archer/photos/archer-shooting-development-wide-01.jpg",
      thumbSrc: "assets/the-archer/photos/archer-shooting-development-wide-01.jpg",
      alt: "The Archer shooting development wide view",
      caption: "Shooting development wide view"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-arc-comparison-low-vs-high-01.jpg",
      thumbSrc: "assets/the-archer/photos/archer-arc-comparison-low-vs-high-01.jpg",
      alt: "Arc comparison low versus high",
      caption: "Shooting Arc Training - low versus high arc"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-free-throw-set-position-close-placement-01.png",
      thumbSrc: "assets/the-archer/photos/archer-free-throw-set-position-close-placement-01.png",
      alt: "Free throw set position close placement",
      caption: "Standard Placement - free throw set position"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-free-throw-shooting-motion-close-placement-01.png",
      thumbSrc: "assets/the-archer/photos/archer-free-throw-shooting-motion-close-placement-01.png",
      alt: "Free throw shooting motion close placement",
      caption: "Release Point Training - shooting motion"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-free-throw-release-close-placement-01.png",
      thumbSrc: "assets/the-archer/photos/archer-free-throw-release-close-placement-01.png",
      alt: "Free throw release close placement",
      caption: "Release Point Training - release position"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-free-throw-close-placement-01.jpg",
      thumbSrc: "assets/the-archer/photos/archer-free-throw-close-placement-01.jpg",
      alt: "Free throw close placement",
      caption: "Standard Placement - free throw close placement"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-free-throw-set-position-01.jpg",
      thumbSrc: "assets/the-archer/photos/archer-free-throw-set-position-01.jpg",
      alt: "Free throw set position",
      caption: "Standard Placement - set position reference"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-free-throw-group-demonstration-01.jpg",
      thumbSrc: "assets/the-archer/photos/archer-free-throw-group-demonstration-01.jpg",
      alt: "Free throw group demonstration",
      caption: "Drill Examples - group demonstration"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-coach-demonstration-close-placement-01.jpg",
      thumbSrc: "assets/the-archer/photos/archer-coach-demonstration-close-placement-01.jpg",
      alt: "Coach demonstration close placement",
      caption: "Drill Examples - coach demonstration"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-release-high-arc-close-placement-01.png",
      thumbSrc: "assets/the-archer/photos/archer-release-high-arc-close-placement-01.png",
      alt: "Release high arc close placement",
      caption: "Shooting Arc Training - high arc release"
    },
    {
      type: "image",
      src: "assets/the-archer/photos/archer-jump-hook-apex-point-01.png",
      thumbSrc: "assets/the-archer/photos/archer-jump-hook-apex-point-01.png",
      alt: "Jump hook apex point",
      caption: "Training Progressions - jump hook apex point"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-cut-and-floater-close-placement-01.mov",
      poster: "assets/the-archer/photos/archer-shooting-development-wide-01.jpg",
      caption: "Cut and floater close placement"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-floater-touch-arc-training-01.mov",
      poster: "assets/the-archer/photos/archer-arc-comparison-low-vs-high-01.jpg",
      caption: "Floater touch arc training"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-prototype-push-shot-01.mov",
      poster: "assets/the-archer/photos/archer-free-throw-set-position-01.jpg",
      caption: "Prototype push shot"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-prototype-push-shot-02.mov",
      poster: "assets/the-archer/photos/archer-free-throw-set-position-01.jpg",
      caption: "Prototype push shot variation"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-standard-placement-free-throw-high-arc-01.mov",
      poster: "assets/the-archer/photos/archer-free-throw-release-close-placement-01.png",
      caption: "Standard placement free throw high arc"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-fadeaway-close-placement-01.mov",
      poster: "assets/the-archer/photos/archer-release-high-arc-close-placement-01.png",
      caption: "Fadeaway close placement"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-free-throw-close-placement-demonstration-01.mov",
      poster: "assets/the-archer/photos/archer-free-throw-close-placement-01.jpg",
      caption: "Free throw close placement demonstration"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-three-point-shooting-close-placement-01.mov",
      poster: "assets/the-archer/photos/archer-coach-demonstration-close-placement-01.jpg",
      caption: "Three-point shooting close placement"
    },
    {
      type: "video",
      src: "assets/the-archer/videos/archer-jump-hook-close-placement-01.mov",
      poster: "assets/the-archer/photos/archer-jump-hook-apex-point-01.png",
      caption: "Jump hook close placement"
    }
  ]
};

const libraryGrid = document.querySelector("#libraryGrid");
const galleryGrid = document.querySelector("#galleryGrid");
const mediaCategoryGrid = document.querySelector("#mediaCategoryGrid");
const mediaAlbumSections = document.querySelector("#mediaAlbumSections");
const mediaVideoGrid = document.querySelector("#mediaVideoGrid");
const mediaPlayingCareerGrid = document.querySelector("#mediaPlayingCareerGrid");
const mediaPlayingAwardsGrid = document.querySelector("#mediaPlayingAwardsGrid");
const mediaArcherFeatured = document.querySelector("#mediaArcherFeatured");
const mediaArcherPhotoGrid = document.querySelector("#mediaArcherPhotoGrid");
const mediaArcherVideoGrid = document.querySelector("#mediaArcherVideoGrid");
const mediaAnayaSections = document.querySelector("#mediaAnayaSections");
const mediaVideoActions = document.querySelector("#mediaVideoActions");
const mediaPlayingCareerButton = document.querySelector("#mediaPlayingCareerButton");
const mediaPlayingAwardsButton = document.querySelector("#mediaPlayingAwardsButton");
const mediaArcherPhotoButton = document.querySelector("#mediaArcherPhotoButton");
const mediaArcherVideoButton = document.querySelector("#mediaArcherVideoButton");
const mediaAnayaGalleryButton = document.querySelector("#mediaAnayaGalleryButton");
const playingCareerTrack = document.querySelector("#playingCareerTrack");
const playingCareerPrev = document.querySelector("#playingCareerPrev");
const playingCareerNext = document.querySelector("#playingCareerNext");
const playingCareerAwards = document.querySelector("#playingCareerAwards");
const anayaGalleries = document.querySelectorAll("[data-anaya-gallery]");
const mediaOverlay = document.querySelector("#mediaOverlay");
const mediaOverlayEyebrow = document.querySelector(".media-overlay-content .eyebrow");
const mediaOverlayTitle = document.querySelector("#mediaOverlayTitle");
const mediaOverlayCounter = document.querySelector("#mediaOverlayCounter");
const mediaOverlayCaption = document.querySelector("#mediaOverlayCaption");
const mediaOverlayViewer = document.querySelector("#mediaOverlayViewer");
const mediaOverlayStrip = document.querySelector("#mediaOverlayStrip");
const mediaOverlayClose = document.querySelector("#mediaOverlayClose");
const mediaOverlayPrev = document.querySelector("#mediaOverlayPrev");
const mediaOverlayNext = document.querySelector("#mediaOverlayNext");
let activeOverlayAlbums = mediaAlbums;
let activeAlbumIndex = 0;
let activeItemIndex = 0;
let playingCareerResizeTimer;
let mediaLibraryAlbums = [];

function enableDragScroll(track) {
  if (!track || track.dataset.dragScrollReady === "true") {
    return;
  }

  track.dataset.dragScrollReady = "true";

  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let didDrag = false;
  let suppressClickUntil = 0;

  const finishDrag = () => {
    if (pointerId === null) {
      return;
    }

    if (track.hasPointerCapture?.(pointerId)) {
      track.releasePointerCapture(pointerId);
    }

    pointerId = null;

    if (didDrag) {
      suppressClickUntil = window.performance.now() + 350;
      track.dataset.dragScrollSuppressUntil = String(suppressClickUntil);
    }
  };

  track.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || track.scrollWidth <= track.clientWidth) {
      return;
    }

    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startScrollLeft = track.scrollLeft;
    didDrag = false;
    track.setPointerCapture?.(pointerId);
  });

  track.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (Math.abs(deltaX) > 6 && Math.abs(deltaX) > Math.abs(deltaY)) {
      didDrag = true;
      track.scrollLeft = startScrollLeft - deltaX;
      event.preventDefault();
    }
  });

  track.addEventListener("pointerup", finishDrag);
  track.addEventListener("pointercancel", finishDrag);
  track.addEventListener(
    "click",
    (event) => {
      if (didDrag || window.performance.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true
  );
}

function enableSwipeCarousel(surface, onSwipe) {
  if (!surface || surface.dataset.swipeCarouselReady === "true") {
    return;
  }

  surface.dataset.swipeCarouselReady = "true";

  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let didSwipe = false;
  let suppressClickUntil = 0;

  const finishSwipe = (event) => {
    if (event.pointerId !== pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      didSwipe = true;
      suppressClickUntil = window.performance.now() + 350;
      onSwipe(deltaX < 0 ? 1 : -1);
    }

    if (surface.hasPointerCapture?.(pointerId)) {
      surface.releasePointerCapture(pointerId);
    }

    pointerId = null;
  };

  surface.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }

    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    didSwipe = false;
    surface.setPointerCapture?.(pointerId);
  });

  surface.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault();
    }
  });

  surface.addEventListener("pointerup", finishSwipe);
  surface.addEventListener("pointercancel", finishSwipe);
  surface.addEventListener(
    "click",
    (event) => {
      if (didSwipe || window.performance.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true
  );
}

function linkTarget(button) {
  return button.internal ? "" : ' target="_blank" rel="noreferrer"';
}

function systemTypeSlug(type) {
  return type.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function renderLibrary() {
  if (!libraryGrid) {
    return;
  }

  libraryGrid.innerHTML = librarySections
    .map(
      (section) => `
        <article class="library-card system-card" id="system-${systemTypeSlug(section.type)}" data-system-type="${systemTypeSlug(section.type)}">
          <h3>${section.title}</h3>
          <p>${section.description}</p>
          <span class="library-card-media" aria-hidden="${section.media?.alt ? "false" : "true"}">
            <img src="${encodeURI(section.media?.src || "")}" alt="${section.media?.alt || ""}" loading="lazy" onerror="this.closest('.library-card-media').classList.add('is-missing'); this.remove();" />
          </span>
          <div class="library-actions">
            ${section.buttons
              .map(
                (button) =>
                  `<a class="button button-secondary button-small" href="${encodeURI(button.href)}"${linkTarget(button)}>${button.label}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  if (!galleryGrid) {
    return;
  }

  galleryGrid.innerHTML = mediaAlbums
    .map(
      (item, index) => `
        <button class="gallery-card${item.crop ? ` gallery-card-${item.crop}` : ""}" type="button" data-album-index="${index}">
          <span class="gallery-media">
            <img src="${encodeURI(item.thumbnail)}" data-image-role="${item.thumbnailRole || "thumb"}" alt="${item.caption}" />
          </span>
          <span class="gallery-card-caption">
            <span class="gallery-card-title">${item.caption}</span>
            <span class="gallery-card-arrow" aria-hidden="true">&rsaquo;</span>
          </span>
        </button>
      `
    )
    .join("");

  galleryGrid.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      openMediaAlbum(Number(card.dataset.albumIndex));
    });
  });
}

function mediaLibraryAlbum(album, eyebrow = "GALLERY") {
  return {
    ...album,
    eyebrow: album.eyebrow || eyebrow,
    showCounter: true,
    mediaLibrary: true
  };
}

function mediaLibraryCardMarkup(albumIndex, itemIndex, item, label = "Gallery", titleOverride = "") {
  const isVideo = item.type === "video";
  const title = titleOverride || mediaItemTitle(item, mediaLibraryAlbums[albumIndex]);
  const thumb = isVideo ? mediaItemPoster(item) : mediaItemCardSrc(item);

  return `
    <button class="media-library-card ${isVideo ? "media-video-card" : "media-photo-card"}" type="button" data-media-library-album="${albumIndex}" data-media-library-item="${itemIndex}" aria-label="Open ${item.alt || title}">
      <span class="media-library-frame">
        ${
          isVideo
            ? `<video src="${encodeURI(item.src)}"${thumb ? ` poster="${encodeURI(thumb)}"` : ""} muted playsinline preload="metadata"></video><span class="media-card-kind">Video</span>`
            : `<img src="${encodeURI(thumb)}" alt="${item.alt || title}" loading="lazy" />`
        }
      </span>
      <span class="media-library-meta">
        <span class="library-type">${label}</span>
        <strong>${title}</strong>
      </span>
    </button>
  `;
}

function connectMediaLibraryCards(root = document) {
  root.querySelectorAll("[data-media-library-album]").forEach((card) => {
    card.addEventListener("click", () => {
      openMediaAlbum(
        Number(card.dataset.mediaLibraryAlbum),
        mediaLibraryAlbums,
        Number(card.dataset.mediaLibraryItem || 0)
      );
    });
  });

  root.querySelectorAll("[data-open-media-gallery]").forEach((button) => {
    button.addEventListener("click", () => {
      openMediaAlbum(Number(button.dataset.openMediaGallery), mediaLibraryAlbums);
    });
  });
}

function renderMediaLibraryPage() {
  if (!mediaCategoryGrid) {
    return;
  }

  const coachingAlbums = mediaAlbums.map((album) => mediaLibraryAlbum(album, "COACHING GALLERY"));
  const archerAlbum = mediaLibraryAlbum(archerMediaAlbum, "PLAYER DEVELOPMENT INNOVATION");
  const anayaAlbums = anayaSections.map((section) => mediaLibraryAlbum(section, "PLAYER DEVELOPMENT CASE STUDY"));
  const playingAlbum = mediaLibraryAlbum(playingCareerAlbums[0], "PLAYING BACKGROUND");
  const awardsAlbum = mediaLibraryAlbum(playingCareerAwardAlbums[0], "PLAYING BACKGROUND");
  const archerPhotoAlbum = mediaLibraryAlbum(
    {
      title: "The Archer Photos",
      items: archerMediaAlbum.items.filter((item) => item.type !== "video")
    },
    "PLAYER DEVELOPMENT INNOVATION"
  );
  const archerVideoAlbum = mediaLibraryAlbum(
    {
      title: "The Archer Videos",
      items: archerMediaAlbum.items.filter((item) => item.type === "video")
    },
    "PLAYER DEVELOPMENT INNOVATION"
  );
  const anayaVideoAlbum = mediaLibraryAlbum(
    {
      title: "Anaya Beard Development Videos",
      items: anayaSections.flatMap((section) =>
        (section.items || [])
          .filter((item) => item.type === "video")
          .map((item) => ({ ...item, caption: `${section.title} - ${item.caption || "Video"}` }))
      )
    },
    "PLAYER DEVELOPMENT CASE STUDY"
  );
  const anayaFullAlbum = mediaLibraryAlbum(
    {
      title: "Anaya Beard Development Gallery",
      items: anayaSections.flatMap((section) =>
        activeAlbumItemsFor(section).map((item) => ({
          ...item,
          caption: `${section.title} - ${item.caption || mediaItemTitle(item, section)}`
        }))
      )
    },
    "PLAYER DEVELOPMENT CASE STUDY"
  );

  mediaLibraryAlbums = [
    ...coachingAlbums,
    archerAlbum,
    ...anayaAlbums,
    playingAlbum,
    awardsAlbum,
    archerPhotoAlbum,
    archerVideoAlbum,
    anayaVideoAlbum,
    anayaFullAlbum
  ];

  const albumIndexFor = (album) => mediaLibraryAlbums.indexOf(album);
  const galleryButton = (albumIndex, label) => `<button class="button button-secondary button-small" type="button" data-open-media-gallery="${albumIndex}">${label}</button>`;
  const previewCard = ({ albumIndex, itemIndex, label, titleOverride }) => {
    const album = mediaLibraryAlbums[albumIndex];
    const item = activeAlbumItemsFor(album)[itemIndex];
    return mediaLibraryCardMarkup(albumIndex, itemIndex, item, label, titleOverride);
  };
  const previewCarousels = {};
  const visiblePreviewCards = (cards, start = 0) => {
    const count = Math.min(3, cards.length);
    return Array.from({ length: count }, (_, offset) => cards[(start + offset) % cards.length]);
  };
  const previewCarouselMarkup = (key, cards, renderCard = previewCard) => {
    previewCarousels[key] = { cards, start: 0, renderCard };
    const hasArrows = cards.length > 3;

    return `
      <div class="media-preview-carousel" data-media-preview-carousel="${key}">
        <button class="media-carousel-arrow media-carousel-arrow-prev" type="button" data-media-carousel-direction="-1" aria-label="Previous gallery cards"${hasArrows ? "" : " hidden"}>&lsaquo;</button>
        <div class="media-section-grid" data-media-carousel-track>
          ${visiblePreviewCards(cards).map(renderCard).join("")}
        </div>
        <button class="media-carousel-arrow media-carousel-arrow-next" type="button" data-media-carousel-direction="1" aria-label="Next gallery cards"${hasArrows ? "" : " hidden"}>&rsaquo;</button>
      </div>
    `;
  };

  const categoryCards = [
    { title: "Sideline Leadership", desc: "Game energy, staff presence and leadership moments.", href: "#coaching-media", albumIndex: albumIndexFor(coachingAlbums[0]) },
    { title: "Coaching Details", desc: "Teaching, preparation and game-day coaching details.", href: "#coaching-media", albumIndex: albumIndexFor(coachingAlbums[1]) },
    { title: "Player Development", desc: "On-court teaching and player-development work.", href: "#coaching-media", albumIndex: albumIndexFor(coachingAlbums[2]) },
    { title: "Team Environment", desc: "Huddles, program culture and team connection.", href: "#coaching-media", albumIndex: albumIndexFor(coachingAlbums[3]) },
    { title: "Team Celebration", desc: "Big shots, reactions and team moments.", href: "#coaching-media", albumIndex: albumIndexFor(coachingAlbums[4]) },
    { title: "Championship Culture", desc: "Championship history and program standards.", href: "#coaching-media", albumIndex: albumIndexFor(coachingAlbums[5]) },
    { title: "The Archer", desc: "Shooting-development photos and training clips.", href: "#archer-media", albumIndex: albumIndexFor(archerAlbum) },
    { title: "Anaya Beard Case Study", desc: "Development journey media and proof of growth.", href: "#anaya-media", albumIndex: albumIndexFor(anayaFullAlbum) },
    { title: "Playing Career", desc: "College and high school playing-career photos.", href: "#playing-career-media", albumIndex: albumIndexFor(playingAlbum) },
    { title: "Playing Career Awards", desc: "Awards, plaques and playing recognition.", href: "#playing-awards-media", albumIndex: albumIndexFor(awardsAlbum) }
  ];

  const categoryCardMarkup = (card) => {
      const album = mediaLibraryAlbums[card.albumIndex];
      const firstItem = activeAlbumItemsFor(album)[0];
      const thumb = firstItem ? mediaItemCardSrc(firstItem) : album.thumbnail;

      return `
        <article class="media-category-card">
          <span class="media-category-frame">
            <img src="${encodeURI(thumb)}" alt="${card.title}" loading="lazy" />
          </span>
          <span class="library-type">${card.title}</span>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
          <button class="button button-secondary button-small" type="button" data-open-media-gallery="${card.albumIndex}">Gallery</button>
        </article>
      `;
  };

  mediaCategoryGrid.innerHTML = previewCarouselMarkup("featured", categoryCards, categoryCardMarkup);

  if (mediaAlbumSections) {
    const coachingPreview = coachingAlbums.map((album) => ({
      albumIndex: albumIndexFor(album),
      itemIndex: 0,
      label: album.category || "Coaching Gallery"
    }));

    mediaAlbumSections.innerHTML = `
      ${previewCarouselMarkup("coaching", coachingPreview)}
      <div class="media-gallery-button-row">
        ${coachingAlbums.map((album) => galleryButton(albumIndexFor(album), album.title)).join("")}
      </div>
    `;
  }

  if (mediaVideoGrid) {
    const archerVideoAlbumIndex = albumIndexFor(archerVideoAlbum);
    const anayaVideoAlbumIndex = albumIndexFor(anayaVideoAlbum);
    const videoPreviewItems = [
      ...archerVideoAlbum.items.map((item, itemIndex) => ({ albumIndex: archerVideoAlbumIndex, itemIndex, item, label: "The Archer Video" })),
      ...anayaVideoAlbum.items.map((item, itemIndex) => ({ albumIndex: anayaVideoAlbumIndex, itemIndex, item, label: "Development Video" }))
    ];

    mediaVideoGrid.innerHTML = previewCarouselMarkup(
      "videos",
      videoPreviewItems,
      ({ albumIndex, itemIndex, item, label }) => mediaLibraryCardMarkup(albumIndex, itemIndex, item, label)
    );
  }

  if (mediaVideoActions) {
    mediaVideoActions.innerHTML = `
      ${galleryButton(albumIndexFor(archerVideoAlbum), "All Archer Videos")}
      ${galleryButton(albumIndexFor(anayaVideoAlbum), "All Training Clips")}
    `;
  }

  if (mediaPlayingCareerGrid) {
    const albumIndex = albumIndexFor(playingAlbum);
    mediaPlayingCareerGrid.innerHTML = previewCarouselMarkup(
      "playing-career",
      playingAlbum.items.map((item, itemIndex) => ({ albumIndex, itemIndex, item, label: "Playing Career" })),
      ({ albumIndex, itemIndex, item, label }) => mediaLibraryCardMarkup(albumIndex, itemIndex, item, label)
    );
  }

  if (mediaPlayingAwardsGrid) {
    const albumIndex = albumIndexFor(awardsAlbum);
    mediaPlayingAwardsGrid.innerHTML = previewCarouselMarkup(
      "playing-awards",
      awardsAlbum.items.map((item, itemIndex) => ({ albumIndex, itemIndex, item, label: "Awards" })),
      ({ albumIndex, itemIndex, item, label }) => mediaLibraryCardMarkup(albumIndex, itemIndex, item, label)
    );
  }

  if (mediaArcherFeatured) {
    const albumIndex = albumIndexFor(archerAlbum);
    mediaArcherFeatured.innerHTML = previewCarouselMarkup(
      "archer",
      archerAlbum.items.map((item, itemIndex) => ({ albumIndex, itemIndex, item, label: item.type === "video" ? "The Archer Video" : "The Archer" })),
      ({ albumIndex, itemIndex, item, label }) => mediaLibraryCardMarkup(albumIndex, itemIndex, item, label)
    );
  }

  if (mediaArcherPhotoGrid) {
    const albumIndex = albumIndexFor(archerPhotoAlbum);
    mediaArcherPhotoGrid.innerHTML = archerPhotoAlbum.items
      .slice(1, 2)
      .map((item, itemIndex) => mediaLibraryCardMarkup(albumIndex, itemIndex + 1, item, "The Archer"))
      .join("");
  }

  if (mediaArcherVideoGrid) {
    const albumIndex = albumIndexFor(archerVideoAlbum);
    mediaArcherVideoGrid.innerHTML = archerVideoAlbum.items
      .slice(0, 1)
      .map((item, itemIndex) => mediaLibraryCardMarkup(albumIndex, itemIndex, item, "The Archer Video"))
      .join("");
  }

  if (mediaAnayaSections) {
    const anayaPreview = anayaAlbums.map((album) => ({
      albumIndex: albumIndexFor(album),
      itemIndex: 0,
      label: "Anaya Beard",
      titleOverride: album.title
    }));

    mediaAnayaSections.innerHTML = `
      ${previewCarouselMarkup("anaya", anayaPreview)}
    `;
  }

  Object.entries(previewCarousels).forEach(([key, state]) => {
    const carousel = document.querySelector(`[data-media-preview-carousel="${key}"]`);
    const track = carousel?.querySelector("[data-media-carousel-track]");

    const moveCarousel = (direction) => {
      if (!track) {
        return;
      }

      state.start = (state.start + direction + state.cards.length) % state.cards.length;
      track.innerHTML = visiblePreviewCards(state.cards, state.start).map(state.renderCard).join("");
      connectMediaLibraryCards(carousel);
    };

    carousel?.querySelectorAll("[data-media-carousel-direction]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = Number(button.dataset.mediaCarouselDirection || 1);
        moveCarousel(direction);
      });
    });

    if (state.cards.length > 3) {
      enableSwipeCarousel(track, moveCarousel);
    }
  });

  if (mediaPlayingCareerButton) {
    mediaPlayingCareerButton.dataset.openMediaGallery = String(albumIndexFor(playingAlbum));
  }

  if (mediaPlayingAwardsButton) {
    mediaPlayingAwardsButton.dataset.openMediaGallery = String(albumIndexFor(awardsAlbum));
  }

  if (mediaArcherPhotoButton) {
    mediaArcherPhotoButton.dataset.openMediaGallery = String(albumIndexFor(archerPhotoAlbum));
  }

  if (mediaArcherVideoButton) {
    mediaArcherVideoButton.dataset.openMediaGallery = String(albumIndexFor(archerVideoAlbum));
  }

  if (mediaAnayaGalleryButton) {
    mediaAnayaGalleryButton.dataset.openMediaGallery = String(albumIndexFor(anayaFullAlbum));
  }

  connectMediaLibraryCards(document);
}

function activeAlbumItemsFor(album) {
  return album.items && album.items.length ? album.items : [{ type: "image", src: album.thumbnail, caption: album.caption || album.title }];
}

function mediaAlbumDescription(title) {
  const descriptions = {
    "Sideline Leadership": "Sideline energy, staff presence and leadership moments from competition.",
    "Coaching Details": "Teaching, game preparation and detail-oriented coaching moments.",
    "Player Development": "On-court instruction and player-development teaching moments.",
    "Team Environment": "Team culture, huddles and program environment visuals.",
    "Team Celebration": "Bench reactions, big shots and program momentum moments.",
    "Championship Culture": "Championship standards, team success and program history."
  };
  return descriptions[title] || "Portfolio media organized for quick review.";
}

function anayaSectionDescription(title) {
  const descriptions = {
    "Foundation": "Early development work, baseline skill clips and foundation media.",
    "Development Process": "Training progressions, shooting work and teaching feedback.",
    "Leadership Impact": "Team connection, leadership moments and competitive presence.",
    "Breakthrough Production": "Game production, role growth and on-court confidence.",
    "Accolades Recognition": "Awards, recognition and performance milestones.",
    "Next-Level Opportunities": "Recruiting momentum and next-level opportunity media."
  };
  return descriptions[title] || "Case study media from the player-development journey.";
}

function activeAlbumItems() {
  const album = activeOverlayAlbums[activeAlbumIndex];
  return album.items && album.items.length
    ? album.items
    : [
        {
          type: "image",
          src: album.thumbnail,
          caption: album.caption
        }
      ];
}

function mediaItemTitle(mediaItem, album) {
  return mediaItem.title || mediaItem.caption || album.caption || album.title || "";
}

function mediaItemSrc(mediaItem) {
  return mediaItem.fullSrc || mediaItem.mediaCardSrc || mediaItem.gallerySrc || mediaItem.featuredSrc || mediaItem.src;
}

function mediaItemThumb(mediaItem) {
  return mediaItem.thumbSrc || mediaItem.thumbnailSrc || mediaItem.thumb || mediaItem.thumbnail || mediaItem.posterSrc || mediaItem.poster || mediaItemSrc(mediaItem);
}

function mediaItemCardSrc(mediaItem) {
  return mediaItem.mediaCardSrc || mediaItem.gallerySrc || mediaItem.featuredSrc || mediaItemThumb(mediaItem);
}

function mediaItemPoster(mediaItem) {
  return mediaItem.posterSrc || mediaItem.poster || mediaItemThumb(mediaItem);
}

function mediaItemCarouselSrc(mediaItem) {
  return mediaItem.carouselSrc || mediaItem.carouselThumb || mediaItem.mediaCardSrc || mediaItem.featuredSrc || mediaItem.gallerySrc || mediaItemThumb(mediaItem);
}

function scrollActiveMediaThumbnail(behavior = "smooth") {
  if (!mediaOverlayStrip || mediaOverlayStrip.hidden) {
    return;
  }

  const activeThumb = mediaOverlayStrip.querySelector(".media-thumb.is-active");

  if (!activeThumb) {
    return;
  }

  const stripRect = mediaOverlayStrip.getBoundingClientRect();
  const thumbRect = activeThumb.getBoundingClientRect();
  const centeredLeft = mediaOverlayStrip.scrollLeft + thumbRect.left - stripRect.left - stripRect.width / 2 + thumbRect.width / 2;
  const maxScrollLeft = mediaOverlayStrip.scrollWidth - mediaOverlayStrip.clientWidth;

  mediaOverlayStrip.scrollTo({
    left: Math.max(0, Math.min(centeredLeft, maxScrollLeft)),
    behavior
  });
}

function queueActiveMediaThumbnailScroll(behavior = "smooth") {
  window.requestAnimationFrame(() => {
    scrollActiveMediaThumbnail(behavior);
  });
}

function selectMediaItem(index, { thumbScrollBehavior = "smooth" } = {}) {
  const items = activeAlbumItems();

  if (!Number.isInteger(index) || index < 0 || index >= items.length) {
    return;
  }

  activeItemIndex = index;
  renderMediaOverlay({ thumbScrollBehavior });
}

function renderMediaOverlay({ thumbScrollBehavior = "smooth" } = {}) {
  if (!mediaOverlay || !mediaOverlayTitle || !mediaOverlayCaption || !mediaOverlayViewer || !mediaOverlayStrip) {
    return;
  }

  const album = activeOverlayAlbums[activeAlbumIndex];
  const items = activeAlbumItems();
  const item = items[activeItemIndex];
  const itemTitle = mediaItemTitle(item, album);
  const itemSrc = mediaItemSrc(item);
  const isAwardsOverlay = album.title === "Playing Career Awards";
  const isPhotoAlbumOverlay =
    !isAwardsOverlay &&
    item.type !== "video" &&
    (items.length > 1 ||
      activeOverlayAlbums === mediaAlbums ||
      activeOverlayAlbums === anayaSections ||
      activeOverlayAlbums === playingCareerAlbums ||
      activeOverlayAlbums.some?.((overlayAlbum) => overlayAlbum.mediaLibrary));
  const isGalleryOverlay = isPhotoAlbumOverlay;
  const awardOrientation = item.orientation || "landscape";
  const isPortraitOverlay = item.type !== "video" && item.orientation === "portrait";
  const hasMultipleItems = items.length > 1;
  mediaOverlay.classList.toggle("is-gallery-overlay", isGalleryOverlay);
  mediaOverlay.classList.toggle("is-awards-overlay", isAwardsOverlay);
  mediaOverlay.classList.toggle("is-overlay-portrait", isPortraitOverlay);
  mediaOverlay.classList.toggle("is-award-portrait", isAwardsOverlay && awardOrientation === "portrait");
  mediaOverlay.classList.toggle("is-award-landscape", isAwardsOverlay && awardOrientation !== "portrait");
  mediaOverlay.classList.toggle("has-multiple-media", hasMultipleItems);

  if (mediaOverlayEyebrow) {
    mediaOverlayEyebrow.textContent = album.eyebrow || "GALLERY";
  }

  mediaOverlayTitle.textContent = album.title || album.category;
  if (mediaOverlayCounter) {
    mediaOverlayCounter.textContent = `${activeItemIndex + 1} / ${items.length}`;
    mediaOverlayCounter.hidden = !album.showCounter || items.length <= 1;
  }
  mediaOverlayCaption.textContent = itemTitle;
  mediaOverlayViewer.innerHTML =
    item.type === "video"
      ? `<video src="${encodeURI(item.src)}"${mediaItemPoster(item) ? ` poster="${encodeURI(mediaItemPoster(item))}" data-image-role="poster"` : ""} controls playsinline></video>`
      : isAwardsOverlay
        ? `<span class="award-slide award-slide--${awardOrientation}"><img src="${encodeURI(itemSrc)}" data-image-role="full" alt="${item.alt || itemTitle}" /></span>`
        : `<img src="${encodeURI(itemSrc)}" data-image-role="full" alt="${item.alt || itemTitle}" />`;
  mediaOverlayStrip.innerHTML = items
    .map((mediaItem, index) => {
      const mediaTitle = mediaItemTitle(mediaItem, album);
      const thumbnail = mediaItemThumb(mediaItem);
      const source = mediaItemSrc(mediaItem);
      const isVideo = mediaItem.type === "video";

      return `
        <button class="media-thumb${index === activeItemIndex ? " is-active" : ""}" type="button" data-media-index="${index}" aria-label="View ${mediaItem.alt || mediaTitle}">
          ${
            isVideo && thumbnail && thumbnail !== source
              ? `<img src="${encodeURI(thumbnail)}" data-image-role="thumb" alt="${mediaItem.alt || mediaTitle}" /><span class="media-thumb-video media-thumb-video-badge">Video</span>`
              : isVideo
                ? '<span class="media-thumb-video">Video</span>'
                : `<img src="${encodeURI(thumbnail)}" data-image-role="thumb" alt="${mediaItem.alt || mediaTitle}" />`
          }
        </button>
      `;
    })
    .join("");

  const showThumbnailStrip = hasMultipleItems || isPhotoAlbumOverlay;
  mediaOverlayStrip.hidden = !showThumbnailStrip;
  mediaOverlayStrip.classList.toggle("has-single-thumb", showThumbnailStrip && items.length === 1);
  mediaOverlayPrev.hidden = !hasMultipleItems;
  mediaOverlayNext.hidden = !hasMultipleItems;
  queueActiveMediaThumbnailScroll(thumbScrollBehavior);
}

function openMediaAlbum(albumIndex, albums = mediaAlbums, itemIndex = 0) {
  if (!mediaOverlay || !mediaOverlayClose) {
    return;
  }

  activeOverlayAlbums = albums;
  activeAlbumIndex = albumIndex;
  activeItemIndex = itemIndex;
  renderMediaOverlay({ thumbScrollBehavior: "auto" });
  mediaOverlay.classList.add("is-open");
  mediaOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("media-overlay-open");
  mediaOverlayClose.focus();
}

function closeMediaOverlay() {
  if (!mediaOverlay || !mediaOverlayViewer || !mediaOverlayStrip) {
    return;
  }

  mediaOverlay.classList.remove("is-open");
  mediaOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("media-overlay-open");
  mediaOverlayViewer.innerHTML = "";
  mediaOverlayStrip.innerHTML = "";
}

function showMediaItem(direction) {
  const items = activeAlbumItems();
  selectMediaItem((activeItemIndex + direction + items.length) % items.length);
}

function renderAnayaGalleries() {
  if (!anayaGalleries.length) {
    return;
  }

  anayaGalleries.forEach((gallery) => {
    const sectionIndex = Number(gallery.dataset.anayaGallery);
    const section = anayaSections[sectionIndex];
    const items = section.items || [];
    const isFeatured = section.layout === "featured";
    const previewItems = isFeatured ? items.slice(0, 1) : items.slice(0, 6);

    const previewMarkup = previewItems.length
      ? previewItems
          .map((item, itemIndex) => {
            const thumbnail = mediaItemCardSrc(item);
            const poster = mediaItemPoster(item);
            const isVideo = item.type === "video";
            const imageRole = isFeatured ? "featured" : "media-card";

            return `
              <button class="anaya-media-card${isFeatured ? " anaya-media-card-featured" : ""}" type="button" data-section-index="${sectionIndex}" data-item-index="${itemIndex}">
                <span class="anaya-media-frame">
                  ${
                    isVideo
                      ? `<video src="${encodeURI(item.src)}" poster="${poster ? encodeURI(poster) : ""}" data-image-role="poster" muted playsinline></video>`
                      : `<img src="${encodeURI(thumbnail)}" data-image-role="${imageRole}" alt="${item.alt || item.caption || section.title}" />`
                  }
                </span>
                <span>${item.caption || section.title}</span>
              </button>
            `;
          })
          .join("")
      : `
        <div class="anaya-media-empty">
          <span>${section.title} media slots are ready. Add local image or video paths in app.js.</span>
        </div>
      `;

    gallery.innerHTML = `
      <div class="anaya-gallery-preview${isFeatured ? " anaya-gallery-featured" : ""}">
        ${previewMarkup}
      </div>
      ${
        isFeatured
          ? ""
          : `<div class="anaya-gallery-actions">
              <button class="button button-secondary button-small" type="button" data-view-more="${sectionIndex}"${items.length ? "" : " disabled"}>View More</button>
            </div>`
      }
    `;

    gallery.querySelectorAll(".anaya-media-card").forEach((card) => {
      card.addEventListener("click", () => {
        openMediaAlbum(Number(card.dataset.sectionIndex), anayaSections, Number(card.dataset.itemIndex));
      });
    });

    const viewMoreButton = gallery.querySelector("[data-view-more]");
    if (viewMoreButton && items.length) {
      viewMoreButton.addEventListener("click", () => {
        openMediaAlbum(Number(viewMoreButton.dataset.viewMore), anayaSections);
      });
    }
  });
}

function renderPlayingCareerCarousel() {
  if (!playingCareerTrack) {
    return;
  }

  const items = playingCareerAlbums[0].items;
  playingCareerTrack.innerHTML = items
    .map(
      (item, index) => `
        <button class="achievement-card" type="button" data-playing-career-index="${index}" data-overlay-trigger="playing-career" aria-label="Open ${mediaItemTitle(item, playingCareerAlbums[0])}">
          <img
            src="${encodeURI(mediaItemCarouselSrc(item))}"
            data-image-role="carousel"
            alt="${item.alt || mediaItemTitle(item, playingCareerAlbums[0])}"
            style="${item.carouselPosition ? `object-position: ${item.carouselPosition};` : ""}"
          />
        </button>
      `
    )
    .join("");

  connectPlayingCareerCards();
}

function connectPlayingCareerCards() {
  if (!playingCareerTrack || playingCareerTrack.dataset.overlayReady === "true") {
    return;
  }

  playingCareerTrack.dataset.overlayReady = "true";
  let pendingCard = null;
  let pendingPointerId = null;
  let pointerStartX = 0;
  let pointerStartY = 0;
  let suppressNextClickUntil = 0;

  playingCareerTrack.addEventListener(
    "pointerdown",
    (event) => {
      const card = event.target.closest("[data-playing-career-index]");

      if (event.button !== 0 || !card || !playingCareerTrack.contains(card)) {
        pendingCard = null;
        pendingPointerId = null;
        return;
      }

      pendingCard = card;
      pendingPointerId = event.pointerId;
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
    },
    true
  );

  playingCareerTrack.addEventListener(
    "pointerup",
    (event) => {
      const card = pendingCard;
      const deltaX = Math.abs(event.clientX - pointerStartX);
      const deltaY = Math.abs(event.clientY - pointerStartY);

      pendingCard = null;

      if (!card || event.pointerId !== pendingPointerId || deltaX > 8 || deltaY > 8) {
        pendingPointerId = null;
        return;
      }

      pendingPointerId = null;
      suppressNextClickUntil = window.performance.now() + 450;
      openPlayingCareerAlbum(card);
    },
    true
  );

  playingCareerTrack.addEventListener(
    "click",
    (event) => {
      const card = event.target.closest("[data-playing-career-index]");
      const suppressUntil = Number(playingCareerTrack.dataset.dragScrollSuppressUntil || 0);

      if (!card || !playingCareerTrack.contains(card)) {
        return;
      }

      if (window.performance.now() < suppressUntil || window.performance.now() < suppressNextClickUntil) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      openPlayingCareerAlbum(card);
    },
    true
  );
}

function openPlayingCareerAlbum(card) {
  const itemIndex = Number(card.dataset.playingCareerIndex);

  if (!Number.isInteger(itemIndex)) {
    return;
  }

  openMediaAlbum(0, playingCareerAlbums, itemIndex);
}

function playingCareerPageSize() {
  return window.matchMedia("(max-width: 720px)").matches ? 1 : 3;
}

function playingCareerCards() {
  return Array.from(playingCareerTrack.querySelectorAll("[data-playing-career-index]"));
}

function playingCareerCardScrollLeft(card) {
  const trackRect = playingCareerTrack.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const trackStyle = window.getComputedStyle(playingCareerTrack);
  const paddingLeft = parseFloat(trackStyle.paddingLeft) || 0;

  return playingCareerTrack.scrollLeft + cardRect.left - trackRect.left - paddingLeft;
}

function closestPlayingCareerPage(pageSize) {
  const cards = playingCareerCards();

  if (!cards.length) {
    return 0;
  }

  const pageCount = Math.max(1, Math.ceil(cards.length / pageSize));
  let closestPage = 0;
  let closestDistance = Infinity;

  for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
    const cardIndex = Math.min(pageIndex * pageSize, cards.length - 1);
    const distance = Math.abs(playingCareerCardScrollLeft(cards[cardIndex]) - playingCareerTrack.scrollLeft);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestPage = pageIndex;
    }
  }

  return closestPage;
}

function scrollPlayingCareerToPage(pageIndex, behavior = "smooth") {
  if (!playingCareerTrack) {
    return;
  }

  const cards = playingCareerCards();
  const pageSize = playingCareerPageSize();
  const pageCount = Math.max(1, Math.ceil(cards.length / pageSize));
  const boundedPageIndex = Math.max(0, Math.min(pageIndex, pageCount - 1));
  const cardIndex = Math.min(boundedPageIndex * pageSize, cards.length - 1);

  if (!cards[cardIndex]) {
    return;
  }

  playingCareerTrack.scrollTo({
    left: Math.max(0, playingCareerCardScrollLeft(cards[cardIndex])),
    behavior
  });
}

function scrollPlayingCareerCarousel(direction) {
  if (!playingCareerTrack) {
    return;
  }

  const pageSize = playingCareerPageSize();
  const cards = playingCareerCards();

  if (!cards.length) {
    return;
  }

  const pageCount = Math.max(1, Math.ceil(cards.length / pageSize));
  const currentPage = closestPlayingCareerPage(pageSize);
  const nextPage = (currentPage + direction + pageCount) % pageCount;
  scrollPlayingCareerToPage(nextPage);
}

if (playingCareerPrev) {
  playingCareerPrev.addEventListener("click", () => scrollPlayingCareerCarousel(-1));
}

if (playingCareerNext) {
  playingCareerNext.addEventListener("click", () => scrollPlayingCareerCarousel(1));
}

if (playingCareerAwards) {
  playingCareerAwards.addEventListener("click", () => {
    openMediaAlbum(0, playingCareerAwardAlbums);
  });
}

window.addEventListener("resize", () => {
  if (!playingCareerTrack) {
    return;
  }

  window.clearTimeout(playingCareerResizeTimer);
  playingCareerResizeTimer = window.setTimeout(() => {
    scrollPlayingCareerToPage(closestPlayingCareerPage(playingCareerPageSize()), "auto");
  }, 120);
});

function navScrollOffset() {
  if (window.matchMedia("(max-width: 720px)").matches) {
    return 28;
  }

  if (window.matchMedia("(max-width: 1024px)").matches) {
    return 140;
  }

  return 120;
}

document.querySelectorAll('.site-nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navScrollOffset();

    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });

    window.history.pushState(null, "", link.getAttribute("href"));
  });
});

if (mediaOverlayClose) {
  mediaOverlayClose.addEventListener("click", closeMediaOverlay);
}

if (mediaOverlayPrev) {
  mediaOverlayPrev.addEventListener("click", () => showMediaItem(-1));
}

if (mediaOverlayNext) {
  mediaOverlayNext.addEventListener("click", () => showMediaItem(1));
}

if (mediaOverlayViewer) {
  mediaOverlayViewer.addEventListener("click", (event) => {
    if (event.target.closest("video") || !mediaOverlayNext || mediaOverlayNext.hidden) {
      return;
    }

    showMediaItem(1);
  });
}

if (mediaOverlayStrip) {
  let pendingOverlayThumb = null;
  let pendingOverlayThumbPointerId = null;
  let overlayThumbStartX = 0;
  let overlayThumbStartY = 0;
  let suppressOverlayThumbClickUntil = 0;

  mediaOverlayStrip.addEventListener(
    "pointerdown",
    (event) => {
      const thumb = event.target.closest(".media-thumb");

      if (event.button !== 0 || !thumb || !mediaOverlayStrip.contains(thumb)) {
        pendingOverlayThumb = null;
        pendingOverlayThumbPointerId = null;
        return;
      }

      pendingOverlayThumb = thumb;
      pendingOverlayThumbPointerId = event.pointerId;
      overlayThumbStartX = event.clientX;
      overlayThumbStartY = event.clientY;
    },
    true
  );

  mediaOverlayStrip.addEventListener(
    "pointerup",
    (event) => {
      const thumb = pendingOverlayThumb;
      const deltaX = Math.abs(event.clientX - overlayThumbStartX);
      const deltaY = Math.abs(event.clientY - overlayThumbStartY);

      pendingOverlayThumb = null;

      if (!thumb || event.pointerId !== pendingOverlayThumbPointerId || deltaX > 8 || deltaY > 8) {
        pendingOverlayThumbPointerId = null;
        return;
      }

      pendingOverlayThumbPointerId = null;
      suppressOverlayThumbClickUntil = window.performance.now() + 450;
      selectMediaItem(Number(thumb.dataset.mediaIndex));
    },
    true
  );

  mediaOverlayStrip.addEventListener(
    "click",
    (event) => {
      const thumb = event.target.closest(".media-thumb");
      const suppressUntil = Number(mediaOverlayStrip.dataset.dragScrollSuppressUntil || 0);

      if (!thumb || !mediaOverlayStrip.contains(thumb)) {
        return;
      }

      if (window.performance.now() < suppressUntil || window.performance.now() < suppressOverlayThumbClickUntil) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      selectMediaItem(Number(thumb.dataset.mediaIndex));
    },
    true
  );
}

if (mediaOverlay) {
  mediaOverlay.addEventListener("click", (event) => {
    if (event.target === mediaOverlay) {
      closeMediaOverlay();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!mediaOverlay || !mediaOverlay.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeMediaOverlay();
  }

  if (event.key === "ArrowLeft" && !mediaOverlayPrev.hidden) {
    showMediaItem(-1);
  }

  if (event.key === "ArrowRight" && !mediaOverlayNext.hidden) {
    showMediaItem(1);
  }
});

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      contactForm.reportValidity();
      return;
    }

    const subject = `Portfolio Contact from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Message:",
      message
    ].join("\n");

    window.location.href = `mailto:CoachMatthewFogarty@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

renderLibrary();
renderGallery();
renderMediaLibraryPage();
renderAnayaGalleries();
renderPlayingCareerCarousel();
enableDragScroll(mediaOverlayStrip);
enableDragScroll(playingCareerTrack);
