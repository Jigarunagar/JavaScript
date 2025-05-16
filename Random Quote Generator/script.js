const object = [];

const Text = document.getElementById("quote");
const Author = document.getElementById("author");
const btn = document.getElementById("nextcolor");

const get = () => {
  const randomIndex = Math.floor(Math.random() * object.length);
  return object[randomIndex];
};

const Background = () => {
  const colors = ["#f39c12", "#8e44ad", "#16a085", "#2c3e50", "#c0392b"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
};

const display = () => {
  const quote = get();
  Text.textContent = `"${quote.text}"`;
  Author.textContent = `- ${quote.author}`;
  Background();
};

btn.addEventListener("click", display);

display();
