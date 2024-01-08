document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  let isModalOpen = false;
  let isScrollLockEnabled = false;

  function toggleScrollLock() {
    const body = document.body;
    const isOverflowHidden = body.style.overflow === "hidden";

    if (isModalOpen && !isOverflowHidden && !isScrollLockEnabled) {
      body.style.overflow = "hidden";
      isScrollLockEnabled = true;
    } else if (!isModalOpen && isOverflowHidden && isScrollLockEnabled) {
      body.style.overflow = "";
      isScrollLockEnabled = false;
    }
  }

  function observeBodyOverflow() {
    const bodyStyleObserver = new MutationObserver(() => {
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

      if (!isModalOpen) {
        window.removeEventListener("keydown", handleKeyDown);
      } else {
        window.addEventListener("keydown", handleKeyDown);
      }
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      toggleModal();
    }
  }
});
