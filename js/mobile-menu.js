document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    burger: document.querySelector(".burger-menu"),
    navMenu: document.querySelector(".nav-mobile"),
    navContent: document.querySelector(".nav__content"),
  };

  function toggleScrollLock() {
    const isBodyOverflowHidden = document.body.style.overflow === "hidden";

    if (refs.burger && refs.burger.classList.contains("burger--open")) {
      if (!isBodyOverflowHidden) {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (isBodyOverflowHidden) {
        document.body.style.overflow = "";
      }
    }
  }

  if (refs.burger) {
    refs.burger.addEventListener("click", toggleBurger);
  }

  function toggleBurger() {
    if (refs.burger && refs.navMenu && refs.navContent) {
      refs.burger.classList.toggle("burger--open");
      refs.navMenu.classList.toggle("nav-mobile--open");

      const isBurgerOpen = refs.burger.classList.contains("burger--open");
      const isMobile = window.innerWidth < 768;

      refs.navContent.style.display =
        isBurgerOpen && isMobile ? "flex" : "none";

      toggleScrollLock();
    }
  }

  window.addEventListener("resize", handleResize);

  function handleResize() {
    if (
      window.innerWidth >= 768 &&
      refs.burger &&
      refs.navMenu &&
      refs.navContent
    ) {
      refs.burger.classList.remove("burger--open");
      refs.navMenu.classList.remove("nav-mobile--open");
      refs.navContent.style.display = "flex";
    } else {
      if (!refs.burger || !refs.burger.classList.contains("burger--open")) {
        if (refs.navContent) {
          refs.navContent.style.display = "none";
        }
      }
    }
    toggleScrollLock();
  }
});
