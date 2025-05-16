const object = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

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
