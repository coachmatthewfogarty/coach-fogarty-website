document.querySelectorAll("[data-system-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-system-carousel-track]");
  const previousButton = carousel.querySelector("[data-system-carousel-prev]");
  const nextButton = carousel.querySelector("[data-system-carousel-next]");

  if (!track || !previousButton || !nextButton) {
    return;
  }

  const cardStep = () => {
    const firstCard = track.querySelector(".system-document-card");

    if (!firstCard) {
      return track.clientWidth;
    }

    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    previousButton.disabled = track.scrollLeft <= 2;
    nextButton.disabled = track.scrollLeft >= maxScrollLeft - 2;
  };

  previousButton.addEventListener("click", () => {
    track.scrollBy({ left: -cardStep(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    track.scrollBy({ left: cardStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateButtons);
  }, { passive: true });

  window.addEventListener("resize", updateButtons);
  updateButtons();
});
