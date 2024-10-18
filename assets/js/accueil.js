

const popupContainer = document.querySelector(".popup-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");


modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", toggleModal);
});

function toggleModal() {
  popupContainer.classList.toggle("active");
}



const popupContainerMdp = document.querySelector(".popup-container-mdp");
const mdpForgot = document.querySelectorAll(".mdp-forgot");

mdpForgot.forEach(forgot => {
  forgot.addEventListener("click", toggleMdp);
});

function toggleMdp() {
  popupContainerMdp.classList.toggle("active");
}

function openPopup() {
  document.getElementById("mdp-forgot").classList.add("visible");
}

function closePopup() {
  document.getElementById("mdp-forgot").classList.remove("visible");
}



const emoji = document.getElementById("floating-emoji");
  
function randomPosition(element) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  element.style.transform = `translate(${x}px, ${y}px)`;
}
  
  setInterval(() => randomPosition(document.getElementById("emoji1")), 1500);
  setInterval(() => randomPosition(document.getElementById("emoji2")), 2000);
  setInterval(() => randomPosition(document.getElementById("emoji3")), 2500);