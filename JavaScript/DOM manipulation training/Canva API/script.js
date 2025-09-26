// Базовая работа с Canvas API по уроку

// Получаем элемент canvas и задаём размеры программно
const canvas = document.getElementById("my-canvas");
canvas.width = 400;
canvas.height = 400;

// Получаем 2D-контекст для рисования
const ctx = canvas.getContext("2d");

// Посмотреть доступные методы/свойства контекста в консоли
console.log(ctx);

// Задаём цвет заливки и рисуем прямоугольник
ctx.fillStyle = "crimson";
// x, y, width, height
ctx.fillRect(1, 1, 150, 100);

// Пример отрисовки текста на другой канве
const textCanvas = document.getElementById("my-text-canvas");
const textCanvasCtx = textCanvas.getContext("2d");

// Задаём шрифт и цвет текста
textCanvasCtx.font = "30px Arial";
textCanvasCtx.fillStyle = "crimson";

// Рисуем текст: строка, x, y
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);

