

const popupContainer = document.querySelector(".popup-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", toggleModal);
});

function toggleModal() {
  popupContainer.classList.toggle("active");
}