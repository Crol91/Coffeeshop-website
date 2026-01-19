import { loadCart } from "./cartStorage";

export const updateCartCounter = () => {
    const cart = loadCart();

    const totalItem = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const counterEl = document.getElementById("cartCounter");

    if(!counterEl) return;
    counterEl.textContent = totalItem.toString();
};