const previewImages = document.getElementById("images-of-projects");
const slide1 = 'url("/assets/images/websiteScreenshot.png")';
const slide2 = 'url("/assets/images/screenshotNatureSite.png")';
const slide3 = 'url("/assets/images/screenshotKoala.png")';
console.log(previewImages);

const likeButton = document.getElementById("like");

const dislikeButton = document.getElementById("dislike");

previewImages.style.backgroundImage = slide1;

previewImages.addEventListener("click", function () {
  console.log(slide1);
  console.log(previewImages.style.backgroundImage);
  if (previewImages.style.backgroundImage == slide1) {
    console.log("B");
    previewImages.style.backgroundImage = slide2;
  } else if (previewImages.style.backgroundImage == slide2) {
    previewImages.style.backgroundImage = slide3;
  } else if (previewImages.style.backgroundImage == slide3) {
    previewImages.style.backgroundImage = slide1;
  } else {
    previewImages.backgroundImage = slide1;
  }
});
