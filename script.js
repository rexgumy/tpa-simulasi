// ============================================================
// STATE
// ============================================================
const TOTAL_SECONDS = 60 * 60; // 60 menit
const GAUGE_CIRCUMFERENCE = 326.7; // 2 * PI * r(52)

let currentIndex = 0;
let answers = new Array(QUESTIONS.length).fill(null); // null = belum dijawab, else = index opsi
let secondsLeft = TOTAL_SECONDS;
let timerInterval = null;

// ============================================================
// ELEMENTS
// ============================================================
const screenLanding = document.getElementById("screen-landing");
const screenExam = document.getElementById("screen-exam");
const screenResult = document.getElementById("screen-result");

const btnStart = document.getElementById("btn-start");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnSubmit = document.getElementById("btn-submit");
const btnNavigator = document.getElementById("btn-navigator");
const btnCloseNav = document.getElementById("btn-close-nav");
const btnRestart = document.getElementById("btn-restart");

const subtestTag = document.getElementById("subtest-tag");
const questionNum = document.getElementById("question-num");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const progressLabel = document.getElementById("progress-label");
const footerStatus = document.getElementById("footer-status");
const timeReadout = document.getElementById("time-readout");
const gaugeFill = document.getElementById("gauge-fill");
const navigatorModal = document.getElementById("navigator-modal");
const navGrid = document.getElementById("nav-grid");

// ============================================================
// NAVIGATION BETWEEN SCREENS
// ============================================================
function showScreen(el) {
  [screenLanding, screenExam, screenResult].forEach(s => s.classList.remove("active"));
  el.classList.add("active");
}

btnStart.addEventListener("click", () => {
  showScreen(screenExam);
  startTimer();
  renderQuestion();
  buildNavGrid();
});

btnRestart.addEventListener("click", () => {
  currentIndex = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  secondsLeft = TOTAL_SECONDS;
  clearInterval(timerInterval);
  showScreen(screenLanding);
});

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  timeReadout.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

  const ratio = secondsLeft / TOTAL_SECONDS;
  const offset = GAUGE_CIRCUMFERENCE * (1 - ratio);
  gaugeFill.style.strokeDashoffset = offset;

  if (ratio < 0.1) {
    gaugeFill.style.stroke = "var(--red)";
  } else if (ratio < 0.3) {
    gaugeFill.style.stroke = "#E8862F";
  }
}

// ============================================================
// RENDER QUESTION
// ============================================================
function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  subtestTag.textContent = q.subtest;
  questionNum.textContent = `Soal #${currentIndex + 1}`;
  questionText.textContent = q.question;
  progressLabel.textContent = `📋 Soal ${answeredCount()}/${QUESTIONS.length}`;

  optionsList.innerHTML = "";
  const letters = ["A", "B", "C", "D", "E"];
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (answers[currentIndex] === i ? " selected" : "");
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => selectAnswer(i));
    optionsList.appendChild(btn);
  });

  footerStatus.textContent = `${currentIndex + 1} / ${QUESTIONS.length}`;
  btnPrev.disabled = currentIndex === 0;
  btnNext.textContent = currentIndex === QUESTIONS.length - 1 ? "Selesai →" : "Selanjutnya →";

  updateNavGrid();
}

function selectAnswer(optionIndex) {
  answers[currentIndex] = optionIndex;
  renderQuestion();
}

function answeredCount() {
  return answers.filter(a => a !== null).length;
}

// ============================================================
// PREV / NEXT
// ============================================================
btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

btnNext.addEventListener("click", () => {
  if (currentIndex < QUESTIONS.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    confirmSubmit();
  }
});

// ============================================================
// SUBMIT
// ============================================================
btnSubmit.addEventListener("click", confirmSubmit);

function confirmSubmit() {
  const unanswered = QUESTIONS.length - answeredCount();
  const msg = unanswered > 0
    ? `Masih ada ${unanswered} soal yang belum dijawab. Yakin ingin submit ujian sekarang?`
    : `Semua soal sudah dijawab. Submit ujian sekarang?`;
  if (window.confirm(msg)) {
    finishExam();
  }
}

function finishExam() {
  clearInterval(timerInterval);
  showResult();
  showScreen(screenResult);
}

// ============================================================
// NAVIGATOR MODAL
// ============================================================
btnNavigator.addEventListener("click", () => {
  navigatorModal.classList.add("open");
});
btnCloseNav.addEventListener("click", () => {
  navigatorModal.classList.remove("open");
});
navigatorModal.addEventListener("click", (e) => {
  if (e.target === navigatorModal) navigatorModal.classList.remove("open");
});

function buildNavGrid() {
  navGrid.innerHTML = "";
  QUESTIONS.forEach((q, i) => {
    const btn = document.createElement("button");
    btn.className = "nav-grid__btn";
    btn.textContent = i + 1;
    btn.addEventListener("click", () => {
      currentIndex = i;
      renderQuestion();
      navigatorModal.classList.remove("open");
    });
    navGrid.appendChild(btn);
  });
  updateNavGrid();
}

function updateNavGrid() {
  const btns = navGrid.querySelectorAll(".nav-grid__btn");
  btns.forEach((btn, i) => {
    btn.classList.remove("answered", "current");
    if (i === currentIndex) {
      btn.classList.add("current");
    } else if (answers[i] !== null) {
      btn.classList.add("answered");
    }
  });
}

// ============================================================
// RESULT
// ============================================================
function showResult() {
  let correct = 0;
  const subtestStats = {};
  SUBTEST_ORDER.forEach(s => subtestStats[s] = { correct: 0, total: 0 });

  QUESTIONS.forEach((q, i) => {
    subtestStats[q.subtest].total++;
    if (answers[i] !== null && answers[i] === q.answer) {
      correct++;
      subtestStats[q.subtest].correct++;
    }
  });

  const percent = Math.round((correct / QUESTIONS.length) * 100);
  document.getElementById("result-percent").textContent = `${percent}%`;
  document.getElementById("result-detail").textContent = `${correct} dari ${QUESTIONS.length} soal benar`;

  const breakdownEl = document.getElementById("result-breakdown");
  breakdownEl.innerHTML = "";
  SUBTEST_ORDER.forEach(s => {
    const stat = subtestStats[s];
    const pct = stat.total ? Math.round((stat.correct / stat.total) * 100) : 0;
    const row = document.createElement("div");
    row.className = "breakdown-row";
    row.innerHTML = `
      <div class="breakdown-row__top">
        <span class="breakdown-row__label">${s}</span>
        <span class="breakdown-row__score">${stat.correct}/${stat.total}</span>
      </div>
      <div class="breakdown-track"><div class="breakdown-fill" style="width:${pct}%"></div></div>
    `;
    breakdownEl.appendChild(row);
  });
}
