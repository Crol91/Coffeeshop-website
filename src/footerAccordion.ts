export function initFooterAccordion() {
  const items = Array.from(
    document.querySelectorAll<HTMLDetailsElement>(".site-footer .footerColumn")
  );

  if (!items.length) return;

  const mqDesktop = window.matchMedia("(min-width: 1024px)");

  const apply = () => {
    if (mqDesktop.matches) {
      // Desktop: allt öppet
      items.forEach((d) => (d.open = true));
      return;
    }

    // Mobil/tablet: stäng allt...
    items.forEach((d) => (d.open = false));

    // ...men öppna de som ska vara synliga från början
    items
      .filter((d) => d.hasAttribute("data-footer-default-open"))
      .forEach((d) => (d.open = true));
  };

  apply();
  mqDesktop.addEventListener("change", apply);
}