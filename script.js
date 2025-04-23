// Toggle Light/Dark Theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const notepad = document.querySelector('.notepad');
  notepad.classList.toggle('dark-theme');
}

// Simulate typing animation
const note = document.getElementById("note");
const placeholderText = "Start typing..."; // Placeholder text to simulate typing

// Function to simulate smooth typing effect
function typeText() {
  let index = 0;
  note.value = '';  // Clear the textarea
  note.classList.add('typing');  // Add typing class to trigger animation

  const interval = setInterval(() => {
    note.value += placeholderText[index];
    index++;

    if (index === placeholderText.length) {
      clearInterval(interval);  // Stop typing when all text is added
      note.classList.remove('typing');  // Remove typing class
    }
  }, 100);  // Delay between each character (adjust speed here)
}

// Automatically start typing effect
typeText();

// Reset typing effect on user input
note.addEventListener('focus', () => {
  note.classList.remove('typing');  // Remove typing effect on focus
});

// Remove typing animation on input
note.addEventListener('input', () => {
  if (note.classList.contains('typing')) {
    note.classList.remove('typing');
  }
});

// Update the title when the user finishes editing
function updateTitle() {
  const title = document.querySelector('.app-name');
  title.innerHTML = title.innerHTML.trim() || "Notes"; // Reset title if empty
}
