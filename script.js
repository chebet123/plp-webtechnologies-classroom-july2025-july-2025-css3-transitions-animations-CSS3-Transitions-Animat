/* Part 2: Functions & Scope */

// Global variable
let clickCount = 0;

// Function with parameter & return value
function changeBoxColor(color) {
  const box = document.getElementById("animateBox");
  box.style.background = color;
  return `Box color changed to ${color}`;
}

// Function demonstrating local scope
function incrementClickCount() {
  let message = ""; // local variable
  clickCount++;
  message = `Button clicked ${clickCount} times`;
  return message;
}

/* Part 3: CSS + JS Combined */

// Animate box on button click
document.getElementById("colorBtn").addEventListener("click", () => {
  const colors = ["red", "green", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  console.log(changeBoxColor(randomColor)); // demonstrates return value

  const box = document.getElementById("animateBox");
  box.classList.toggle("bounce");

  console.log(incrementClickCount());
});

// Modal functionality
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
