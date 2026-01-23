/* 
Initializes accordion behavior for the footer.
On desktop, all sections are open.
On mobile/tablet, sections are collapsible.
*/
export function initFooterAccordion() {
  /* Select all footer accordion items (<details> elements) */
  const items = Array.from(
    document.querySelectorAll<HTMLDetailsElement>(".site-footer .footerColumn")
  );
 /* Exit early if no footer columns exist */
  if (items.length === 0) {
  return;
}
  /* Media query to detect desktop screen size */
  const mqDesktop = window.matchMedia("(min-width: 800px)");
  /* 
  Applies correct accordion state depending on screen size:
  - Desktop: all sections are open
  - Mobile/Tablet: all sections are closed
  */
  const apply = () => {
    if (mqDesktop.matches === true) {
      /* Desktop: keep all accordion sections open */
      items.forEach((d) => {
      d.open = true;
      });
      return;
    }
  
    /* Mobile/Tablet: close all accordion sections */
    items.forEach((d) => {
    d.open = false;
    });
  };

 /* Apply accordion state immediately on page load */
apply();

/* Re-apply accordion behavior when screen size changes */
mqDesktop.addEventListener("change", () => {
  apply();
});
}
