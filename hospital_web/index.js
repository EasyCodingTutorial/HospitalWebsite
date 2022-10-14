let Menu = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

Menu.onclick = () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
  ThemeToggle.classList.remove("active");
};

window.onscroll = () => {
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// Theme Toggle
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});
