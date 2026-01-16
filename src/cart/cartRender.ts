import { cartHtml } from "./cartHtml";
import { attachCartLogic } from "./cartLogic";
import { loadCart } from "./cartStorage"

export const renderCartFromStorage = () => {
    // Fetch cart from localstorage
    const cartItems = loadCart();

    // Render cart in DOM
    cartHtml(cartItems);
    // Attach interactive logic to the cart item
    attachCartLogic(cartItems);
};