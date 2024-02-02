const primaryHeader = document.querySelector(".primary-header");
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".toggle-menu");

navToggle.addEventListener("click", () => {
  navbar.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  navbar.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
