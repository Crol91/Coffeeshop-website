//import "./style.css";
import "./scss/main.scss";

import { initHamburgerNav } from "./hamburgerNav";
import { initFooterAccordion } from "./footerAccordion";
import { cart } from "./cart/cart";
import { checkout } from "./checkout/checkout";
import { renderProducts } from "./utils/createProductHtml";
import { renderCartFromStorage } from "./cart/cartRender";

document.addEventListener("DOMContentLoaded", () => {
  initHamburgerNav();
  initFooterAccordion();

  renderCartFromStorage();

  cart();

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkout();
  }
});

// Runs "create product card" function
renderProducts();
