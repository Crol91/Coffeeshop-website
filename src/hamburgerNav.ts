export function initHamburgerNav() {
const burger = document.querySelector(".burger") as HTMLButtonElement | null;
const nav = document.querySelector(".navBar") as HTMLElement | null;
const overlay = document.querySelector(".nav-overlay") as HTMLElement | null;

if (burger && nav && overlay) {
  const closeMenu = () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-open"); // <-- för animation
    overlay.hidden = true;
    burger.setAttribute("aria-expanded", "false");
    nav.setAttribute("aria-hidden", "true");
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    burger.classList.add("is-open"); // <-- för animation
    overlay.hidden = false;
    burger.setAttribute("aria-expanded", "true");
    nav.setAttribute("aria-hidden", "false");
  };

  burger.addEventListener("click", () => {
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  // 2) Stäng när man klickar på en länk i menyn
  nav.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) closeMenu();
  });
}
}