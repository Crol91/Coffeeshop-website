export function initFooterAccordion() {
  const items = Array.from(
    document.querySelectorAll<HTMLDetailsElement>(".site-footer .footerColumn")
  );

  if (items.length === 0) {
  return;
}

  const mqDesktop = window.matchMedia("(min-width: 800px)");

  const apply = () => {
    if (mqDesktop.matches === true) {
      // Desktop: allt öppet
      items.forEach((d) => {
      d.open = true;
      });
      return;
    }
  
    // Mobil/tablet: stäng allt
    items.forEach((d) => {
    d.open = false;
    });
  };

 // Gör sidan respnonsiv direkt vid laddning
apply();

mqDesktop.addEventListener("change", () => {
  apply();
});
}