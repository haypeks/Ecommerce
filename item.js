const mainImage = document.querySelector("#main-image");
const smallImage = document.querySelectorAll(".small-image");
console.log(smallImage);

smallImage[0].onclick = function () {
  mainImage.src = smallImage[0].src;
};

smallImage[1].onclick = function () {
  mainImage.src = smallImage[1].src;
};

smallImage[2].onclick = function () {
  mainImage.src = smallImage[2].src;
};

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
