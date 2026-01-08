export const cart = (cartSpanContainer: HTMLDivElement) => {
    const cartContainer = document.getElementById("cartContainer");
    const cartLink = document.getElementById("cartLink");
    if(!cartContainer) return;

    cartLink?.addEventListener("click", () => {
        cartContainer.classList.add("show");
        cartContainer.classList.remove("hide");
    });

    cartSpanContainer.addEventListener("click", () => {
        cartContainer.classList.add("hide");
        cartContainer.classList.remove("show");
    });

};