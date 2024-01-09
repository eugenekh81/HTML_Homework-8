document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    burger: document.querySelector(".burger-menu"),
    navMenu: document.querySelector(".nav-mobile"),
    navContent: document.querySelector(".nav__content"),
  };

  let isNavMenuOpen = false;
  let isScrollLockEnabled = false;

  function toggleScrollLock() {
    const body = document.body;
    const isOverflowHidden = body.style.overflow === "hidden";

    if (isNavMenuOpen && !isOverflowHidden && !isScrollLockEnabled) {
      body.style.overflow = "hidden";
      isScrollLockEnabled = true;
    } else if (!isNavMenuOpen && isOverflowHidden && isScrollLockEnabled) {
      body.style.overflow = "";
      isScrollLockEnabled = false;
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

      isNavMenuOpen = isBurgerOpen;

      toggleScrollLock();
    }
  }

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
      isNavMenuOpen = false;
    } else {
      if (!refs.burger || !refs.burger.classList.contains("burger--open")) {
        if (refs.navContent) {
          refs.navContent.style.display = "none";
        }
      }
    }
    toggleScrollLock();
  }

  window.addEventListener("resize", handleResize);

  handleResize();
});
