// image variables
const previewImages = document.getElementById("images-of-projects");
const slide1 = 'url("/assets/images/websiteScreenshot.png")';
const slide2 = 'url("/assets/images/screenshotNatureSite.png")';
const slide3 = 'url("/assets/images/screenshotKoala.png")';

// form variables
const retrieveUser = localStorage.getItem("user");
const parseUser = JSON.parse(retrieveUser);
console.log(parseUser);

// button variables
const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");
const hideButton = document.getElementById("hide-button")

//text elements to be changed
const profileText = document.querySelector("#about-me")


//image carousel
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


//like/dislike button behaviours
likeButton.addEventListener("click", function () {
  // if (likeButton.src == "/assets/images/emoji-kiss-fill-pink.svg") {
  console.log("works");
  likeButton.src = "/assets/images/likeGreenSvg.svg"
  // } else { likeButton.src = "/assets/images/emoji-kiss-fill-pink.svg" }
})

dislikeButton.addEventListener("click", function () {
  console.log("works also")
  dislikeButton.src = "/assets/images/dislikeBlueSvg.svg"
})

//hide button
hideButton.addEventListener("click", function () {
  console.log("hide button activated")
  if (profileText.style.display === "block") {
    profileText.style.display = "none";
    hideButton.textContent = "agrandir"
  } else {
    profileText.style.display = "block";
    hideButton.textContent = "reduire"
  }
})

// Ambiance sound and its button //
const ambianceSound = document.getElementById("background-sound");
const buttonSound = document.getElementById("sound-toggle");
// const imgSound = document.getElementById("logo-sound")
let isSound = false;

buttonSound.addEventListener("click", () => {
  if (!isSound) {
    ambianceSound.play();
    isSound = true;
    buttonSound.src = "/assets/images/son.png"
    console.log("sound on")
  } else {
    ambianceSound.pause();
    isSound = false;
    buttonSound.src = "/assets/images/son-off.png"
    console.log("sound off")
  }
});
