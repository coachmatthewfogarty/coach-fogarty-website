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
