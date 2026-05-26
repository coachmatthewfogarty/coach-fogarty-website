(function () {
  const supportedExtensions = [".avif", ".webp", ".jpg", ".jpeg", ".png"];
  const roleExtensionPriority = {
    carousel: [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    display: [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    featured: [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    full: [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    hero: [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    gallery: [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    "gallery-thumb": [".webp", ".avif", ".jpg", ".jpeg", ".png"],
    "carousel-thumb": [".webp", ".avif", ".jpg", ".jpeg", ".png"],
    "square-thumb": [".webp", ".avif", ".jpg", ".jpeg", ".png"],
    placeholder: [".webp", ".avif", ".jpg", ".jpeg", ".png"],
    logo: [".png", ".webp", ".avif", ".jpg", ".jpeg"],
    "logo-transparent": [".png", ".webp", ".avif", ".jpg", ".jpeg"],
    "media-card": [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    poster: [".avif", ".webp", ".jpg", ".jpeg", ".png"],
    thumb: [".webp", ".avif", ".jpg", ".jpeg", ".png"],
    default: [".avif", ".webp", ".jpg", ".jpeg", ".png"]
  };
  const lockedImageRoles = [
    "logo-transparent",
    "overlay-thumb",
    "gallery-thumb",
    "carousel-thumb",
    "square-thumb",
    "media-card",
    "landscape",
    "placeholder",
    "featured",
    "carousel",
    "portrait",
    "poster",
    "hero",
    "logo"
  ];
  const cropModes = [
    "fill",
    "cover",
    "north",
    "cover-center",
    "cover-center-upper",
    "cover-upper-center",
    "cover-upper-center-mid",
    "cover-upper-mid",
    "cover-upper",
    "cover-center-bottom",
    "cover-bottom-mid",
    "cover-bottom-center-mid",
    "cover-bottom-center",
    "cover-bottom"
  ];
  const modernCropModes = [
    "fill",
    "cover",
    "north",
    "cover-center",
    "cover-center-upper",
    "cover-upper-center",
    "cover-upper-center-mid",
    "cover-upper-mid",
    "cover-upper",
    "cover-center-bottom",
    "cover-bottom-mid",
    "cover-bottom-center-mid",
    "cover-bottom-center",
    "cover-bottom",
    "filled-center",
    "filled-lower-54",
    "filled-lower-58",
    "filled-lower-62",
    "filled-full-frame-fill"
  ];
  const adjustmentZooms = ["105", "110", "115"];
  const adjustmentDirections = {
    horizontal: ["left", "right"],
    vertical: ["up", "down"]
  };
  const adjustmentAmounts = ["1", "2", "3"];
  const cropCapableRoles = new Set(["featured", "hero", "media-card", "overlay-thumb", "landscape", "portrait"]);

  function unique(values) {
    return values.filter((value, index) => value && values.indexOf(value) === index);
  }

  function splitUrl(url) {
    const match = String(url || "").match(/^([^?#]*?)(\.(?:avif|webp|jpe?g|png))([?#].*)?$/i);

    if (!match) {
      return null;
    }

    return {
      base: match[1],
      extension: match[2],
      suffix: match[3] || ""
    };
  }

  function splitLockedImageName(base) {
    const baseName = String(base || "");

    for (const role of lockedImageRoles) {
      const sizeMatch = baseName.match(/-(\d+x\d+)$/);

      if (!sizeMatch) {
        continue;
      }

      const size = sizeMatch[1];
      const withoutSize = baseName.slice(0, -sizeMatch[0].length);
      const qualityMatch = withoutSize.match(/-q(\d+)$/i);
      const quality = qualityMatch ? qualityMatch[1] : "";
      const withoutQuality = qualityMatch
        ? withoutSize.slice(0, -qualityMatch[0].length)
        : withoutSize;
      const suffix = `-${role}-`;
      let suffixIndex = withoutQuality.lastIndexOf(suffix);
      let detail = "";

      if (suffixIndex === -1) {
        const roleEndSuffix = `-${role}`;

        if (!withoutQuality.endsWith(roleEndSuffix)) {
          continue;
        }

        suffixIndex = withoutQuality.length - roleEndSuffix.length;
      } else {
        detail = withoutQuality.slice(suffixIndex + suffix.length);
      }

      if (!detail && cropCapableRoles.has(role)) {
        return {
          prefix: withoutQuality.slice(0, suffixIndex),
          role,
          roleName: role,
          crop: "",
          quality,
          size
        };
      }

      if (!detail) {
        continue;
      }

      if (!cropCapableRoles.has(role)) {
        return {
          prefix: withoutQuality.slice(0, suffixIndex),
          role,
          roleName: role,
          crop: "",
          quality,
          size
        };
      }

      const parsed = parseCropDetail(detail);

      return {
        prefix: withoutQuality.slice(0, suffixIndex),
        role,
        roleName: `${role}-${detail}`,
        crop: parsed.crop,
        adjustments: parsed.adjustments,
        quality,
        size
      };
    }

    return null;
  }

  function parseCropDetail(detail) {
    const tokens = String(detail || "").split("-").filter(Boolean);
    const cropTokens = [];
    const adjustments = [];

    for (let index = 0; index < tokens.length;) {
      const token = tokens[index];

      if (token === "zoom" && /^\d+$/.test(tokens[index + 1] || "")) {
        adjustments.push(`zoom-${tokens[index + 1]}`);
        index += 2;
        continue;
      }

      if (
        token === "shift" &&
        [...adjustmentDirections.horizontal, ...adjustmentDirections.vertical].includes(tokens[index + 1]) &&
        /^\d+$/.test(tokens[index + 2] || "")
      ) {
        adjustments.push(`shift-${tokens[index + 1]}-${tokens[index + 2]}`);
        index += 3;
        continue;
      }

      if (
        adjustmentDirections.vertical.includes(token) &&
        /^\d+$/.test(tokens[index + 1] || "")
      ) {
        adjustments.push(`shift-${token}-${tokens[index + 1]}`);
        index += 2;
        continue;
      }

      cropTokens.push(token);
      index += 1;
    }

    return {
      crop: cropTokens.join("-"),
      adjustments
    };
  }

  function qualitySuffixes(preferredQuality) {
    return unique([preferredQuality, "98", "89", ""]).map((quality) => quality ? `-q${quality}` : "");
  }

  function adjustmentSuffixes() {
    const zoomSuffixes = ["", ...adjustmentZooms.map((zoom) => `-zoom-${zoom}`)];
    const horizontalSuffixes = [
      "",
      ...adjustmentDirections.horizontal.flatMap((direction) =>
        adjustmentAmounts.map((amount) => `-shift-${direction}-${amount}`)
      )
    ];
    const verticalSuffixes = [
      "",
      ...adjustmentDirections.vertical.flatMap((direction) =>
        adjustmentAmounts.flatMap((amount) => [
          `-shift-${direction}-${amount}`,
          `-${direction}-${amount}`
        ])
      )
    ];
    const suffixes = [];

    zoomSuffixes.forEach((zoom) => {
      horizontalSuffixes.forEach((horizontal) => {
        verticalSuffixes.forEach((vertical) => {
          suffixes.push(`${zoom}${horizontal}${vertical}`);
        });
      });
    });

    return suffixes;
  }

  function modernRoleVariantNames(prefix, roleName, crop, size, preferredQuality) {
    if (!crop) return [];

    const base = `${prefix}-${roleName}-${crop}`;

    return adjustmentSuffixes().flatMap((adjustment) =>
      qualitySuffixes(preferredQuality).map((quality) => `${base}${adjustment}${quality}-${size}`)
    );
  }

  function extensionPriority(role) {
    const preferred = roleExtensionPriority[role] || roleExtensionPriority.default;
    return unique([...preferred, ...supportedExtensions]);
  }

  function roleFallbackNames(parts, requestedRole) {
    const locked = splitLockedImageName(parts.base);

    if (!locked) {
      return [parts.base];
    }

    const role = requestedRole || locked.role;
    const prefix = locked.prefix;
    const originalFallbacks = [".jpg", ".jpeg", ".png"].map((extension) => `${prefix}-original${extension}${parts.suffix}`);
    const roleVariants = (roleName, size) => {
      const baseRole = `${prefix}-${roleName}`;

      if (!cropCapableRoles.has(roleName)) {
        return [`${baseRole}-${size}`];
      }

      const legacyVariants = [
        `${baseRole}-${size}`,
        ...cropModes.map((mode) => `${baseRole}-${mode}-${size}`)
      ];
      const shouldTryAdjustedNames = locked.crop && (
        locked.crop.startsWith("filled-") ||
        (locked.adjustments && locked.adjustments.length)
      );
      const modernVariants = locked.role === roleName && shouldTryAdjustedNames
        ? modernRoleVariantNames(prefix, roleName, locked.crop, size, locked.quality)
        : [];

      return unique([
        ...legacyVariants,
        ...modernVariants
      ]);
    };
    const displayFallbacks = [
      ...roleVariants("media-card", "1200x900"),
      `${prefix}-carousel-1200x900`,
      ...roleVariants("featured", "1200x900")
    ];
    const roleBases = {
      carousel: [`${prefix}-carousel-1200x900`, `${prefix}-media-card-1200x900`],
      display: displayFallbacks,
      featured: [...roleVariants("featured", "1200x900"), `${prefix}-hero-2000x1333`],
      full: [...roleVariants("landscape", "2400x1800"), ...roleVariants("portrait", "1800x2400"), ...displayFallbacks],
      gallery: displayFallbacks,
      "media-card": [...roleVariants("media-card", "1200x900"), `${prefix}-carousel-1200x900`],
      hero: [...roleVariants("hero", "1800x1980"), ...roleVariants("hero", "2000x1333"), ...roleVariants("portrait", "1800x2400"), `${prefix}-featured-1200x900`],
      poster: [`${prefix}-poster-1200x900`, ...roleVariants("media-card", "1200x900")],
      thumb: [...roleVariants("overlay-thumb", "600x400"), ...displayFallbacks],
      "overlay-thumb": [...roleVariants("overlay-thumb", "600x400"), ...displayFallbacks],
      "gallery-thumb": [`${prefix}-gallery-thumb-600x400`, ...roleVariants("overlay-thumb", "600x400"), ...displayFallbacks],
      "carousel-thumb": [`${prefix}-carousel-thumb-320x240`, ...roleVariants("overlay-thumb", "600x400"), ...displayFallbacks],
      "square-thumb": [`${prefix}-square-thumb-600x600`, ...roleVariants("overlay-thumb", "600x400"), ...displayFallbacks],
      placeholder: [`${prefix}-placeholder-40x30`, ...displayFallbacks],
      logo: [`${prefix}-logo`, `${prefix}-logo-transparent`],
      "logo-transparent": [`${prefix}-logo-transparent`, `${prefix}-logo`]
    };
    const bases = roleBases[role] || roleBases[locked.role] || [parts.base];

    return unique([parts.base, ...bases]).flatMap((baseName) => {
      const fullExtensions = baseName === parts.base
        ? extensionPriority(role)
        : extensionPriority(role).filter((extension) => !baseName.endsWith(extension));

      return fullExtensions.map((extension) => `${baseName}${extension}${parts.suffix}`);
    }).concat(originalFallbacks);
  }

  function candidates(url, role = "default") {
    const parts = splitUrl(url);

    if (!parts) {
      return url ? [url] : [];
    }

    const originalExtension = parts.extension.toLowerCase();
    const replacements = roleFallbackNames(parts, role).flatMap((candidateUrl) => {
      const candidateParts = splitUrl(candidateUrl);

      if (!candidateParts) {
        return [candidateUrl];
      }

      const extension = candidateParts.extension.toLowerCase();
      const candidate = candidateUrl;

      if (candidate === url || extension !== originalExtension) {
        return [candidate];
      }

      return unique([url, candidate]);
    });
    const sameNameReplacements = extensionPriority(role).flatMap((extension) => {
      const candidate = `${parts.base}${extension}${parts.suffix}`;

      if (extension === originalExtension) {
        return unique([url, candidate]);
      }

      return [candidate];
    });

    return unique([url, ...sameNameReplacements, ...replacements]);
  }

  function listFromDataset(element, source, role) {
    const explicit = element.dataset.imageCandidates;

    if (explicit) {
      return unique(explicit.split("|").map((candidate) => candidate.trim()).filter(Boolean));
    }

    return candidates(source, role);
  }

  function applySource(element, source) {
    if (element.tagName === "VIDEO") {
      element.setAttribute("poster", source);
      return;
    }

    element.setAttribute("src", source);
  }

  function prepareElement(element) {
    if (element.dataset.imageFallbackReady === "true") {
      return;
    }

    const source = element.tagName === "VIDEO" ? element.getAttribute("poster") : element.getAttribute("src");

    if (!source) {
      return;
    }

    const role = element.dataset.imageRole || "default";
    const fallbackCandidates = listFromDataset(element, source, role);

    if (fallbackCandidates.length <= 1) {
      return;
    }

    element.dataset.imageFallbackReady = "true";
    element.dataset.imageFallbackIndex = "0";
    element.dataset.imageCandidates = fallbackCandidates.join("|");
    applySource(element, fallbackCandidates[0]);

    element.addEventListener("error", () => {
      const currentIndex = Number(element.dataset.imageFallbackIndex || 0);
      const nextIndex = currentIndex + 1;

      if (nextIndex >= fallbackCandidates.length) {
        return;
      }

      element.dataset.imageFallbackIndex = String(nextIndex);
      applySource(element, fallbackCandidates[nextIndex]);
    });
  }

  function prepareVideoPoster(video) {
    const poster = video.getAttribute("poster");

    if (!poster || video.dataset.posterFallbackReady === "true") {
      return;
    }

    const role = video.dataset.imageRole || "poster";
    const fallbackCandidates = listFromDataset(video, poster, role);

    if (fallbackCandidates.length <= 1) {
      return;
    }

    video.dataset.posterFallbackReady = "true";

    let index = 0;
    const probe = new Image();
    const tryNextPoster = () => {
      if (index >= fallbackCandidates.length) {
        return;
      }

      probe.src = fallbackCandidates[index];
      index += 1;
    };

    probe.onload = () => {
      video.setAttribute("poster", probe.src);
    };
    probe.onerror = tryNextPoster;
    tryNextPoster();
  }

  function prepareAll(root = document) {
    root.querySelectorAll("img").forEach(prepareElement);
    root.querySelectorAll("video[poster]").forEach(prepareVideoPoster);
  }

  window.ImageFallbacks = {
    supportedExtensions,
    candidates,
    prepareAll
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => prepareAll());
  } else {
    prepareAll();
  }

  function watchAddedMedia() {
    const observerRoot = document.documentElement || document.body;

    if (!observerRoot) {
      return;
    }

    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          if (node.matches("img")) {
            prepareElement(node);
          }

          if (node.matches("video[poster]")) {
            prepareVideoPoster(node);
          }

          prepareAll(node);
        });
      });
    }).observe(observerRoot, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", watchAddedMedia, { once: true });
  } else {
    watchAddedMedia();
  }
})();
