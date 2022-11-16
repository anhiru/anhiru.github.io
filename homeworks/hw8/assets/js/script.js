function toggleSongs() {
  songsSecondHalf = document.getElementById("songs-second-half");
  songsSecondHalf.classList.toggle("hidden");
}

function toggleText() {
  toggleButton = document.getElementById("toggle-button");
  if (toggleButton.innerHTML === "Show 3 songs") {
    toggleButton.innerHTML = "Hide 3 songs";
  } else {
    toggleButton.innerHTML = "Show 3 songs";
  }
}

function handleButtonOnClick() {
  toggleSongs();
  toggleText();
}

document.getElementById("toggle-button").onclick = handleButtonOnClick;
