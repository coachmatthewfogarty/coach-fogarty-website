function enableSystemDragScroll(track) {
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
  enableSystemDragScroll(track);
  updateButtons();
});
