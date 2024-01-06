(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    burger: document.querySelector(".burger-menu"),
    navMenu: document.querySelector("[data-nav-open]"),
  };

  refs.navMenu.classList.add("nav-mobile");

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.burger.addEventListener("click", toggleBurger);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--hidden");
  }

  function toggleBurger() {
    refs.burger.classList.toggle("burger--open");
    refs.navMenu.classList.toggle("nav-mobile--open");
  }
})();
