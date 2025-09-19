/* 
  ВАЖНО: Это учебный файл. Здесь НЕТ готовой логики.
  Твоя задача — реализовать описанные шаги в TODO.
  Можешь писать код прямо под каждым TODO.
*/

"use strict";

/* ===== БАЗОВЫЕ ССЫЛКИ НА ЭЛЕМЕНТЫ (сделай селекты сам) =====
   Рекомендуется:
   - const root = document.documentElement;
   - const playground = document.getElementById('playground');
   - const text = document.getElementById('text');
   - Кнопки: getElementById(...) / querySelector(...)
*/

// TODO[SELECT]: выбери корневой <html> и сохрани в root
// TODO[SELECT]: выбери #playground и #text
// TODO[SELECT]: выбери все нужные кнопки по id / классу
//   #btn-theme, #btn-open-modal, #btn-close-modal, #btn-understood, #btn-reset-all
//   #btn-font-dec, #btn-font-inc, #btn-font-reset
//   .btn-font-family[data-font], .btn-letter[data-ls], #btn-toggle-highlight
//   #btn-bg-random, .btn-accent[data-accent]
//   список: #todo, #btn-add-item, #btn-remove-selected, #btn-duplicate-selected, #btn-move-up, #btn-move-down

/* ===== ТЕМА САЙТА ===== */
// TODO[THEME 1]: по клику на #btn-theme — переключай атрибут data-theme у <html> между '' и 'dark'
// Подсказка: root.toggleAttribute / root.getAttribute / setA

/* ===== БАЗОВЫЕ ССЫЛКИ НА ЭЛЕМЕНТЫ ===== */
const root = document.documentElement;
const playground = document.getElementById("playground");
const text = document.getElementById("text");

const modal = document.getElementById("modal");
const themeBtn = document.getElementById("btn-theme");
const modalOpenBtn = document.getElementById("btn-open-modal");
const modalCloseBtn = document.getElementById("btn-close-modal");
const modalResumeBtn = document.getElementById("btn-understood");

const fontIncrBtn = document.getElementById("btn-font-inc");
const fontDecrBtn = document.getElementById("btn-font-dec");
const fontResetBtn = document.getElementById("btn-font-reset");

const highlightBtn = document.getElementById("btn-toggle-highlight");
const fontButtons = document.querySelectorAll(".btn-font-family");
const letterButtons = document.querySelectorAll(".btn-letter");
const accentBtn = document.querySelectorAll(".btn-accent");
const randomBtn = document.getElementById("btn-bg-random");

const listAddBtn = document.getElementById("btn-add-item");
const list = document.getElementById("todo");
const deleteBtn = document.getElementById("btn-remove-selected");
const copyBtn = document.getElementById("btn-duplicate-selected");
const upBtn = document.getElementById("btn-move-up");
const dwnBtn = document.getElementById("btn-move-down");

/* ===== МОДАЛКА ===== */
modalOpenBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalResumeBtn.addEventListener("click", () => {
  alert("Чего кликаешь?");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    modal.classList.remove("open");
  }
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});

/* ===== РАЗМЕР ШРИФТА ===== */
const defaultFontSize = parseInt(window.getComputedStyle(text).fontSize);
let currFontSize = defaultFontSize;

fontIncrBtn.addEventListener("click", () => {
  currFontSize++;
  text.style.fontSize = currFontSize + "px";
  console.log("New:", currFontSize);
});

fontDecrBtn.addEventListener("click", () => {
  currFontSize--;
  text.style.fontSize = currFontSize + "px";
  console.log("New:", currFontSize);
});

fontResetBtn.addEventListener("click", () => {
  text.style.fontSize = defaultFontSize + "px";
  currFontSize = defaultFontSize;
  console.log("New:", defaultFontSize);
});

/* ===== ПОДСВЕТКА ===== */
highlightBtn.addEventListener("click", () => {
  playground.classList.toggle("highlight");
});

/* ===== СЕМЕЙСТВА ШРИФТОВ ===== */
fontButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const font = btn.dataset.font;

    if (font === "system") {
      text.style.fontFamily =
        "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";
    } else if (font === "serif") {
      text.style.fontFamily = "Georgia, serif";
    } else if (font === "mono") {
      text.style.fontFamily = "ui-monospace, Menlo, Consolas, monospace";
    }
  });
});

/* ===== LETTER SPACING ===== */
let currLS = 0;

letterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const ls = Number(btn.dataset.ls);

    if (ls === 0) {
      currLS = 0;
      text.style.letterSpacing = currLS + "em";
    } else {
      currLS += 0.02;
    }
    text.style.letterSpacing = currLS + "em";
    console.log("Letter-spacing:", currLS);
  });
});

/* ===== АКЦЕНТ ===== */
accentBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let accent = btn.dataset.accent;
    if (accent === "primary") {
      text.style.backgroundColor = "#06b6d4";
    } else if (accent === "violet") {
      text.style.backgroundColor = "#7c3aed";
    }
  });
});

/* ===== СЛУЧАЙНЫЙ ФОН ===== */
function randomColor() {
  const n = Math.floor(Math.random() * 16777216);
  const hex = "#" + n.toString(16).padStart(6, "0");
  playground.style.backgroundColor = hex;
  console.log("Random color:", hex);
}
randomBtn.addEventListener("click", randomColor);

/* ===== ТЕМА САЙТА ===== */
themeBtn.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", "dark");
  }
});

/* ===== TODO: ДОБАВЛЕНИЕ ===== */
function addEl() {
  let li = document.createElement("li");
  li.className = "todo-item";
  list.appendChild(li);

  li.innerHTML = `
  <label>
    <input type="checkbox" class="pick" />
    Новая задача
  </label>
`;
}
listAddBtn.addEventListener("click", function () {
  addEl();
});

/* ===== TODO: УДАЛЕНИЕ ===== */
function deleteEl() {
  const checked = document.querySelectorAll(".pick:checked");
  checked.forEach((cb) => {
    const li = cb.closest(".todo-item");
    if (li) li.remove();
  });
}
deleteBtn.addEventListener("click", deleteEl);

/* ===== TODO: ДУБЛИРОВАНИЕ ===== */
function dupleEl() {
  const checked = document.querySelectorAll(".pick:checked");
  checked.forEach((cb) => {
    const li = cb.closest(".todo-item");
    const clone = li.cloneNode(true); // true = копировать вместе с потомками
    list.appendChild(clone);
  });
}
copyBtn.addEventListener("click", dupleEl);

/* ===== TODO: ВВЕРХ ===== */
function elUp() {
  const checked = document.querySelectorAll(".pick:checked");
  checked.forEach((cb) => {
    const li = cb.closest(".todo-item");
    const prev = li.previousElementSibling;
    if (prev) {
      list.insertBefore(li, prev);
    }
  });
}
upBtn.addEventListener("click", elUp);

/* ===== TODO: ВНИЗ ===== */
function elDwn() {
  const checked = document.querySelectorAll(".pick:checked");
  checked.forEach((cb) => {
    const li = cb.closest(".todo-item");
    const past = li.nextElementSibling;
    if (past) {
      list.insertBefore(past, li);
    }
  });
}
dwnBtn.addEventListener("click", elDwn);