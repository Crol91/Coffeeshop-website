//import "./style.css";
import "./scss/main.scss";

import { initHamburgerNav } from "./hamburgerNav";
import { initFooterAccordion } from "./footerAccordion";
import { cart } from "./cart/cart";
import { checkout } from "./checkout/checkout";
import { renderProducts } from "./utils/createProductHtml";
import { renderCartFromStorage } from "./cart/cartRender";
import { updateCartCounter } from "./cart/cartCounter";

document.addEventListener("DOMContentLoaded", () => {
  initHamburgerNav();
  initFooterAccordion();

  renderCartFromStorage();
  updateCartCounter();

  cart();

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkout();
  }
});

// Runs "create product card" function
renderProducts();
