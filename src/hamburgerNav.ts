export function initHamburgerNav() {
  /* Select hamburger button, navigation menu and overlay */
  const burger = document.querySelector(".burger") as HTMLButtonElement | null;
  const nav = document.querySelector(".navBar") as HTMLElement | null;
  const overlay = document.querySelector(".nav-overlay") as HTMLElement | null;

  /* Only run if all required elements exist */
  if (burger && nav && overlay) {

    /* Closes the mobile navigation menu */
    const closeMenu = () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-open"); // <-- för animation
    overlay.hidden = true;

    /* Accessibility attributes */
    burger.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
  };

    /* Opens the mobile navigation menu */
    const openMenu = () => {
    nav.classList.add("is-open");
    burger.classList.add("is-open"); // <-- Triggers burger animation 
    overlay.hidden = false;

    /* Accessibility attributes */
    burger.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-hidden", "false");
  };

  /* Toggle menu when hamburger button is clicked */
  burger.addEventListener("click", () => {
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  /* Close menu when clicking on the overlay */
  overlay.addEventListener("click", closeMenu);

  /* Close menu when clicking a link inside the navigation */ 
  nav.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) closeMenu();
    });
  }
}
