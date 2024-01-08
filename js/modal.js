document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  function toggleScrollLock() {
    const isBodyOverflowHidden = document.body.style.overflow === "hidden";

    if (refs.modal && !refs.modal.classList.contains("backdrop--hidden")) {
      if (!isBodyOverflowHidden) {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (isBodyOverflowHidden) {
        document.body.style.overflow = "";
      }
    }
  }

  if (refs.openModalBtn) {
    refs.openModalBtn.addEventListener("click", toggleModal);
  }

  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    if (refs.modal) {
      refs.modal.classList.toggle("backdrop--hidden");
      toggleScrollLock();
    }
  }
});
