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

/*..................IMAGES.................*/
const mainImage = document.querySelector("#main-image");
const smallImage = document.querySelectorAll(".small-image");

smallImage[0].onclick = function () {
  mainImage.src = smallImage[0].src;
};

smallImage[1].onclick = function () {
  mainImage.src = smallImage[1].src;
};

smallImage[2].onclick = function () {
  mainImage.src = smallImage[2].src;
};
