document.querySelectorAll(".footer-accordion-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const group = toggle.closest(".footer-links");

    if (!group || !window.matchMedia("(max-width: 820px)").matches) {
      return;
    }

    const isOpen = group.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

const siteHeader = document.querySelector(".site-header");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

if (siteHeader) {
  let lastScrollY = window.scrollY;
  let ticking = false;
  const revealThreshold = 12;

  const updateHeaderVisibility = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    if (currentScrollY <= 24) {
      siteHeader.classList.remove("header-hidden");
    } else if (scrollDelta > revealThreshold) {
      siteHeader.classList.add("header-hidden");
    } else if (scrollDelta < -revealThreshold) {
      siteHeader.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) {
      return;
    }

    window.requestAnimationFrame(updateHeaderVisibility);
    ticking = true;
  }, { passive: true });
}

if (siteHeader && mobileNavToggle) {
  const setMobileNavOpen = (isOpen) => {
    siteHeader.classList.toggle("nav-open", isOpen);
    mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
    mobileNavToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
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

const compactHeadingQuery = window.matchMedia("(max-width: 720px), (max-height: 640px) and (max-width: 920px)");
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
const compactHeroSelector = ".hero, .subpage-hero, .anaya-hero, .contact-hero, .media-hero, .media-overlay";

function compactHeadingElements() {
  return [
    ...Array.from(document.querySelectorAll(compactEyebrowSelector)).map((element) => ({
      element,
      sizeProperty: "--mobile-fit-eyebrow-size",
      lineProperty: "--mobile-fit-eyebrow-line",
      baseSize: 11,
      baseLine: 14,
      minSize: 8
    })),
    ...Array.from(document.querySelectorAll(compactTitleSelector)).map((element) => ({
      element,
      sizeProperty: "--mobile-fit-title-size",
      lineProperty: "--mobile-fit-title-line",
      baseSize: 22,
      baseLine: 24,
      minSize: 5
    }))
  ].filter(({ element }) => !element.closest(compactHeroSelector));
}

function resetCompactHeading({ element, sizeProperty, lineProperty }) {
  element.style.removeProperty(sizeProperty);
  element.style.removeProperty(lineProperty);
  element.style.removeProperty("letter-spacing");
}

function fitCompactHeading(heading) {
  const { element, sizeProperty, lineProperty, baseSize, baseLine, minSize } = heading;
  resetCompactHeading(heading);

  if (!compactHeadingQuery.matches) {
    return;
  }

  element.style.setProperty(sizeProperty, `${baseSize}px`);
  element.style.setProperty(lineProperty, `${baseLine}px`);

  const availableWidth = element.clientWidth;

  if (!availableWidth || element.scrollWidth <= availableWidth) {
    return;
  }

  const fitRatio = (availableWidth / element.scrollWidth) * 0.98;
  const fittedSize = Math.max(minSize, Math.floor(baseSize * fitRatio * 100) / 100);
  const fittedLine = Math.max(Math.ceil(fittedSize * (baseLine / baseSize)), fittedSize + 2);

  element.style.setProperty(sizeProperty, `${fittedSize}px`);
  element.style.setProperty(lineProperty, `${fittedLine}px`);

  if (element.scrollWidth > element.clientWidth) {
    element.style.letterSpacing = "0";
  }

  if (element.scrollWidth > element.clientWidth) {
    const tightRatio = (element.clientWidth / element.scrollWidth) * 0.98;
    const tightSize = Math.max(minSize, Math.floor(fittedSize * tightRatio * 100) / 100);
    const tightLine = Math.max(Math.ceil(tightSize * (baseLine / baseSize)), tightSize + 2);

    element.style.setProperty(sizeProperty, `${tightSize}px`);
    element.style.setProperty(lineProperty, `${tightLine}px`);
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
