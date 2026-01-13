import type { CartItem } from "../types/CartItem";

// Attaches the interactive cart logic (plus/minus buttons, updating total) to the cart items
export const attachCartLogic = (cartItems: CartItem[]) => {
    // Initally calculate and display the total price
    updateTotal(cartItems);

// Loop through each cart item
cartItems.forEach(item => {
    // Find the corresponding cart item element in the DOM by its data-id
    const itemEl = document.querySelector(`.cartItem[data-id="${item.id}"]`) as HTMLDivElement;
    if(!itemEl) return; // If element is not found, skip this item

    // Get references to the minus/plus button and quantity span
    const minus = itemEl.querySelector(".cartMinus") as HTMLButtonElement;
    const plus = itemEl.querySelector(".cartPlus") as HTMLButtonElement;
    const quantity = itemEl.querySelector(".cartQuantity") as HTMLSpanElement;
    if (!minus || !plus || !quantity) return; // Skip if any of these elements are missing

        // --- MINUS BUTTON LOGIC ---
        minus.addEventListener("click", () => {
                item.quantity--; // Decrease the quantity of this item

                // If quantity drops to zero or below, remove item from DOM and cart array
                if(item.quantity <= 0){
                    itemEl.remove(); // Remove item element from page

                    // Remove the item from the cartItems array
                    const index = cartItems.findIndex(i => i.id === item.id);
                    if(index !== -1) {
                        cartItems.splice(index, 1);
                    }
                    updateTotal(cartItems); // Recalculate total after removal
                    return; // Exit early
                }

                // Update the quantity displayed in the DOM
                quantity.textContent = item.quantity.toString();

                // Recalculate the total price
                updateTotal(cartItems);
        });

        // --- PLUS BUTTON LOGIC ---
        plus.addEventListener("click", () => {
                item.quantity++; // Increase the quantity of this item
                quantity.textContent = item.quantity.toString(); // Update DOM
                updateTotal(cartItems); // Recalculate total price
        });
    });
}

// Updates the total price in the cart
const updateTotal = (cartItems: CartItem[]) => {
    // Calculate total: sum of (price * quantity) for each item
    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    // Find the DOM element that displays the total
    const totalText = document.getElementById("totalText");

    // Update the total text if the element exists
    if (totalText) totalText.textContent = `Totalt: ${total} kr`;
};