import { loadCart } from "./cartStorage";

export const updateCartCounter = () => {
    // Fetch the existing cart from localstorage
    const cart = loadCart();

    // Calculate how many products are in the cart by summing up quantity on each cart item
    const totalItem = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );
   
    // Get DOM-element
    const counterEl = document.getElementById("cartCounter");
   
    // Exit if the element isn't in the DOM
    if(!counterEl) return;

    // Update the text in the counter
    counterEl.textContent = totalItem.toString();
};