const DEFAULTS = {
  bundledVideoFiles: "assets/crash-reel.webm, assets/crash-reel.mp4, assets/crash-reel.ogv",
  localVideoFile: "",
  videoSource: "auto",
  mode: "video",
  fit: "cover",
  controls: false,
  overlay: true,
  showTitle: true,
  showClock: true,
  showStrip: true,
  overlayPreset: "compact",
  overlayPosition: "split",
  overlayOpacity: 100,
  panelOpacity: 78,
  uiScale: 82,
  edgePadding: 26,
  accent: "hazard",
  clockZone: "America/New_York",
  clockFormat: "24",
  stripDensity: "compact",
  muted: true,
  loopVideo: true
};

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

const state = { ...DEFAULTS };
const video = document.querySelector("#bridgeVideo");
const frame = document.querySelector("#videoFrame");
const overlay = document.querySelector("#overlay");
const modeLabel = document.querySelector("#modeLabel");
const signalHeading = document.querySelector("#signalHeading");
const signalLabel = document.querySelector("#signalLabel");
const clock = document.querySelector("#clock");

let activeSourceIndex = 0;
let pendingSources = [];

const ACCENTS = ["hazard", "signal", "steel", "red"];
const CLOCK_ZONES = ["America/New_York", "local", "UTC"];
const VIDEO_SOURCES = ["auto", "bundled", "file"];
const OVERLAY_PRESETS = ["custom", ...Object.keys(PRESETS)];
const OVERLAY_POSITIONS = ["split", "top-left", "top-right", "bottom-left", "bottom-right"];

function boolFromValue(value, fallback = false) {
  if (value === true || value === 1) return true;
  if (value === false || value === 0) return false;
  const normalized = String(value || "").trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return fallback;
}

function boolFromWallpaper(value) {
  return boolFromValue(value, false);
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

function modeFromValue(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["image", "still", "photo", "local-image"].includes(normalized)) return "image";
  return "video";
}

function normalizeFileUri(filePath) {
  const raw = String(filePath || "").trim();
  if (!raw) return "";
  if (/^(file|https?):\/\//i.test(raw)) return raw;
  return `file:///${raw.replace(/\\/g, "/")}`;
}

function getBundledVideoPaths() {
  return String(state.bundledVideoFiles || "")
    .split(",")
    .map((path) => path.trim())
    .filter(Boolean);
}

function getVideoSources() {
  const customFile = normalizeFileUri(state.localVideoFile);
  const bundledFiles = getBundledVideoPaths();

  if (state.videoSource === "file") {
    return customFile ? [customFile] : [];
  }

  if (state.videoSource === "bundled") {
    return bundledFiles;
  }

  return customFile ? [customFile, ...bundledFiles] : bundledFiles;
}

function getSourceLabel(source) {
  if (!source) return "No local video selected";
  const withoutQuery = source.split("?")[0];
  const segments = withoutQuery.split(/[\\/]/);
  return decodeURIComponent(segments[segments.length - 1] || "Local crash reel");
}

function canPrecheckBundledSource(source) {
  return /^(https?:)?\/\//i.test(source) === false && /^file:\/\//i.test(source) === false && /^https?:$/i.test(window.location.protocol);
}

async function sourceExists(source) {
  if (!canPrecheckBundledSource(source)) return true;
  try {
    const response = await fetch(source, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return true;
  }
}

async function filterAvailableSources(sources) {
  const availableSources = [];
  for (const source of sources) {
    if (await sourceExists(source)) {
      availableSources.push(source);
    }
  }
  return availableSources;
}

function getQueryOverrides() {
  const params = new URLSearchParams(window.location.search);
  const overrides = {};
  if (params.has("mode")) overrides.mode = params.get("mode");
  if (params.has("videosource")) overrides.videoSource = optionFromValue(params.get("videosource"), VIDEO_SOURCES, DEFAULTS.videoSource);
  if (params.has("videofile")) overrides.localVideoFile = params.get("videofile");
  if (params.has("bundledvideos")) overrides.bundledVideoFiles = params.get("bundledvideos");
  if (params.has("fit")) overrides.fit = params.get("fit");
  if (params.has("controls")) overrides.controls = boolFromValue(params.get("controls"), DEFAULTS.controls);
  if (params.has("muted")) overrides.muted = boolFromValue(params.get("muted"), DEFAULTS.muted);
  if (params.has("loop")) overrides.loopVideo = boolFromValue(params.get("loop"), DEFAULTS.loopVideo);
  if (params.has("overlay")) overrides.overlay = boolFromValue(params.get("overlay"), DEFAULTS.overlay);
  if (params.has("title")) overrides.showTitle = boolFromValue(params.get("title"), DEFAULTS.showTitle);
  if (params.has("clock")) overrides.showClock = boolFromValue(params.get("clock"), DEFAULTS.showClock);
  if (params.has("strip")) overrides.showStrip = boolFromValue(params.get("strip"), DEFAULTS.showStrip);
  if (params.has("preset")) overrides.overlayPreset = optionFromValue(params.get("preset"), OVERLAY_PRESETS, DEFAULTS.overlayPreset);
  if (params.has("position")) overrides.overlayPosition = optionFromValue(params.get("position"), OVERLAY_POSITIONS, DEFAULTS.overlayPosition);
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

function getVisualSettings() {
  if (state.overlayPreset === "custom") return state;
  return { ...state, ...PRESETS[state.overlayPreset] };
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

  video.muted = state.muted;
  video.loop = state.loopVideo;
  video.controls = state.controls;

  frame.classList.toggle("fit-contain", state.fit === "contain");
  overlay.hidden = !visual.overlay;
  document.body.classList.toggle("controls-enabled", state.controls);
  document.body.classList.toggle("no-title", !visual.showTitle);
  document.body.classList.toggle("no-clock", !visual.showClock);
  document.body.classList.toggle("no-strip", !visual.showStrip);
  document.body.classList.toggle("strip-compact", visual.stripDensity === "compact");
  document.body.classList.toggle("is-image", state.mode === "image");
  for (const accent of ACCENTS) {
    document.body.classList.toggle(`accent-${accent}`, state.accent === accent);
  }
  for (const position of OVERLAY_POSITIONS) {
    document.body.classList.toggle(`layout-${position}`, visual.overlayPosition === position);
  }

  if (state.mode === "image") {
    document.body.classList.remove("has-video");
    modeLabel.textContent = "Local still image";
    signalHeading.textContent = "Mode";
    signalLabel.textContent = "Wikimedia bridge photo";
  }

  updateClock();
}

function showVideoSource(source) {
  document.body.classList.remove("is-image");
  document.body.classList.add("has-video");
  modeLabel.textContent = "Local crash reel";
  signalHeading.textContent = "Now playing";
  signalLabel.textContent = getSourceLabel(source);
}

function showVideoFallback(reason = "No local video loaded") {
  video.removeAttribute("src");
  video.load();
  document.body.classList.remove("has-video");
  document.body.classList.add("is-image");
  modeLabel.textContent = "Local still image";
  signalHeading.textContent = state.mode === "image" ? "Mode" : "Video";
  signalLabel.textContent = reason;
}

async function loadVideoSource(index = 0) {
  if (state.mode === "image") {
    showVideoFallback("Wikimedia bridge photo");
    return;
  }

  pendingSources = await filterAvailableSources(getVideoSources());
  activeSourceIndex = index;

  if (!pendingSources.length) {
    showVideoFallback("Add a local crash reel file");
    return;
  }

  const source = pendingSources[activeSourceIndex];
  video.src = source;
  video.load();
  showVideoSource(source);
  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function tryNextVideoSource() {
  if (activeSourceIndex + 1 < pendingSources.length) {
    void loadVideoSource(activeSourceIndex + 1);
    return;
  }
  showVideoFallback("Add assets/crash-reel.webm or pick a video file");
}

function refreshPlayback() {
  applyVisualState();
  void loadVideoSource(0);
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
  let reloadVideo = false;

  if (properties.streammode) {
    state.mode = modeFromValue(properties.streammode.value);
    reloadVideo = true;
  }
  if (properties.videosource) {
    state.videoSource = optionFromValue(properties.videosource.value, VIDEO_SOURCES, DEFAULTS.videoSource);
    reloadVideo = true;
  }
  if (properties.localvideofile) {
    state.localVideoFile = properties.localvideofile.value || "";
    reloadVideo = true;
  }
  if (properties.bundledvideofiles) {
    state.bundledVideoFiles = properties.bundledvideofiles.value || DEFAULTS.bundledVideoFiles;
    reloadVideo = true;
  }
  if (properties.videofit) {
    state.fit = properties.videofit.value === "contain" ? "contain" : "cover";
  }
  if (properties.videocontrols) {
    state.controls = boolFromWallpaper(properties.videocontrols.value);
  }
  if (properties.loopvideo) {
    state.loopVideo = boolFromWallpaper(properties.loopvideo.value);
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
  if (properties.overlaypreset) {
    state.overlayPreset = optionFromValue(properties.overlaypreset.value, OVERLAY_PRESETS, DEFAULTS.overlayPreset);
  }
  if (properties.overlayposition) {
    state.overlayPosition = optionFromValue(properties.overlayposition.value, OVERLAY_POSITIONS, DEFAULTS.overlayPosition);
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

  applyVisualState();
  if (reloadVideo) {
    void loadVideoSource(0);
  }
}

video.addEventListener("loadeddata", () => {
  showVideoSource(video.currentSrc || video.src);
});
video.addEventListener("error", tryNextVideoSource);

Object.assign(state, getQueryOverrides());
state.mode = modeFromValue(state.mode);
refreshPlayback();
updateClock();
setInterval(updateClock, 1000 * 20);

window.wallpaperPropertyListener = {
  applyUserProperties: applyWallpaperProperties
};
