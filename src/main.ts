//import "./style.css";
import { initHamburgerNav } from "./hamburgerNav";
import "./scss/main.scss";

initHamburgerNav();
checkout();
import { cart } from "./cart/cart";
import { checkout } from "./utils/checkout";
import { cartHtml } from "./utils/createHtml";
import "./scss/main.scss";

document.addEventListener("DOMContentLoaded", () => {
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

