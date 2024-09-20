// Placeholder text array
const placeholders = [
  "Start typing...",
  "Enter your name...",
  "What can we help you with?",
  "Search for something...",
  "How can we assist?",
];

let index = 0;
let letterIndex = 0;
let currentText = "";
let isFocused = false;
const inputElement = document.getElementById("hero-search__input");
const typingSpeed = 100; // Speed of typing effect in milliseconds
const intervalTime = 3000; // Time between different placeholders

// Function to simulate typing effect
function typePlaceholder() {
  if (!isFocused) {
    // Only animate if the input is not focused
    currentText = placeholders[index].substring(0, letterIndex);
    inputElement.setAttribute("placeholder", currentText);
    letterIndex++;

    // If we finished typing the current placeholder
    if (letterIndex > placeholders[index].length) {
      letterIndex = 0; // Reset letter index
      index = (index + 1) % placeholders.length; // Move to next placeholder
      setTimeout(() => typePlaceholder(), intervalTime); // Wait before changing placeholder
    } else {
      setTimeout(() => typePlaceholder(), typingSpeed); // Continue typing letter by letter
    }
  }
}

// Detect focus and blur events to stop or resume animation
inputElement.addEventListener("focus", () => {
  isFocused = true;
  inputElement.setAttribute("placeholder", ""); // Clear placeholder when focused
});

inputElement.addEventListener("blur", () => {
  isFocused = false;
  letterIndex = 0; // Reset the letter index
  typePlaceholder(); // Start typing animation when the input is not focused
});

// Start typing animation when the page loads
typePlaceholder();
