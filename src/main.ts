//import "./style.css";
import "./scss/main.scss";

import { initHamburgerNav } from "./hamburgerNav";
import { cart } from "./cart/cart";
import { checkout } from "./utils/checkout";
import { cartHtml } from "./utils/createHtml";


document.addEventListener("DOMContentLoaded", () => {
initHamburgerNav();
    const cartContainer = document.getElementById("cartContainer");
    if(cartContainer) {
    cartHtml();
    }

    const cartSpanContainer = document.getElementById("cartSpanContainer");
    if(cartSpanContainer) {
        cart(cartSpanContainer as HTMLDivElement);
    }

    const checkoutForm = document.getElementById("checkoutForm");
    if(checkoutForm) {
        checkout();
    }
});

