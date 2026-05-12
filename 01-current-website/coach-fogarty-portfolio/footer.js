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
  let distanceScrolledDown = 0;
  let ticking = false;
  const hideThreshold = 16;
  const revealThreshold = 2;

  const updateHeaderVisibility = () => {
    const currentScrollY = Math.max(window.scrollY, 0);
    const scrollDelta = currentScrollY - lastScrollY;

    if (currentScrollY <= 24) {
      siteHeader.classList.remove("header-hidden");
      distanceScrolledDown = 0;
    } else if (scrollDelta > 0) {
      distanceScrolledDown += scrollDelta;

      if (distanceScrolledDown > hideThreshold && !siteHeader.classList.contains("nav-open")) {
        siteHeader.classList.add("header-hidden");
      }
    }

    if (scrollDelta < -revealThreshold) {
      siteHeader.classList.remove("header-hidden");
      distanceScrolledDown = 0;
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
  ".innovation-panel h3",
  ".media-subsection-heading h3",
  ".media-album-heading h3",
  ".media-category-card h3",
  ".media-library-meta strong",
  ".achievement-card strong"
].join(",");
const compactHeroSelector = ".hero, .subpage-hero, .anaya-hero, .contact-hero, .media-hero, .media-overlay";

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
