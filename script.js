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
    brightLabel: "Brightness",
    opacLabel: "Opacity",
    mainTitleLabel: "Main Title",
    subTitleLabel: "Subtitle",
    bgTypeLabel: "Background Type",
    bgSolid: "Solid",
    bgGrad2: "2-Color Gradient",
    bgGrad3: "3-Color Gradient",
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
    brightLabel: "밝기",
    opacLabel: "투명도",
    mainTitleLabel: "메인 타이틀",
    subTitleLabel: "서브타이틀",
    bgTypeLabel: "배경 유형",
    bgSolid: "단색",
    bgGrad2: "2색 그라데이션",
    bgGrad3: "3색 그라데이션",
    exportBtn: "이미지 저장 (PNG)",
    defaultTitle: "캐릭터 취향 모음표",
    defaultSub: "@ 본인 취향인 캐릭터를 채우면 되는 표 @",
  },
};

let currentLang = navigator.language.startsWith("ko") ? "ko" : "en";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang][key]) el.innerText = i18n[currentLang][key];
  });
  if (
    document.getElementById("titleInput").value ===
    i18n[currentLang === "en" ? "ko" : "en"].defaultTitle
  ) {
    document.getElementById("titleInput").value =
      i18n[currentLang].defaultTitle;
  }
  if (
    document.getElementById("subtitleInput").value ===
    i18n[currentLang === "en" ? "ko" : "en"].defaultSub
  ) {
    document.getElementById("subtitleInput").value =
      i18n[currentLang].defaultSub;
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
  bright: document.getElementById("imgBrightness"),
  opac: document.getElementById("imgOpacity"),
  bgType: document.getElementById("bgType"),
  bgDir: document.getElementById("gradDirection"),
  bg1: document.getElementById("bgColor1"),
  bg2: document.getElementById("bgColor2"),
  bg3: document.getElementById("bgColor3"),
  grid: document.getElementById("chartGrid"),
  preview: document.getElementById("livePreviewContainer"),
  tPrev: document.getElementById("titlePreview"),
  sPrev: document.getElementById("subtitlePreview"),
};

const modal = document.getElementById("imageModal");
const mPrevCont = document.getElementById("modalPreviewContainer");
const mImg = document.getElementById("modalPreviewImg");
const mZoom = document.getElementById("modalZoom");
const mPanX = document.getElementById("modalPanX");
const mPanY = document.getElementById("modalPanY");

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

  ui.grid.style.setProperty("--img-bright", ui.bright.value / 100);
  ui.grid.style.setProperty("--img-opac", ui.opac.value / 100);

  // Fix: Gap successfully updating preview grid
  ui.grid.style.gap = `${ui.gap.value}px`;

  if (ui.bgType.value === "solid") {
    ui.bg2.classList.add("hidden");
    ui.bg3.classList.add("hidden");
    ui.bgDir.classList.add("hidden");
    ui.preview.style.background = ui.bg1.value;
  } else if (ui.bgType.value === "gradient2") {
    ui.bg2.classList.remove("hidden");
    ui.bg3.classList.add("hidden");
    ui.bgDir.classList.remove("hidden");
    ui.preview.style.background = `linear-gradient(${ui.bgDir.value}, ${ui.bg1.value}, ${ui.bg2.value})`;
  } else {
    ui.bg2.classList.remove("hidden");
    ui.bg3.classList.remove("hidden");
    ui.bgDir.classList.remove("hidden");
    ui.preview.style.background = `linear-gradient(${ui.bgDir.value}, ${ui.bg1.value}, ${ui.bg2.value}, ${ui.bg3.value})`;
  }

  // Update box roundness live
  document
    .querySelectorAll(".chart-cell")
    .forEach((cell) => (cell.style.borderRadius = `${ui.radius.value}px`));
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
  const totalCells =
    (parseInt(ui.col.value) || 1) * (parseInt(ui.row.value) || 1);
  ui.grid.style.gridTemplateColumns = `repeat(${ui.col.value}, minmax(0, 1fr))`;

  for (let i = 0; i < totalCells; i++) {
    const cellId = `cell-${i}`;
    if (!cellSettings[cellId])
      cellSettings[cellId] = { zoom: 1, panX: 0, panY: 0 };

    const cell = document.createElement("div");
    cell.className =
      "chart-cell relative bg-neutral-900/60 border border-neutral-700/50 overflow-hidden flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition group shadow-inner";
    cell.style.aspectRatio = `${ui.w.value} / ${ui.h.value}`;
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
  ui.bright,
  ui.opac,
  ui.bgType,
  ui.bgDir,
  ui.bg1,
  ui.bg2,
  ui.bg3,
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

applyTranslations();
renderGrid();
updateStyles(); // initialize gap on load

// Canvas Export Logic
// --- Canvas Export Logic ---
document.getElementById("exportBtn").addEventListener("click", () => {
  const cols = parseInt(ui.col.value) || 1;
  const rows = parseInt(ui.row.value) || 1;
  const cW = parseInt(ui.w.value) || 300;
  const cH = parseInt(ui.h.value) || 300;
  const gap = parseInt(ui.gap.value) || 0;
  const rds = parseInt(ui.radius.value) || 0;

  const padding = 30;

  // 1. Calculate Grid Width and Dynamic Scale
  const tW = cols * cW + (cols - 1) * gap + padding * 2;

  // Base width is roughly 1000px (3 columns). We scale text up if the chart is wider than that.
  const scale = Math.max(1, tW / 1000);

  // Scale header and footer heights so text has room
  const headerHeight = 160 * scale;
  const footerHeight = 60 * scale;
  const tH =
    headerHeight + rows * cH + (rows - 1) * gap + padding * 2 + footerHeight;

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

  // 3. Text (Dynamically Scaled)
  ctx.textAlign = "center";
  const cleanFontFamily = ui.font.value;

  ctx.fillStyle = ui.tCol.value;
  // Multiply font size by the dynamic scale
  const finalTitleSize = parseInt(ui.tSize.value) * 1.3 * scale;
  ctx.font = `900 ${finalTitleSize}px ${cleanFontFamily}`;
  ctx.fillText(ui.tIn.value, tW / 2, 75 * scale); // Scale Y position

  ctx.fillStyle = ui.sCol.value;
  const finalSubSize = parseInt(ui.sSize.value) * 1.3 * scale;
  ctx.font = `bold ${finalSubSize}px ${cleanFontFamily}`;
  ctx.fillText(ui.sIn.value, tW / 2, 125 * scale); // Scale Y position

  // 4. Grid
  const brightVal = ui.bright.value / 100;
  const opacVal = ui.opac.value / 100;
  const targetRatio = cW / cH;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cellId = `cell-${r * cols + c}`;
      const x = padding + c * (cW + gap);
      const y = headerHeight + padding + r * (cH + gap);

      ctx.save();
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, cW, cH, rds);
      else ctx.rect(x, y, cW, cH);
      ctx.fillStyle = "rgba(23, 23, 23, 0.4)";
      ctx.fill();
      ctx.clip();

      if (loadedImages[cellId]) {
        const img = loadedImages[cellId].img;
        const st = cellSettings[cellId];

        ctx.globalAlpha = opacVal;
        ctx.filter = `brightness(${brightVal})`;

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

  // 5. Footer Watermark (Dynamically Scaled)
  ctx.filter = "none";
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = ui.tCol.value;
  ctx.font = `bold ${14 * scale}px monospace`;
  ctx.fillText("CHARTMAKER.SITE", tW / 2, tH - 25 * scale);

  const a = document.createElement("a");
  a.download = `custom-chart-${Date.now()}.png`;
  a.href = canvas.toDataURL("image/png");
  a.click();
});
