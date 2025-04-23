// Toggle Light/Dark Theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const notepad = document.querySelector('.notepad');
  notepad.classList.toggle('dark-theme');
}

// Update the title when the user finishes editing
function updateTitle() {
  const title = document.querySelector('.app-name');
  title.innerHTML = title.innerHTML.trim() || "Notes"; // Reset title if empty
}
