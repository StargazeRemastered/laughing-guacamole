// Update the title when the user finishes editing
function updateTitle() {
  const title = document.querySelector('.app-name');
  title.innerHTML = title.innerHTML.trim() || "Notes"; // Reset title if empty
}
