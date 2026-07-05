// --- Translations ---
const i18n = {
  en: {
    mainTitle: "✨ Advanced Chart Maker",
    mainDesc:
      "Adjust layouts, pan/zoom images, and drag numbers to customize your chart.",
    secLayout: "1. Grid Layout",
    secBox: "2. Box Design",
    secText: "3. Typography",
    secBg: "4. Background & Effects",
    colLabel: "Columns",
    rowLabel: "Rows",
    gapLabel: "Gap (px)",
    radiusLabel: "Roundness (px)",
    cellWLabel: "Width (px)",
    cellHLabel: "Height (px)",
    fontLabel: "Font Family",
    textAlignLabel: "Text Alignment",
    alignLeft: "Left",
    alignCenter: "Center",
    alignRight: "Right",
    mainTitleLabel: "Main Title",
    subTitleLabel: "Subtitle",
    bgTypeLabel: "Background Type",
    bgSolid: "Solid",
    bgGrad2: "2-Color Gradient",
    bgGrad3: "3-Color Gradient",
    patternLabel: "Pattern",
    patternNone: "None",
    patternStripes: "Stripes",
    patternDots: "Dots",
    patternDiamond: "Diamond",
    patternGrid: "Grid",
    patternSpacingLabel: "Pattern Spacing",
    patternSizeLabel: "Pattern Size",
    secTemplates: "Templates",
    tplCharacters: "Characters",
    tplGames: "Games",
    tplMedia: "Movies/Media",
    tplSongs: "Songs",
    tplGamesTitle: "My Favorite Games",
    tplGamesSub: "@ Level up your list @",
    tplMediaTitle: "My Favorite Movies",
    tplMediaSub: "@ Lights, camera, action @",
    tplSongsTitle: "My Favorite Songs",
    tplSongsSub: "@ On repeat forever @",
    exportBtn: "Export PNG",
    defaultTitle: "My Favorite Characters",
    defaultSub: "@ Fill in with your preferences @",
  },
  ko: {
    mainTitle: "✨ 고급 취향표 메이커",
    mainDesc:
      "마우스 휠이나 드래그로 수치를 조정하고, 이미지를 세밀하게 편집하세요.",
    secLayout: "1. 그리드 설정",
    secBox: "2. 칸 디자인",
    secText: "3. 텍스트",
    secBg: "4. 배경 및 효과",
    colLabel: "열 (Columns)",
    rowLabel: "행 (Rows)",
    gapLabel: "칸 간격 (Gap)",
    radiusLabel: "둥글기 (Radius)",
    cellWLabel: "가로 크기 (px)",
    cellHLabel: "세로 크기 (px)",
    fontLabel: "글꼴 (Font)",
    textAlignLabel: "텍스트 정렬",
    alignLeft: "왼쪽",
    alignCenter: "가운데",
    alignRight: "오른쪽",
    mainTitleLabel: "메인 타이틀",
    subTitleLabel: "서브타이틀",
    bgTypeLabel: "배경 유형",
    bgSolid: "단색",
    bgGrad2: "2색 그라데이션",
    bgGrad3: "3색 그라데이션",
    patternLabel: "패턴",
    patternNone: "없음",
    patternStripes: "줄무늬",
    patternDots: "물방울",
    patternDiamond: "다이아몬드",
    patternGrid: "격자",
    patternSpacingLabel: "패턴 간격",
    patternSizeLabel: "패턴 크기",
    secTemplates: "템플릿",
    tplCharacters: "캐릭터",
    tplGames: "게임",
    tplMedia: "영화/미디어",
    tplSongs: "노래",
    tplGamesTitle: "게임 취향 모음표",
    tplGamesSub: "@ 본인 취향인 게임을 채우면 되는 표 @",
    tplMediaTitle: "영화 취향 모음표",
    tplMediaSub: "@ 본인 취향인 영화를 채우면 되는 표 @",
    tplSongsTitle: "노래 취향 모음표",
    tplSongsSub: "@ 본인 취향인 노래를 채우면 되는 표 @",
    exportBtn: "이미지 저장 (PNG)",
    defaultTitle: "캐릭터 취향 모음표",
    defaultSub: "@ 본인 취향인 캐릭터를 채우면 되는 표 @",
  },
};

// --- Templates ---
const templates = {
  characters: {
    font: "'Noto Sans KR', sans-serif",
    titleKey: "defaultTitle",
    subKey: "defaultSub",
    titleColor: "#ffffff",
    subtitleColor: "#d4d4d4",
    bgType: "gradient2",
    bg1: "#000000",
    bg2: "#1e3a8a",
    bgDir: "to bottom",
    pattern: "none",
    patternColor: "#ffffff",
    patternOpacity: 25,
    patternSpacing: 24,
    patternSize: 4,
  },
  games: {
    font: "'Bebas Neue', sans-serif",
    titleKey: "tplGamesTitle",
    subKey: "tplGamesSub",
    titleColor: "#f0abfc",
    subtitleColor: "#c4b5fd",
    bgType: "gradient2",
    bg1: "#1e1b4b",
    bg2: "#4c1d95",
    bgDir: "135deg",
    pattern: "grid",
    patternColor: "#a78bfa",
    patternOpacity: 25,
    patternSpacing: 24,
    patternSize: 1,
    cols: 3,
    rows: 2,
    cellWidth: 256,
    cellHeight: 300,
  },
  media: {
    font: "'Do Hyeon', sans-serif",
    titleKey: "tplMediaTitle",
    subKey: "tplMediaSub",
    titleColor: "#facc15",
    subtitleColor: "#e5e7eb",
    bgType: "gradient2",
    bg1: "#000000",
    bg2: "#422006",
    bgDir: "to bottom",
    cols: 3,
    rows: 3,
    cellWidth: 256,
    cellHeight: 300,
    pattern: "diamond",
    patternColor: "#fde68a",
    patternOpacity: 15,
    patternSpacing: 68,
    patternSize: 10,
  },
  songs: {
    font: "'Gowun Dodum', sans-serif",
    titleKey: "tplSongsTitle",
    subKey: "tplSongsSub",
    titleColor: "#831843",
    subtitleColor: "#9d174d",
    bgType: "gradient2",
    bg1: "#fbcfe8",
    bg2: "#fdba74",
    bgDir: "to right",
    pattern: "dots",
    patternColor: "#be185d",
    patternOpacity: 20,
    patternSpacing: 18,
    patternSize: 1.5,
  },
};

let currentLang = navigator.language.startsWith("ko") ? "ko" : "en";
// Tracks which template's title/subtitle is currently showing, so a language
// toggle can re-translate it. "characters" is the template the page loads with.
let activeTemplate = "characters";
// Text alignment is a layout preference, not part of a template's theme, so it
// persists across template switches instead of being reset by them.
let textAlign = "center";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang][key]) el.innerText = i18n[currentLang][key];
  });

  // Only re-translate the title/subtitle if they still match the active
  // template's text in the old language, so custom user-typed text is untouched.
  const oldLang = currentLang === "en" ? "ko" : "en";
  const t = templates[activeTemplate];
  if (t) {
    const titleInput = document.getElementById("titleInput");
    const subtitleInput = document.getElementById("subtitleInput");
    if (titleInput.value === i18n[oldLang][t.titleKey]) {
      titleInput.value = i18n[currentLang][t.titleKey];
    }
    if (subtitleInput.value === i18n[oldLang][t.subKey]) {
      subtitleInput.value = i18n[currentLang][t.subKey];
    }
  }
  updateStyles();
}
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ko" : "en";
  applyTranslations();
});

// --- Make all number inputs draggable and scrollable ---
document.querySelectorAll('input[type="number"]').forEach((input) => {
  // 1. Mouse wheel support
  input.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const step = parseFloat(input.getAttribute("step")) || 1;
      let val = parseFloat(input.value) || 0;
      val += e.deltaY < 0 ? step : -step;

      const min = input.hasAttribute("min") ? parseFloat(input.min) : -Infinity;
      const max = input.hasAttribute("max") ? parseFloat(input.max) : Infinity;
      val = Math.max(min, Math.min(max, val));

      input.value = step < 1 ? val.toFixed(2) : Math.round(val);
      input.dispatchEvent(new Event("input"));
      input.dispatchEvent(new Event("change"));
    },
    { passive: false },
  );

  // 2. Click and Drag support
  let isDragging = false;
  let startX = 0;
  let startVal = 0;

  input.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startVal = parseFloat(input.value) || 0;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 2) {
      input.blur(); // Prevent text selection highlight while scrubbing

      const step = parseFloat(input.getAttribute("step")) || 1;
      // Scale movement sensitivity based on the type of input
      let multiplier =
        input.id.includes("Width") || input.id.includes("Height")
          ? 2
          : step < 1
            ? step * 2
            : 1;
      let val = startVal + deltaX * multiplier;

      const min = input.hasAttribute("min") ? parseFloat(input.min) : -Infinity;
      const max = input.hasAttribute("max") ? parseFloat(input.max) : Infinity;
      val = Math.max(min, Math.min(max, val));

      input.value = step < 1 ? val.toFixed(2) : Math.round(val);
      input.dispatchEvent(new Event("input"));
      input.dispatchEvent(new Event("change"));
    }
  });

  window.addEventListener("mouseup", () => (isDragging = false));
});

// --- Core Variables ---
let loadedImages = {};
let cellSettings = {};
let activeEditCell = null;

// Shared with the export routine so the live preview and the downloaded PNG use identical spacing.
const PADDING = 30;

// Default title/subtitle sizes every template (including the initial no-template
// state) resets to, so switching templates gives a consistent, legible result.
const DEFAULT_TITLE_SIZE = 55;
const DEFAULT_SUBTITLE_SIZE = 28;

const ui = {
  col: document.getElementById("colInput"),
  row: document.getElementById("rowInput"),
  w: document.getElementById("cellWidthInput"),
  h: document.getElementById("cellHeightInput"),
  gap: document.getElementById("gapInput"),
  radius: document.getElementById("radiusInput"),
  font: document.getElementById("fontSelect"),
  tIn: document.getElementById("titleInput"),
  tSize: document.getElementById("titleSize"),
  tCol: document.getElementById("titleColor"),
  sIn: document.getElementById("subtitleInput"),
  sSize: document.getElementById("subtitleSize"),
  sCol: document.getElementById("subtitleColor"),
  bgType: document.getElementById("bgType"),
  bgDir: document.getElementById("gradDirection"),
  bg1: document.getElementById("bgColor1"),
  bg2: document.getElementById("bgColor2"),
  bg3: document.getElementById("bgColor3"),
  patternType: document.getElementById("patternType"),
  patternColor: document.getElementById("patternColor"),
  patternOpacity: document.getElementById("patternOpacity"),
  patternSpacing: document.getElementById("patternSpacing"),
  patternSize: document.getElementById("patternSize"),
  grid: document.getElementById("chartGrid"),
  viewport: document.getElementById("previewViewport"),
  stage: document.getElementById("previewStage"),
  footer: document.getElementById("footerWatermark"),
  tPrev: document.getElementById("titlePreview"),
  sPrev: document.getElementById("subtitlePreview"),
  textBlock: document.getElementById("titleTextBlock"),
};

const modal = document.getElementById("imageModal");
const mPrevCont = document.getElementById("modalPreviewContainer");
const mImg = document.getElementById("modalPreviewImg");
const mZoom = document.getElementById("modalZoom");
const mPanX = document.getElementById("modalPanX");
const mPanY = document.getElementById("modalPanY");

// --- Pattern Overlays ---
// Patterns are inline SVG data-URI tiles (no image assets needed) rather than
// live CSS gradients: a repeating hard-edge gradient (color 1px, transparent 1px)
// gets anti-aliased away to nothing once the live preview is scaled down by
// updatePreviewLayout's transform, since it's rasterized as a resolution-dependent
// gradient rather than a bitmap. An SVG image tile downsamples like a normal
// image instead, so it stays visible (and crisp) at any preview scale.
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function svgTileUrl(size, inner) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>${inner}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Returns an array of {image, size} background layers (CSS multi-background),
// listed topmost-first so they paint on top of whatever's beneath them.
// `spacing` is the tile period in px (how far apart repeats land); `size` is
// the shape's own dot radius / line thickness, independent of spacing.
function getPatternLayers(type, color, opacity, spacing, size) {
  const s = spacing;
  if (type === "stripes") {
    const w = Math.max(1, size);
    const inner = `<g stroke='${color}' stroke-opacity='${opacity}' stroke-width='${w}'><line x1='0' y1='${s}' x2='${s}' y2='0'/><line x1='${-s / 2}' y1='${s / 2}' x2='${s / 2}' y2='${-s / 2}'/><line x1='${s / 2}' y1='${s * 1.5}' x2='${s * 1.5}' y2='${s / 2}'/></g>`;
    return [{ image: svgTileUrl(s, inner), size: `${s}px ${s}px` }];
  }
  if (type === "dots") {
    const r = Math.max(0.5, size);
    const inner = `<circle cx='${s / 2}' cy='${s / 2}' r='${r}' fill='${color}' fill-opacity='${opacity}'/>`;
    return [{ image: svgTileUrl(s, inner), size: `${s}px ${s}px` }];
  }
  if (type === "grid") {
    const w = Math.max(1, size);
    const inner = `<g stroke='${color}' stroke-opacity='${opacity}' stroke-width='${w}'><line x1='0' y1='0' x2='${s}' y2='0'/><line x1='0' y1='0' x2='0' y2='${s}'/></g>`;
    return [{ image: svgTileUrl(s, inner), size: `${s}px ${s}px` }];
  }
  if (type === "diamond") {
    const r = Math.max(1, size);
    const cx = s / 2,
      cy = s / 2;
    const inner = `<polygon points='${cx},${cy - r} ${cx + r},${cy} ${cx},${cy + r} ${cx - r},${cy}' fill='${color}' fill-opacity='${opacity}'/>`;
    return [{ image: svgTileUrl(s, inner), size: `${s}px ${s}px` }];
  }
  return [];
}

// Styles & Gap updates
function updateStyles() {
  ui.tPrev.innerText = ui.tIn.value;
  ui.tPrev.style.fontFamily = ui.font.value;
  ui.tPrev.style.fontSize = `${ui.tSize.value}px`;
  ui.tPrev.style.color = ui.tCol.value;
  ui.sPrev.innerText = ui.sIn.value;
  ui.sPrev.style.fontFamily = ui.font.value;
  ui.sPrev.style.fontSize = `${ui.sSize.value}px`;
  ui.sPrev.style.color = ui.sCol.value;
  ui.textBlock.style.textAlign = textAlign;

  // Fix: Gap successfully updating preview grid
  ui.grid.style.gap = `${ui.gap.value}px`;

  // Stage renders at true (unscaled) pixel size, matching the exported canvas exactly.
  ui.stage.style.paddingLeft = `${PADDING}px`;
  ui.stage.style.paddingRight = `${PADDING}px`;
  ui.stage.style.paddingTop = `${PADDING}px`;
  ui.tPrev.parentElement.style.marginBottom = `${PADDING}px`;
  ui.footer.style.marginTop = `${PADDING}px`;

  if (ui.bgType.value === "solid") {
    ui.bg2.classList.add("hidden");
    ui.bg3.classList.add("hidden");
    ui.bgDir.classList.add("hidden");
  } else if (ui.bgType.value === "gradient2") {
    ui.bg2.classList.remove("hidden");
    ui.bg3.classList.add("hidden");
    ui.bgDir.classList.remove("hidden");
  } else {
    ui.bg2.classList.remove("hidden");
    ui.bg3.classList.remove("hidden");
    ui.bgDir.classList.remove("hidden");
  }

  // Base color always sits underneath (visible through transparent pattern gaps,
  // and as the whole background when bgType is "solid").
  ui.stage.style.backgroundColor = ui.bg1.value;

  const layers = getPatternLayers(
    ui.patternType.value,
    ui.patternColor.value,
    ui.patternOpacity.value / 100,
    parseInt(ui.patternSpacing.value) || 24,
    parseFloat(ui.patternSize.value) || 4,
  );
  if (ui.bgType.value === "gradient2") {
    layers.push({
      image: `linear-gradient(${ui.bgDir.value}, ${ui.bg1.value}, ${ui.bg2.value})`,
      size: "100% 100%",
    });
  } else if (ui.bgType.value === "gradient3") {
    layers.push({
      image: `linear-gradient(${ui.bgDir.value}, ${ui.bg1.value}, ${ui.bg2.value}, ${ui.bg3.value})`,
      size: "100% 100%",
    });
  }

  if (layers.length) {
    ui.stage.style.backgroundImage = layers.map((l) => l.image).join(", ");
    ui.stage.style.backgroundSize = layers.map((l) => l.size).join(", ");
    ui.stage.style.backgroundRepeat = "repeat";
  } else {
    ui.stage.style.backgroundImage = "none";
  }

  // Update box roundness live
  document
    .querySelectorAll(".chart-cell")
    .forEach((cell) => (cell.style.borderRadius = `${ui.radius.value}px`));

  updatePreviewLayout();
}

// Measures the stage at its true pixel size, then uniformly scales it to fit the
// visible viewport so every proportion (gap, radius, font) stays exactly as drawn.
function updatePreviewLayout() {
  const cols = parseInt(ui.col.value) || 1;
  const cW = parseInt(ui.w.value) || 300;
  const gap = parseInt(ui.gap.value) || 0;
  const gridWidth = cols * cW + (cols - 1) * gap;

  // The stage's width must come ONLY from the grid dimensions. Without this,
  // a title wider than the grid would stretch the whole box (and every cell
  // with it) to fit the text, silently changing the actual cell size.
  ui.stage.style.width = `${gridWidth + PADDING * 2}px`;

  const trueW = ui.stage.offsetWidth;
  const trueH = ui.stage.offsetHeight;
  const availW = ui.viewport.clientWidth;
  if (!trueW || !availW) return;

  const scaleFactor = Math.min(1, availW / trueW);
  const scaledW = trueW * scaleFactor;
  const scaledH = trueH * scaleFactor;

  ui.stage.style.transformOrigin = "top left";
  ui.stage.style.transform = `scale(${scaleFactor})`;
  ui.stage.style.left = `${(availW - scaledW) / 2}px`;
  ui.viewport.style.height = `${scaledH}px`;
}
window.addEventListener("resize", updatePreviewLayout);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updatePreviewLayout);
}

function applyCellTransform(cellId) {
  const imgEl = document.getElementById(`img-${cellId}`);
  if (!imgEl || !cellSettings[cellId]) return;
  const { zoom, panX, panY } = cellSettings[cellId];
  imgEl.style.objectPosition = `${panX + 50}% ${panY + 50}%`;
  imgEl.style.transform = `scale(${zoom})`;
}

function renderGrid() {
  ui.grid.innerHTML = "";
  const cols = parseInt(ui.col.value) || 1;
  const rows = parseInt(ui.row.value) || 1;
  const cW = parseInt(ui.w.value) || 300;
  const cH = parseInt(ui.h.value) || 300;
  const totalCells = cols * rows;
  // Literal pixel tracks (not fr-based) so gap/radius are always proportioned
  // to the cell size exactly as they will be in the exported image.
  ui.grid.style.gridTemplateColumns = `repeat(${cols}, ${cW}px)`;
  ui.grid.style.gridAutoRows = `${cH}px`;

  for (let i = 0; i < totalCells; i++) {
    const cellId = `cell-${i}`;
    if (!cellSettings[cellId])
      cellSettings[cellId] = { zoom: 1, panX: 0, panY: 0 };

    const cell = document.createElement("div");
    cell.className =
      "chart-cell relative bg-neutral-900/60 border border-neutral-700/50 overflow-hidden flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition group shadow-inner";
    cell.style.width = `${cW}px`;
    cell.style.height = `${cH}px`;
    cell.style.borderRadius = `${ui.radius.value}px`;

    cell.innerHTML = `
                    <div class="text-center p-1 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition duration-150" id="icon-${cellId}">
                        <svg class="mx-auto h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <input type="file" id="${cellId}" class="cell-input" accept="image/*">
                    <img id="img-${cellId}" class="absolute inset-0 w-full h-full object-cover hidden z-0">
                `;

    cell.addEventListener("click", (e) => {
      if (loadedImages[cellId]) {
        e.preventDefault();
        openEditor(cellId);
      } else {
        document.getElementById(cellId).click();
      }
    });

    cell.querySelector("input").addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (event) {
        const fileUrl = event.target.result;
        const imgElement = document.getElementById(`img-${cellId}`);
        imgElement.src = fileUrl;
        imgElement.classList.remove("hidden");
        document.getElementById(`icon-${cellId}`).classList.add("hidden");

        const img = new Image();
        img.src = fileUrl;
        img.onload = () => {
          loadedImages[cellId] = { img, fileUrl };
          cellSettings[cellId] = { zoom: 1, panX: 0, panY: 0 };
          applyCellTransform(cellId);
        };
      };
      reader.readAsDataURL(file);
    });
    ui.grid.appendChild(cell);

    if (loadedImages[cellId]) {
      const imgElement = document.getElementById(`img-${cellId}`);
      imgElement.src = loadedImages[cellId].fileUrl;
      imgElement.classList.remove("hidden");
      cell.querySelector(`#icon-${cellId}`).classList.add("hidden");
      applyCellTransform(cellId);
    }
  }
}

// Modal Editor Logic
function openEditor(cellId) {
  activeEditCell = cellId;
  const settings = cellSettings[cellId];
  mPrevCont.style.aspectRatio = `${ui.w.value} / ${ui.h.value}`;
  mPrevCont.style.height = "180px";
  mImg.src = loadedImages[cellId].fileUrl;

  mZoom.value = settings.zoom;
  mPanX.value = settings.panX;
  mPanY.value = settings.panY;
  updateModalPreview();
  modal.classList.remove("hidden");
}

function updateModalPreview() {
  document.getElementById("lblZoom").innerText =
    parseFloat(mZoom.value).toFixed(2) + "x";
  mImg.style.objectPosition = `${parseFloat(mPanX.value) + 50}% ${parseFloat(mPanY.value) + 50}%`;
  mImg.style.transform = `scale(${mZoom.value})`;
}

[mZoom, mPanX, mPanY].forEach((sl) =>
  sl.addEventListener("input", () => {
    updateModalPreview();
    if (activeEditCell) {
      cellSettings[activeEditCell] = {
        zoom: parseFloat(mZoom.value),
        panX: parseFloat(mPanX.value),
        panY: parseFloat(mPanY.value),
      };
      applyCellTransform(activeEditCell);
    }
  }),
);

document
  .getElementById("modalDoneBtn")
  .addEventListener("click", () => modal.classList.add("hidden"));
document.getElementById("modalRemoveBtn").addEventListener("click", () => {
  delete loadedImages[activeEditCell];
  cellSettings[activeEditCell] = { zoom: 1, panX: 0, panY: 0 };
  const imgEl = document.getElementById(`img-${activeEditCell}`);
  imgEl.src = "";
  imgEl.classList.add("hidden");
  document.getElementById(`icon-${activeEditCell}`).classList.remove("hidden");
  modal.classList.add("hidden");
  document.getElementById(activeEditCell).value = "";
});

document.getElementById("modalChangeBtn").addEventListener("click", () => {
  modal.classList.add("hidden");
  document.getElementById(activeEditCell).click();
});

// Event Triggers
const interactiveControls = [
  ui.tIn,
  ui.tSize,
  ui.tCol,
  ui.sIn,
  ui.sSize,
  ui.sCol,
  ui.bgType,
  ui.bgDir,
  ui.bg1,
  ui.bg2,
  ui.bg3,
  ui.patternType,
  ui.patternColor,
  ui.patternOpacity,
  ui.patternSpacing,
  ui.patternSize,
  ui.font,
  ui.radius,
  ui.gap,
];
interactiveControls.forEach((ctrl) =>
  ctrl.addEventListener("input", updateStyles),
);
interactiveControls.forEach((ctrl) =>
  ctrl.addEventListener("change", updateStyles),
);

const gridTriggers = [ui.col, ui.row, ui.w, ui.h];
gridTriggers.forEach((ctrl) =>
  ctrl.addEventListener("change", () => {
    renderGrid();
    updateStyles();
  }),
);

// Builds the same {image, size} background layers updateStyles() would apply
// to the live stage, so each template's preview card always matches what
// clicking it actually produces.
function buildTemplatePreviewLayers(t) {
  const layers = getPatternLayers(
    t.pattern,
    t.patternColor,
    t.patternOpacity / 100,
    t.patternSpacing,
    t.patternSize,
  );
  if (t.bgType === "gradient2") {
    layers.push({
      image: `linear-gradient(${t.bgDir}, ${t.bg1}, ${t.bg2})`,
      size: "100% 100%",
    });
  } else if (t.bgType === "gradient3") {
    layers.push({
      image: `linear-gradient(${t.bgDir}, ${t.bg1}, ${t.bg2}, ${t.bg3})`,
      size: "100% 100%",
    });
  }
  return layers;
}

function renderTemplateSwatches() {
  document.querySelectorAll(".template-btn").forEach((btn) => {
    const t = templates[btn.dataset.template];
    if (!t) return;
    const swatch = btn.querySelector(".template-swatch");
    const label = btn.querySelector(".template-label");
    if (swatch) {
      swatch.style.backgroundColor = t.bg1;
      const layers = buildTemplatePreviewLayers(t);
      swatch.style.backgroundImage = layers.map((l) => l.image).join(", ");
      swatch.style.backgroundSize = layers.map((l) => l.size).join(", ");
      swatch.style.backgroundRepeat = "repeat";
    }
    if (label) {
      label.style.fontFamily = t.font;
      label.style.color = t.titleColor;
    }
  });
}

function markActiveTemplateButton() {
  document.querySelectorAll(".template-btn").forEach((btn) => {
    const isActive = btn.dataset.template === activeTemplate;
    btn.classList.toggle("border-blue-400", isActive);
    btn.classList.toggle("border-transparent", !isActive);
  });
}

document.querySelectorAll(".template-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.template;
    const t = templates[key];
    if (!t) return;
    activeTemplate = key;
    ui.font.value = t.font;
    ui.tIn.value = i18n[currentLang][t.titleKey];
    ui.sIn.value = i18n[currentLang][t.subKey];
    ui.tSize.value = DEFAULT_TITLE_SIZE;
    ui.sSize.value = DEFAULT_SUBTITLE_SIZE;
    ui.tCol.value = t.titleColor;
    ui.sCol.value = t.subtitleColor;
    ui.bgType.value = t.bgType;
    ui.bg1.value = t.bg1;
    ui.bg2.value = t.bg2;
    ui.bgDir.value = t.bgDir;
    ui.patternType.value = t.pattern;
    ui.patternColor.value = t.patternColor;
    ui.patternOpacity.value = t.patternOpacity;
    ui.patternSpacing.value = t.patternSpacing;
    ui.patternSize.value = t.patternSize;
    if (t.cols) ui.col.value = t.cols;
    if (t.rows) ui.row.value = t.rows;
    if (t.cellWidth) ui.w.value = t.cellWidth;
    if (t.cellHeight) ui.h.value = t.cellHeight;
    renderGrid();
    updateStyles();
    markActiveTemplateButton();
  });
});

function markActiveAlignButton() {
  document.querySelectorAll(".align-btn").forEach((btn) => {
    const isActive = btn.dataset.align === textAlign;
    btn.classList.toggle("bg-blue-600", isActive);
    btn.classList.toggle("bg-gray-700", !isActive);
  });
}

document.querySelectorAll(".align-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    textAlign = btn.dataset.align;
    updateStyles();
    markActiveAlignButton();
  });
});

applyTranslations();
renderGrid();
updateStyles(); // initialize gap on load
renderTemplateSwatches();
markActiveTemplateButton();
markActiveAlignButton();

// Canvas Export Logic
// --- Canvas Export Logic ---

// Greedy word-wrap matching how the (fixed-width) preview box wraps text,
// since canvas fillText never wraps on its own.
function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (current && ctx.measureText(test).width > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// Draws text wrapped to maxWidth, distributing lines evenly across the
// measured DOM box height so it lines up with the live preview exactly.
// `anchorX` is interpreted per ctx.textAlign, which the caller sets beforehand.
function drawWrappedText(ctx, text, anchorX, boxTop, boxHeight, maxWidth) {
  const lines = wrapText(ctx, text, maxWidth);
  const lineHeight = boxHeight / lines.length;
  lines.forEach((line, i) => {
    ctx.fillText(line, anchorX, boxTop + lineHeight * (i + 0.5));
  });
}

// Draws a diamond (rotated square) centered at (cx, cy) onto a canvas context.
function drawDiamond(ctx, cx, cy, r) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.lineTo(cx + r, cy);
  ctx.lineTo(cx, cy + r);
  ctx.lineTo(cx - r, cy);
  ctx.closePath();
  ctx.fill();
}

// Builds one repeatable tile matching the CSS pattern layer for the same type,
// so ctx.createPattern(tile, "repeat") reproduces the live preview exactly.
// `spacing` is the tile period in px; `shapeSize` is the dot radius / line
// thickness, independent of spacing (matches getPatternLayers' params).
function drawPatternTile(type, color, opacity, spacing, shapeSize) {
  const s = spacing;
  const tile = document.createElement("canvas");
  tile.width = s;
  tile.height = s;
  const tctx = tile.getContext("2d");
  const c = hexToRgba(color, opacity);

  if (type === "stripes") {
    tctx.strokeStyle = c;
    tctx.lineWidth = Math.max(1, shapeSize);
    tctx.beginPath();
    tctx.moveTo(-2, s + 2);
    tctx.lineTo(s + 2, -2);
    tctx.moveTo(-2 - s, s + 2);
    tctx.lineTo(2, -2);
    tctx.stroke();
  } else if (type === "dots") {
    tctx.fillStyle = c;
    tctx.beginPath();
    tctx.arc(s / 2, s / 2, Math.max(0.5, shapeSize), 0, Math.PI * 2);
    tctx.fill();
  } else if (type === "grid") {
    tctx.strokeStyle = c;
    tctx.lineWidth = Math.max(1, shapeSize);
    tctx.beginPath();
    tctx.moveTo(0, 0.5);
    tctx.lineTo(s, 0.5);
    tctx.moveTo(0.5, 0);
    tctx.lineTo(0.5, s);
    tctx.stroke();
  } else if (type === "diamond") {
    tctx.fillStyle = c;
    drawDiamond(tctx, s / 2, s / 2, Math.max(1, shapeSize));
  }
  return tile;
}

document.getElementById("exportBtn").addEventListener("click", () => {
  const cols = parseInt(ui.col.value) || 1;
  const rows = parseInt(ui.row.value) || 1;
  const cW = parseInt(ui.w.value) || 300;
  const cH = parseInt(ui.h.value) || 300;
  const gap = parseInt(ui.gap.value) || 0;
  const rds = parseInt(ui.radius.value) || 0;

  // Read the true (unscaled) layout straight from the live preview DOM so the
  // export always matches it exactly, instead of recomputing positions by hand.
  const tW = ui.stage.offsetWidth;
  const tH = ui.stage.offsetHeight;
  const gridLeft = ui.grid.offsetLeft;
  const gridTop = ui.grid.offsetTop;
  const textMaxWidth = ui.grid.offsetWidth;
  const footerCenterY = ui.footer.offsetTop + ui.footer.offsetHeight / 2;

  const canvas = document.getElementById("exportCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = tW;
  canvas.height = tH;

  // 2. Background
  if (ui.bgType.value === "solid") {
    ctx.fillStyle = ui.bg1.value;
    ctx.fillRect(0, 0, tW, tH);
  } else {
    let x0 = 0,
      y0 = 0,
      x1 = 0,
      y1 = 0;
    const dir = ui.bgDir.value;
    if (dir === "to bottom") {
      x1 = 0;
      y1 = tH;
    } else if (dir === "to right") {
      x1 = tW;
      y1 = 0;
    } else if (dir === "135deg") {
      x1 = tW;
      y1 = tH;
    } else {
      x0 = tW;
      y0 = 0;
      x1 = 0;
      y1 = tH;
    }
    const grd = ctx.createLinearGradient(x0, y0, x1, y1);
    grd.addColorStop(0, ui.bg1.value);
    if (ui.bgType.value === "gradient3") {
      grd.addColorStop(0.5, ui.bg2.value);
      grd.addColorStop(1, ui.bg3.value);
    } else {
      grd.addColorStop(1, ui.bg2.value);
    }
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, tW, tH);
  }

  // 2b. Pattern overlay (drawn as a repeating canvas tile so it matches the
  // CSS pattern layer pixel-for-pixel regardless of stage size).
  const patType = ui.patternType.value;
  if (patType !== "none") {
    const tile = drawPatternTile(
      patType,
      ui.patternColor.value,
      ui.patternOpacity.value / 100,
      parseInt(ui.patternSpacing.value) || 24,
      parseFloat(ui.patternSize.value) || 4,
    );
    ctx.fillStyle = ctx.createPattern(tile, "repeat");
    ctx.fillRect(0, 0, tW, tH);
  }

  // 3. Text (positioned at the exact same spot as the live preview)
  ctx.textBaseline = "middle";
  const cleanFontFamily = ui.font.value;
  // Mirrors ui.textBlock's CSS text-align: the anchor x-coordinate is
  // interpreted relative to ctx.textAlign, so all three reduce to picking
  // the right edge of the grid's column to anchor against.
  ctx.textAlign = textAlign;
  const textAnchorX =
    textAlign === "left"
      ? gridLeft
      : textAlign === "right"
        ? gridLeft + textMaxWidth
        : tW / 2;

  ctx.fillStyle = ui.tCol.value;
  ctx.font = `900 ${ui.tSize.value}px ${cleanFontFamily}`;
  drawWrappedText(
    ctx,
    ui.tIn.value,
    textAnchorX,
    ui.tPrev.offsetTop,
    ui.tPrev.offsetHeight,
    textMaxWidth,
  );

  ctx.fillStyle = ui.sCol.value;
  ctx.font = `${ui.sSize.value}px ${cleanFontFamily}`;
  drawWrappedText(
    ctx,
    ui.sIn.value,
    textAnchorX,
    ui.sPrev.offsetTop,
    ui.sPrev.offsetHeight,
    textMaxWidth,
  );

  // 4. Grid
  const targetRatio = cW / cH;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cellId = `cell-${r * cols + c}`;
      const x = gridLeft + c * (cW + gap);
      const y = gridTop + r * (cH + gap);

      ctx.save();
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, cW, cH, rds);
      else ctx.rect(x, y, cW, cH);
      ctx.fillStyle = "rgba(23, 23, 23, 0.6)"; // matches bg-neutral-900/60
      ctx.fill();
      ctx.strokeStyle = "rgba(64, 64, 64, 0.5)"; // matches border-neutral-700/50
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.clip();

      if (loadedImages[cellId]) {
        const img = loadedImages[cellId].img;
        const st = cellSettings[cellId];

        let sw, sh;
        if (img.width / img.height > targetRatio) {
          sh = img.height;
          sw = img.height * targetRatio;
        } else {
          sw = img.width;
          sh = img.width / targetRatio;
        }

        sw = sw / st.zoom;
        sh = sh / st.zoom;

        let maxSx = img.width - sw;
        let maxSy = img.height - sh;
        let posX = (st.panX + 50) / 100;
        let posY = (st.panY + 50) / 100;
        let sx = maxSx * posX;
        let sy = maxSy * posY;

        ctx.drawImage(img, sx, sy, sw, sh, x, y, cW, cH);
      }
      ctx.restore();
    }
  }

  // 5. Footer Watermark (matches text-white + mix-blend-difference: white text
  // differenced against the backdrop auto-inverts to white-on-dark / near-black-on-light).
  ctx.filter = "none";
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "difference";
  ctx.fillStyle = "#ffffff";
  ctx.font = `20px monospace`;
  ctx.textAlign = "center";
  ctx.fillText("CHARTMAKER.SITE", tW / 2, footerCenterY);
  ctx.globalCompositeOperation = "source-over";

  const a = document.createElement("a");
  a.download = `custom-chart-${Date.now()}.png`;
  a.href = canvas.toDataURL("image/png");
  a.click();
});
