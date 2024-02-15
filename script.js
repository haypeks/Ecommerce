/*..................NAVBAR..................*/
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

/*..................SIZES.................*/
const size = document.querySelectorAll(".category");

size.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    size.forEach((sizebtn) => {
      sizebtn.classList.remove("selected");
    });
    e.target.classList.add("selected");
  });
});

/*..................fav icon.................*/
let isFirstImage = true;
const favIcon = document.querySelectorAll(".fav-icon");
console.log(favIcon);

for (let i = 0; i < favIcon.length; i++) {
  favIcon[i].addEventListener("click", () => {
    console.log("button was clicked");
    if (isFirstImage) {
      favIcon[i].src = `image/full-favicon.svg`;
    } else {
      favIcon[i].src = `image/fav-icon.svg`;
    }
    isFirstImage = !isFirstImage;
  });
}
