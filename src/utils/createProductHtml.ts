import { Coffee } from "../models/Coffee";
import { coffeeList } from "../data/coffees";

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
  card.innerHTML = `<img src="${coffee.image}" alt="${
    coffee.name
  }" class="product-image"/>
    <div class="product-info">
        <h3>${coffee.name}</h3>
        <p><strong>${coffee.price} :-</strong></p>
        <div class="stock-status ${
          coffee.inStock ? "in-stock" : "out-of-stock"
        }">
        <span class="stockCircle"></span>
        <span>${coffee.inStock ? "Finns i lager" : "Finns ej i lager"}</span>
            </div>
            <button class="add-to-cart">Lägg i varukorgen
            <span class="addToCartIcon">
  <img src="../assets/icons/icon-cart.svg" alt="a cart icon" />
</span>
            </button>
    </div>`;
  return card;
}
