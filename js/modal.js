document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  let isModalOpen = false;
  let currentOverflow = "";

  function toggleScrollLock() {
    const bodyComputedStyle = window.getComputedStyle(document.body);

    if (isModalOpen) {
      if (bodyComputedStyle.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (bodyComputedStyle.overflow === "hidden") {
        document.body.style.overflow = currentOverflow;
      }
    }
  }

  function observeBodyOverflow() {
    const bodyStyleObserver = new MutationObserver(() => {
      currentOverflow = window.getComputedStyle(document.body).overflow;
      toggleScrollLock();
    });

    const config = { attributes: true, attributeFilter: ["style"] };
    bodyStyleObserver.observe(document.body, config);

    return bodyStyleObserver;
  }

  if (refs.openModalBtn && refs.closeModalBtn) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  const bodyObserver = observeBodyOverflow();

  function toggleModal() {
    if (refs.modal) {
      refs.modal.classList.toggle("backdrop--hidden");
      isModalOpen = !isModalOpen;
      toggleScrollLock();
    }
  }

  window.addEventListener("resize", handleResize);

  function handleResize() {
    if (isModalOpen && refs.modal) {
      toggleScrollLock();
    }
  }
});
