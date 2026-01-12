export const cart = () => {
    const cartContainer = document.getElementById("cartContainer");
    const cartLink = document.getElementById("cartLink");
    const cartSpanContainer = document.getElementById("cartSpanContainer");
    if(!cartContainer || !cartLink || !cartSpanContainer) return;

    cartLink?.addEventListener("click", () => {
        cartContainer.classList.add("show");
        cartContainer.classList.remove("hide");
    });

    cartSpanContainer.addEventListener("click", () => {
        cartContainer.classList.add("hide");
        cartContainer.classList.remove("show");
    });

};