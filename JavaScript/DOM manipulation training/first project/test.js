// test.js
// Здесь будут размещены тесты для проверки функциональности проекта

const { JSDOM } = require("jsdom");
const assert = require("assert");

// Создаем виртуальный DOM для тестов
const html = `<!doctype html>${require("fs").readFileSync("index.html", "utf8")}`;
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
const { window } = dom;
const { document } = window;

describe("DOM Manipulation Tests", () => {
  it("should toggle theme attribute on root element", () => {
    const root = document.documentElement;
    const themeBtn = document.getElementById("btn-theme");

    themeBtn.click();
    assert.strictEqual(root.getAttribute("data-theme"), "dark");

    themeBtn.click();
    assert.strictEqual(root.getAttribute("data-theme"), null);
  });

  it("should increase font size of text", () => {
    const text = document.getElementById("text");
    const fontIncrBtn = document.getElementById("btn-font-inc");

    const initialFontSize = parseInt(window.getComputedStyle(text).fontSize);
    fontIncrBtn.click();
    const newFontSize = parseInt(window.getComputedStyle(text).fontSize);

    assert.strictEqual(newFontSize, initialFontSize + 1);
  });

  it("should add a new TODO item", () => {
    const list = document.getElementById("todo");
    const listAddBtn = document.getElementById("btn-add-item");

    const initialLength = list.children.length;
    listAddBtn.click();
    const newLength = list.children.length;

    assert.strictEqual(newLength, initialLength + 1);
  });
});