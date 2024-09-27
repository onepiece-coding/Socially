/* HTML Elements */

const toggleNavabrBtnEl = document.querySelector(".toggle-navabr-btn");
const headerNavbarEl = document.querySelector(".header--navbar");

/* Toggle Navbar */

toggleNavabrBtnEl.addEventListener("click", () => {
  headerNavbarEl.classList.toggle("active");
});
