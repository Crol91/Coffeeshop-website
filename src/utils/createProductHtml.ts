import { Coffee } from "../models/Coffee";
import { coffeeList } from "../data/coffees";
import { addToCart } from "../cart/cartStorage";
import { renderCartFromStorage } from "../cart/cartRender";

export function renderProducts(): void {
  const productContainer = document.getElementById("productContainer");

  if (!productContainer) return;
  productContainer.innerHTML = "";

  coffeeList.forEach((coffee) => {
    const productCard = createProductCard(coffee);
    productContainer.appendChild(productCard);
  });
}

function createProductCard(coffee: Coffee): HTMLElement {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
  <img src="${coffee.image}" alt="${coffee.name}" class="product-image"/>
    <div class="product-info">
        <span class="product-name"><strong>${
          coffee.name
        } </strong></span><span class="product-description">${
    coffee.description
  }</span><span class="product-price"><strong>${coffee.price}:-</strong></span>
        <div class="stock-status ${
          coffee.inStock ? "in-stock" : "out-of-stock"
        }">
        <span class="stockCircle"></span>
        <span class="inStockText">${
          coffee.inStock ? "Finns i lager" : "Finns ej i lager"
        }</span>
            </div>
            <button class="add-to-cart">Lägg i varukorgen
            <span class="addToCartIcon">
  <img src="/src/assets/icons/icon-cart.svg" alt="a cart icon" />
</span></button>
    </div>`;

  const button = card.querySelector(".add-to-cart") as HTMLButtonElement;

  button.addEventListener("click", () => {
    if (!coffee.inStock) {
      alert("Produkten finns ej i lager");
      return;
    }
    const cartItem = {
      id: coffee.name,
      name: coffee.name,
      price: coffee.price,
      quantity: 1,
      thumbnail: coffee.image,
    };
    addToCart(cartItem);
    renderCartFromStorage();
  });
  return card;
}
