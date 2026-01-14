//import "./style.css";
import "./scss/main.scss";

import { initHamburgerNav } from "./hamburgerNav";
import { initFooterAccordion } from "./footerAccordion";
import { cart } from "./cart/cart";
import { checkout } from "./checkout/checkout";
import { attachCartLogic } from "./cart/cartLogic";
import { cartItems as initialCartItems } from "./cart/cartState";
import { cartHtml } from "./cart/cartHtml";
import { loadCart } from "./cart/cartStorage";
import { renderProducts } from "./utils/createProductHtml";

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = loadCart();
  if (cartItems.length === 0) {
    // If nothing is stored in localstorage, start with default items
    cartItems.push(...initialCartItems);
  }
  initHamburgerNav();
  initFooterAccordion();
  cartHtml(cartItems);

  attachCartLogic(cartItems);

  cart();

  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkout();
  }
});

// Runs "create product card" function
renderProducts();
