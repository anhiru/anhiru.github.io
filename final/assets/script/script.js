function handleClick() {
  alert("RESPONSIBILITY!!!");
}

function toggleTheme() {
  let topNav = document.getElementById("topnav");
  let sideNav = document.getElementById("sidenav");
  let main = document.querySelector("main");
  topNav.classList.toggle("darkmode");
  sideNav.classList.toggle("darkmode");
  main.classList.toggle("darkmode");
  // document.
  document.body.classList.toggle("darkmode");
}

buttonDarkMode = document.getElementById("darkmode-toggle");
buttonDarkMode.onclick = toggleTheme;
