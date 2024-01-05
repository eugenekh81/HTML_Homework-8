(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    burger: document.querySelector('.burger-menu'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.burger.addEventListener('click', toggleBurger);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }

  function toggleBurger() {
    refs.burger.classList.toggle('burger--open');
  }
})();
