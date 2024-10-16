

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