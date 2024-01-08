document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  function toggleScrollLock() {
    const body = document.body;

    if (refs.modal && !refs.modal.classList.contains("backdrop--hidden")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }

  if (refs.openModalBtn && refs.closeModalBtn) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    if (refs.modal) {
      refs.modal.classList.toggle("backdrop--hidden");

      toggleScrollLock();
    }
  }

  window.addEventListener("resize", handleResize);

  function handleResize() {
    toggleScrollLock();
  }
});
