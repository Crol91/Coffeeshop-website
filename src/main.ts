//import "./style.css";
import "./scss/main.scss";

import { initHamburgerNav } from "./hamburgerNav";
import { initFooterAccordion } from "./footerAccordion";
import { cart } from "./cart/cart";
import { checkout } from "./utils/checkout";
import { attachCartLogic } from "./logic/cartLogic";
import { cartItems } from "./data/cartState";
import { cartHtml } from "./utils/createHtml";


document.addEventListener("DOMContentLoaded", () => {

    initHamburgerNav();
    initFooterAccordion();
    cartHtml(cartItems);

    attachCartLogic(cartItems);

    cart();

    const checkoutForm = document.getElementById("checkoutForm");
    if(checkoutForm) {
        checkout();
    }
});

