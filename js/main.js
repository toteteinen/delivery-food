const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const Close = document.querySelector(".close");

cartButton.addEventListener('click', toggleModal);
Close.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open")
}

new WOW().init();