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
  let pendingClickAnchor = null;

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
    pendingClickAnchor = event.target.closest?.("a[href]") || null;
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
        pendingClickAnchor = null;
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      const anchor = pendingClickAnchor;
      pendingClickAnchor = null;

      if (anchor && !event.target.closest?.("a[href]")) {
        event.preventDefault();
        event.stopPropagation();

        if (anchor.target === "_blank") {
          window.open(anchor.href, "_blank", "noopener");
        } else {
          window.location.href = anchor.href;
        }
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

  const wrapThreshold = () => Math.max(16, Math.min(96, cardStep() * 0.2));
  let isWrapScrolling = false;
  let wrapReleaseFrame;

  // Systems carousel wrap lock: rapid arrow clicks wait for edge-to-edge wrap to settle so the rail does not bounce back to the side it just left.
  const scrollToWrappedEdge = (left) => {
    isWrapScrolling = true;
    window.cancelAnimationFrame(wrapReleaseFrame);
    track.scrollTo({ left, behavior: "smooth" });

    const startedAt = window.performance.now();
    const releaseWhenSettled = () => {
      const settled = Math.abs(track.scrollLeft - left) <= 4;
      const timedOut = window.performance.now() - startedAt > 1800;

      if (settled || timedOut) {
        isWrapScrolling = false;
        return;
      }

      wrapReleaseFrame = window.requestAnimationFrame(releaseWhenSettled);
    };

    wrapReleaseFrame = window.requestAnimationFrame(releaseWhenSettled);
  };

  const updateButtons = () => {
    const hasMultipleCards = track.querySelectorAll(".system-document-card").length > 1;
    previousButton.disabled = !hasMultipleCards;
    nextButton.disabled = !hasMultipleCards;
  };

  previousButton.addEventListener("click", () => {
    if (isWrapScrolling) {
      return;
    }

    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    if (track.scrollLeft <= 2) {
      scrollToWrappedEdge(maxScrollLeft);
      return;
    }

    track.scrollBy({ left: -cardStep(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    if (isWrapScrolling) {
      return;
    }

    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    if (track.scrollLeft >= maxScrollLeft - wrapThreshold()) {
      scrollToWrappedEdge(0);
      return;
    }

    track.scrollBy({ left: cardStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateButtons);
  }, { passive: true });

  window.addEventListener("resize", updateButtons);
  enableSystemDragScroll(track);
  updateButtons();
});
