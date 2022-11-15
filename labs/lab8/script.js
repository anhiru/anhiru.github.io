function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

buttonDarkMode = document.getElementById("toggleButton");
buttonDarkMode.onclick = toggleTheme;
