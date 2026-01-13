// Handles opening and closing of the shopping cart:
// - Opens cart when cart link is clicked
// - Closes cart when close button is clicked
// - Automatically closes cart if the hamburger menu opens and vice versa
export const cart = () => {
    const cartContainer = document.getElementById("cartContainer");
    const cartLink = document.getElementById("cartLink");
    const cartCloseContainer = document.getElementById("cartCloseContainer");
    const navBar = document.querySelector(".navBar") as HTMLElement | null;
    const burger = document.querySelector(".burger") as HTMLElement | null;
    if(!cartContainer || !cartLink || !cartCloseContainer) return;

    // Close cart when hamburger opens nav
    burger?.addEventListener("click", () => {
             if(navBar?.classList.contains("is-open")){
            cartContainer.classList.remove("show");
            }
        });
    
    // Open cart
    cartLink?.addEventListener("click", () => {
        cartContainer.classList.add("show");
        cartContainer.classList.remove("hide");

        // Close nav if it's open when cart opens
        if(navBar?.classList.contains("is-open")){
            navBar.classList.remove("is-open");
            navBar.setAttribute("aria-hidden", "true");
        }
        // Update hamburger state
        burger?.classList.remove("is-open");
        burger?.setAttribute("aria-expanded", "false");
    });

    // Close cart
    cartCloseContainer.addEventListener("click", () => {
        cartContainer.classList.add("hide");
        cartContainer.classList.remove("show");
    });

};