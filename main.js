const headerBtn = document.getElementById("header-btn");
const navbar = document.getElementById("navbars");

headerBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  headerBtn.classList.toggle("close-btn");
});
