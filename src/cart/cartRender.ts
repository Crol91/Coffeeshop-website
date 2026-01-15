import { cartHtml } from "./cartHtml";
import { attachCartLogic } from "./cartLogic";
import { loadCart } from "./cartStorage"

export const renderCartFromStorage = () => {
    const cartItems = loadCart();
    cartHtml(cartItems);
    attachCartLogic(cartItems);
};