const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval = null;

function changeColor() {
  const color = randomIntegerFromInterval(0, colors.length);
  refs.body.style.backgroundColor = colors[color];
}

function startСhange() {
  refs.start.disabled = true;
  interval = setInterval(changeColor, 1000);
}

function stopСhange() {
  refs.start.disabled = false;
  clearInterval(interval);
}

refs.start.addEventListener("click", startСhange);
refs.stop.addEventListener("click", stopСhange);
