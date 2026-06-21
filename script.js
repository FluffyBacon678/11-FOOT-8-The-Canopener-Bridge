const DEFAULTS = {
  videoId: "-CmDZ-oEtB0",
  fallbackSource: "compilation",
  rotateFallback: true,
  rotateMinutes: 20,
  overlayPreset: "compact",
  overlayPosition: "split",
  mode: "video",
  fit: "cover",
  controls: false,
  overlay: true,
  showTitle: true,
  showClock: true,
  showStrip: true,
  overlayOpacity: 100,
  panelOpacity: 78,
  uiScale: 82,
  edgePadding: 26,
  accent: "hazard",
  clockZone: "America/New_York",
  clockFormat: "24",
  stripDensity: "compact",
  skipIntros: true,
  customStartSeconds: 4,
  muted: true
};

const FALLBACK_VIDEOS = [
  { id: "raptWPQbkMg", title: "Preparing to raise the bridge", seconds: 536, start: 0 },
  { id: "YPt4ijPFzc8", title: "Raising the 11foot8 bridge", seconds: 522, start: 0 },
  { id: "998_yVr6mKI", title: "Moving truck aftermath", seconds: 231, start: 6 },
  { id: "vj8Bkn9kaLE", title: "Good, Bad, Ugly Crashes", seconds: 167, start: 5 },
  { id: "aBLH8qvaIFg", title: "Moving truck destroyed", seconds: 160, start: 4 },
  { id: "-CmDZ-oEtB0", title: "11foot8+8 2020 crash compilation", seconds: 159, start: 5 },
  { id: "PFI3dobpEXM", title: "Almost backs into ambulance", seconds: 116, start: 4 },
  { id: "LH83S869cbs", title: "Canopener traps truck", seconds: 113, start: 4 },
  { id: "whMCjUV4Ciw", title: "Spectacular bridge crash", seconds: 108, start: 4 },
  { id: "r9lf38iqjik", title: "Recent crashes and accidents", seconds: 103, start: 4 },
  { id: "iQfSvIgIs_M", title: "Warning system defeated", seconds: 97, start: 5 },
  { id: "_94aZG4rHS0", title: "Crash 100 at the bridge", seconds: 83, start: 4 },
  { id: "dXF7Hx4VHXU", title: "Another left turn crash", seconds: 79, start: 4 },
  { id: "D7fvQVPS0JM", title: "Two low bridge crashes", seconds: 73, start: 4 },
  { id: "yvlvfY6lOyg", title: "Two crashes in one morning", seconds: 68, start: 4 },
  { id: "PFl9X0g_WyE", title: "Reefer truck gets stuck", seconds: 57, start: 4 },
  { id: "mPUL2SQ77uQ", title: "Perfect peel at the bridge", seconds: 50, start: 4 },
  { id: "EAtvF7SYgw4", title: "Roof modification", seconds: 50, start: 4 },
  { id: "NsrHHwsHCck", title: "Bump or high-five?", seconds: 49, start: 4 },
  { id: "L4mQnp4H0fk", title: "Rental truck escape attempt", seconds: 48, start: 4 },
  { id: "zoZRPhMGCUQ", title: "Will this boxtruck get stuck?", seconds: 48, start: 4 },
  { id: "L7kucKmcoBQ", title: "Crash sprays debris", seconds: 46, start: 4 },
  { id: "eHSPgqdZ4DU", title: "Rental truck roof treatment", seconds: 42, start: 4 },
  { id: "R5FcJBKzUoA", title: "Concrete truck crash beam", seconds: 42, start: 4 },
  { id: "8qiGP72GFUc", title: "Clash of the giants", seconds: 36, start: 3 },
  { id: "Ne3WPt_H6rU", title: "Industrial vacuum truck crash", seconds: 35, start: 3 },
  { id: "q1fq3hxp_9k", title: "Camper gets stuck", seconds: 34, start: 3 },
  { id: "wQBwDnRvdIg", title: "11foot8 bridge fall compilation", seconds: 31, start: 3 }
];

const MIN_FALLBACK_SECONDS = 30;
const ELIGIBLE_FALLBACK_VIDEOS = FALLBACK_VIDEOS.filter((video) => video.seconds >= MIN_FALLBACK_SECONDS);
const CRASH_COMPILATION_IDS = [
  "vj8Bkn9kaLE",
  "-CmDZ-oEtB0",
  "aBLH8qvaIFg",
  "998_yVr6mKI",
  "whMCjUV4Ciw",
  "r9lf38iqjik",
  "iQfSvIgIs_M",
  "_94aZG4rHS0",
  "LH83S869cbs",
  "D7fvQVPS0JM",
  "dXF7Hx4VHXU",
  "yvlvfY6lOyg",
  "PFl9X0g_WyE",
  "mPUL2SQ77uQ",
  "EAtvF7SYgw4",
  "NsrHHwsHCck",
  "L4mQnp4H0fk",
  "zoZRPhMGCUQ",
  "L7kucKmcoBQ",
  "eHSPgqdZ4DU",
  "R5FcJBKzUoA",
  "8qiGP72GFUc",
  "Ne3WPt_H6rU",
  "q1fq3hxp_9k",
  "wQBwDnRvdIg"
];
const CRASH_COMPILATION_VIDEOS = CRASH_COMPILATION_IDS
  .map((id) => FALLBACK_VIDEOS.find((video) => video.id === id))
  .filter(Boolean);

const PRESETS = {
  compact: {
    overlay: true,
    showTitle: true,
    showClock: true,
    showStrip: true,
    overlayOpacity: 100,
    panelOpacity: 78,
    uiScale: 82,
    edgePadding: 26,
    stripDensity: "compact"
  },
  clean: {
    overlay: true,
    showTitle: true,
    showClock: true,
    showStrip: false,
    overlayOpacity: 92,
    panelOpacity: 62,
    uiScale: 78,
    edgePadding: 24,
    stripDensity: "compact"
  },
  info: {
    overlay: true,
    showTitle: false,
    showClock: true,
    showStrip: true,
    overlayOpacity: 100,
    panelOpacity: 78,
    uiScale: 80,
    edgePadding: 24,
    stripDensity: "compact"
  },
  minimal: {
    overlay: true,
    showTitle: false,
    showClock: true,
    showStrip: false,
    overlayOpacity: 78,
    panelOpacity: 56,
    uiScale: 72,
    edgePadding: 18,
    stripDensity: "compact"
  },
  full: {
    overlay: true,
    showTitle: true,
    showClock: true,
    showStrip: true,
    overlayOpacity: 100,
    panelOpacity: 82,
    uiScale: 100,
    edgePadding: 36,
    stripDensity: "normal"
  },
  cinema: {
    overlay: false,
    showTitle: false,
    showClock: false,
    showStrip: false,
    overlayOpacity: 0,
    panelOpacity: 60,
    uiScale: 80,
    edgePadding: 20,
    stripDensity: "compact"
  }
};

function pickRandomFallbackVideo() {
  return ELIGIBLE_FALLBACK_VIDEOS[Math.floor(Math.random() * ELIGIBLE_FALLBACK_VIDEOS.length)];
}

function pickDifferentFallbackVideo(currentId) {
  const choices = ELIGIBLE_FALLBACK_VIDEOS.filter((video) => video.id !== currentId);
  return choices[Math.floor(Math.random() * choices.length)] || pickRandomFallbackVideo();
}

const randomFallback = pickRandomFallbackVideo();
const state = {
  ...DEFAULTS,
  compilationIndex: 0,
  randomVideoId: randomFallback.id,
  randomVideoTitle: randomFallback.title
};
const stream = document.querySelector("#bridgeStream");
const frame = document.querySelector("#videoFrame");
const overlay = document.querySelector("#overlay");
const modeLabel = document.querySelector("#modeLabel");
const signalHeading = document.querySelector("#signalHeading");
const signalLabel = document.querySelector("#signalLabel");
const clock = document.querySelector("#clock");
let lastRotationAt = Date.now();
let activeVideoStartedAt = Date.now();
let streamLoadTimer = 0;

const ACCENTS = ["hazard", "signal", "steel", "red"];
const CLOCK_ZONES = ["America/New_York", "local", "UTC"];
const FALLBACK_SOURCES = ["compilation", "random", "custom"];
const OVERLAY_PRESETS = ["custom", ...Object.keys(PRESETS)];
const OVERLAY_POSITIONS = ["split", "top-left", "top-right", "bottom-left", "bottom-right"];
const EXTERNAL_STREAM_LOAD_DELAY_MS = 1200;
const COMPILATION_CHECK_INTERVAL_MS = 5000;
const MIN_COMPILATION_RUNTIME_SECONDS = 15;

function sanitizeId(value, fallback) {
  const trimmed = String(value || "").trim();
  return /^[\w-]{6,}$/.test(trimmed) ? trimmed : fallback;
}

function sanitizeVideoId(value, fallback) {
  const raw = String(value || "").trim();
  const match = raw.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/);
  return sanitizeId(match ? match[1] : raw, fallback);
}

function boolFromValue(value, fallback = false) {
  if (value === true || value === 1) return true;
  if (value === false || value === 0) return false;
  const normalized = String(value || "").trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return fallback;
}

function numberInRange(value, min, max, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

function optionFromValue(value, allowed, fallback) {
  const normalized = String(value || "").trim();
  return allowed.includes(normalized) ? normalized : fallback;
}

function getQueryOverrides() {
  const params = new URLSearchParams(window.location.search);
  const overrides = {};
  if (params.has("mode")) overrides.mode = params.get("mode");
  if (params.has("video")) overrides.videoId = sanitizeVideoId(params.get("video"), DEFAULTS.videoId);
  if (params.has("fallback")) overrides.fallbackSource = optionFromValue(params.get("fallback"), FALLBACK_SOURCES, DEFAULTS.fallbackSource);
  if (params.has("rotate")) overrides.rotateFallback = boolFromValue(params.get("rotate"), DEFAULTS.rotateFallback);
  if (params.has("rotateminutes")) overrides.rotateMinutes = numberInRange(params.get("rotateminutes"), 5, 90, DEFAULTS.rotateMinutes);
  if (params.has("skipintros")) overrides.skipIntros = boolFromValue(params.get("skipintros"), DEFAULTS.skipIntros);
  if (params.has("customstart")) overrides.customStartSeconds = numberInRange(params.get("customstart"), 0, 90, DEFAULTS.customStartSeconds);
  if (params.has("preset")) overrides.overlayPreset = optionFromValue(params.get("preset"), OVERLAY_PRESETS, DEFAULTS.overlayPreset);
  if (params.has("position")) overrides.overlayPosition = optionFromValue(params.get("position"), OVERLAY_POSITIONS, DEFAULTS.overlayPosition);
  if (params.has("fit")) overrides.fit = params.get("fit");
  if (params.has("controls")) overrides.controls = boolFromValue(params.get("controls"), DEFAULTS.controls);
  if (params.has("muted")) overrides.muted = boolFromValue(params.get("muted"), DEFAULTS.muted);
  if (params.has("overlay")) overrides.overlay = boolFromValue(params.get("overlay"), DEFAULTS.overlay);
  if (params.has("title")) overrides.showTitle = boolFromValue(params.get("title"), DEFAULTS.showTitle);
  if (params.has("clock")) overrides.showClock = boolFromValue(params.get("clock"), DEFAULTS.showClock);
  if (params.has("strip")) overrides.showStrip = boolFromValue(params.get("strip"), DEFAULTS.showStrip);
  if (params.has("opacity")) overrides.overlayOpacity = numberInRange(params.get("opacity"), 0, 100, DEFAULTS.overlayOpacity);
  if (params.has("panel")) overrides.panelOpacity = numberInRange(params.get("panel"), 35, 100, DEFAULTS.panelOpacity);
  if (params.has("scale")) overrides.uiScale = numberInRange(params.get("scale"), 70, 130, DEFAULTS.uiScale);
  if (params.has("padding")) overrides.edgePadding = numberInRange(params.get("padding"), 8, 72, DEFAULTS.edgePadding);
  if (params.has("accent")) overrides.accent = optionFromValue(params.get("accent"), ACCENTS, DEFAULTS.accent);
  if (params.has("clockzone")) overrides.clockZone = optionFromValue(params.get("clockzone"), CLOCK_ZONES, DEFAULTS.clockZone);
  if (params.has("format")) overrides.clockFormat = optionFromValue(params.get("format"), ["12", "24"], DEFAULTS.clockFormat);
  if (params.has("density")) overrides.stripDensity = optionFromValue(params.get("density"), ["normal", "compact"], DEFAULTS.stripDensity);
  return overrides;
}

function boolFromWallpaper(value) {
  return boolFromValue(value, false);
}

function modeFromValue(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["image", "still", "photo", "local-image"].includes(normalized)) return "image";
  return "video";
}

function getFallbackVideoTitle(videoId) {
  const normalized = sanitizeVideoId(videoId, "");
  return FALLBACK_VIDEOS.find((video) => video.id === normalized)?.title || "Custom archive recording";
}

function getFallbackVideo(videoId) {
  const normalized = sanitizeVideoId(videoId, DEFAULTS.videoId);
  return FALLBACK_VIDEOS.find((video) => video.id === normalized);
}

function getActiveFallbackVideo() {
  if (state.fallbackSource === "compilation") {
    return CRASH_COMPILATION_VIDEOS[state.compilationIndex % CRASH_COMPILATION_VIDEOS.length] || getFallbackVideo(DEFAULTS.videoId);
  }

  if (state.fallbackSource === "random") {
    return getFallbackVideo(state.randomVideoId) || getFallbackVideo(DEFAULTS.videoId);
  }

  return getFallbackVideo(state.videoId) || {
    id: sanitizeVideoId(state.videoId, DEFAULTS.videoId),
    title: getFallbackVideoTitle(state.videoId),
    seconds: 0,
    start: state.customStartSeconds
  };
}

function getVideoStartSeconds(video) {
  if (!state.skipIntros) return 0;
  if (state.fallbackSource === "custom" && !getFallbackVideo(video.id)) {
    return Math.round(numberInRange(state.customStartSeconds, 0, 90, DEFAULTS.customStartSeconds));
  }
  return Math.round(numberInRange(video.start || 0, 0, Math.max(0, video.seconds - MIN_COMPILATION_RUNTIME_SECONDS), 0));
}

function getCompilationRuntimeSeconds(video) {
  const startSeconds = getVideoStartSeconds(video);
  return Math.max(MIN_COMPILATION_RUNTIME_SECONDS, (video.seconds || 0) - startSeconds);
}

function getVisualSettings() {
  if (state.overlayPreset === "custom") return state;
  return { ...state, ...PRESETS[state.overlayPreset] };
}

function buildEmbedUrl() {
  if (state.mode === "image") {
    return "about:blank";
  }

  const params = new URLSearchParams({
    autoplay: "1",
    mute: state.muted ? "1" : "0",
    controls: state.controls ? "1" : "0",
    disablekb: state.controls ? "0" : "1",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    fs: "0",
    iv_load_policy: "3"
  });

  if (window.location.origin && window.location.origin.startsWith("http")) {
    params.set("origin", window.location.origin);
  }

  if (state.mode === "video") {
    const video = getActiveFallbackVideo();
    const videoId = sanitizeVideoId(video.id, DEFAULTS.videoId);
    const startSeconds = getVideoStartSeconds(video);

    if (startSeconds > 0) {
      params.set("start", String(startSeconds));
    }

    if (state.fallbackSource === "compilation") {
      if (video.seconds) {
        params.set("end", String(video.seconds));
      }
    } else {
      params.set("loop", "1");
      params.set("playlist", videoId);
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }

  return "about:blank";
}

function applyVisualState() {
  const visual = getVisualSettings();

  document.documentElement.style.setProperty(
    "--overlay-opacity",
    visual.overlay ? String(Math.max(0, Math.min(100, visual.overlayOpacity)) / 100) : "0"
  );
  document.documentElement.style.setProperty(
    "--panel-opacity",
    String(numberInRange(visual.panelOpacity, 35, 100, DEFAULTS.panelOpacity) / 100)
  );
  document.documentElement.style.setProperty(
    "--ui-scale",
    String(numberInRange(visual.uiScale, 70, 130, DEFAULTS.uiScale) / 100)
  );
  document.documentElement.style.setProperty(
    "--edge-padding",
    `${numberInRange(visual.edgePadding, 8, 72, DEFAULTS.edgePadding)}px`
  );

  frame.classList.toggle("fit-contain", state.fit === "contain");
  overlay.hidden = !visual.overlay;
  document.body.classList.toggle("controls-enabled", state.controls);
  document.body.classList.toggle("no-title", !visual.showTitle);
  document.body.classList.toggle("no-clock", !visual.showClock);
  document.body.classList.toggle("no-strip", !visual.showStrip);
  document.body.classList.toggle("strip-compact", visual.stripDensity === "compact");
  document.body.classList.toggle("is-fallback", state.mode === "video");
  document.body.classList.toggle("is-image", state.mode === "image");
  for (const accent of ACCENTS) {
    document.body.classList.toggle(`accent-${accent}`, state.accent === accent);
  }
  for (const position of OVERLAY_POSITIONS) {
    document.body.classList.toggle(`layout-${position}`, visual.overlayPosition === position);
  }

  if (state.mode === "video") {
    const video = getActiveFallbackVideo();
    if (state.fallbackSource === "compilation") {
      modeLabel.textContent = "Crash compilation reel";
      signalHeading.textContent = "Now playing";
      signalLabel.textContent = `${state.compilationIndex + 1}/${CRASH_COMPILATION_VIDEOS.length} - ${video.title}`;
    } else if (state.fallbackSource === "random") {
      modeLabel.textContent = "Random yovo68 archive";
      signalHeading.textContent = "Archive";
      signalLabel.textContent = video.title;
    } else {
      modeLabel.textContent = "Custom archive video";
      signalHeading.textContent = "Archive";
      signalLabel.textContent = getFallbackVideoTitle(state.videoId);
    }
  } else if (state.mode === "image") {
    modeLabel.textContent = "Local still image";
    signalHeading.textContent = "Mode";
    signalLabel.textContent = "Wikimedia bridge photo";
  }

  updateClock();
}

function refreshStream(force = false) {
  const nextUrl = buildEmbedUrl();

  if (streamLoadTimer) {
    window.clearTimeout(streamLoadTimer);
    streamLoadTimer = 0;
  }

  if (state.mode === "image") {
    if (force || stream.getAttribute("src") !== "about:blank") {
      stream.src = "about:blank";
    }
    applyVisualState();
    return;
  }

  if (force || stream.src !== nextUrl) {
    stream.src = "about:blank";
    streamLoadTimer = window.setTimeout(() => {
      streamLoadTimer = 0;
      stream.src = nextUrl;
    }, EXTERNAL_STREAM_LOAD_DELAY_MS);
  }

  applyVisualState();
}

function updateClock() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: state.clockFormat === "12"
  };
  if (state.clockZone !== "local") {
    options.timeZone = state.clockZone;
  }
  const formatted = new Intl.DateTimeFormat("en-US", options).format(now);

  clock.textContent = formatted;
  clock.dateTime = now.toISOString();
}

function applyWallpaperProperties(properties) {
  const previousMode = state.mode;
  const previousFallbackSource = state.fallbackSource;
  const previousVideoId = state.videoId;
  const previousSkipIntros = state.skipIntros;
  const previousCustomStartSeconds = state.customStartSeconds;

  if (properties.streammode) {
    state.mode = modeFromValue(properties.streammode.value);
  }
  if (properties.videoid) {
    state.videoId = sanitizeVideoId(properties.videoid.value, DEFAULTS.videoId);
  }
  if (properties.fallbacksource) {
    state.fallbackSource = optionFromValue(properties.fallbacksource.value, FALLBACK_SOURCES, DEFAULTS.fallbackSource);
  }
  if (properties.autorotatefallback) {
    state.rotateFallback = boolFromWallpaper(properties.autorotatefallback.value);
    lastRotationAt = Date.now();
  }
  if (properties.fallbackrotateminutes) {
    state.rotateMinutes = numberInRange(properties.fallbackrotateminutes.value, 5, 90, DEFAULTS.rotateMinutes);
    lastRotationAt = Date.now();
  }
  if (properties.skipintros) {
    state.skipIntros = boolFromWallpaper(properties.skipintros.value);
  }
  if (properties.customstartseconds) {
    state.customStartSeconds = numberInRange(properties.customstartseconds.value, 0, 90, DEFAULTS.customStartSeconds);
  }
  if (properties.overlaypreset) {
    state.overlayPreset = optionFromValue(properties.overlaypreset.value, OVERLAY_PRESETS, DEFAULTS.overlayPreset);
  }
  if (properties.overlayposition) {
    state.overlayPosition = optionFromValue(properties.overlayposition.value, OVERLAY_POSITIONS, DEFAULTS.overlayPosition);
  }
  if (properties.videofit) {
    state.fit = properties.videofit.value === "contain" ? "contain" : "cover";
  }
  if (properties.youtubecontrols) {
    state.controls = boolFromWallpaper(properties.youtubecontrols.value);
  }
  if (properties.showoverlay) {
    state.overlay = boolFromWallpaper(properties.showoverlay.value);
  }
  if (properties.showtitle) {
    state.showTitle = boolFromWallpaper(properties.showtitle.value);
  }
  if (properties.showclock) {
    state.showClock = boolFromWallpaper(properties.showclock.value);
  }
  if (properties.showinfostrip) {
    state.showStrip = boolFromWallpaper(properties.showinfostrip.value);
  }
  if (properties.overlayopacity) {
    state.overlayOpacity = numberInRange(properties.overlayopacity.value, 0, 100, DEFAULTS.overlayOpacity);
  }
  if (properties.panelopacity) {
    state.panelOpacity = numberInRange(properties.panelopacity.value, 35, 100, DEFAULTS.panelOpacity);
  }
  if (properties.uiscale) {
    state.uiScale = numberInRange(properties.uiscale.value, 70, 130, DEFAULTS.uiScale);
  }
  if (properties.edgepadding) {
    state.edgePadding = numberInRange(properties.edgepadding.value, 8, 72, DEFAULTS.edgePadding);
  }
  if (properties.accentstyle) {
    state.accent = optionFromValue(properties.accentstyle.value, ACCENTS, DEFAULTS.accent);
  }
  if (properties.clocktimezone) {
    state.clockZone = optionFromValue(properties.clocktimezone.value, CLOCK_ZONES, DEFAULTS.clockZone);
  }
  if (properties.clockformat) {
    state.clockFormat = optionFromValue(properties.clockformat.value, ["12", "24"], DEFAULTS.clockFormat);
  }
  if (properties.stripdensity) {
    state.stripDensity = optionFromValue(properties.stripdensity.value, ["normal", "compact"], DEFAULTS.stripDensity);
  }
  if (properties.muted) {
    state.muted = boolFromWallpaper(properties.muted.value);
  }

  if (
    state.mode !== previousMode ||
    state.fallbackSource !== previousFallbackSource ||
    state.videoId !== previousVideoId ||
    state.skipIntros !== previousSkipIntros ||
    state.customStartSeconds !== previousCustomStartSeconds
  ) {
    lastRotationAt = Date.now();
    activeVideoStartedAt = Date.now();
  }

  refreshStream();
}

function rotateRandomFallback() {
  const next = pickDifferentFallbackVideo(state.randomVideoId);
  state.randomVideoId = next.id;
  state.randomVideoTitle = next.title;
  lastRotationAt = Date.now();
  refreshStream(true);
}

function advanceCompilationVideo() {
  state.compilationIndex = (state.compilationIndex + 1) % CRASH_COMPILATION_VIDEOS.length;
  activeVideoStartedAt = Date.now();
  refreshStream(true);
}

Object.assign(state, getQueryOverrides());
state.mode = modeFromValue(state.mode);
refreshStream(true);
updateClock();
setInterval(updateClock, 1000 * 20);
setInterval(() => {
  if (state.mode === "video" && state.fallbackSource === "compilation") {
    const video = getActiveFallbackVideo();
    if (Date.now() - activeVideoStartedAt >= getCompilationRuntimeSeconds(video) * 1000) {
      advanceCompilationVideo();
    }
    return;
  }

  const canRotate = state.mode === "video" && state.fallbackSource === "random" && state.rotateFallback;
  if (!canRotate) return;
  if (Date.now() - lastRotationAt >= state.rotateMinutes * 60 * 1000) {
    rotateRandomFallback();
  }
}, COMPILATION_CHECK_INTERVAL_MS);

window.wallpaperPropertyListener = {
  applyUserProperties: applyWallpaperProperties
};
