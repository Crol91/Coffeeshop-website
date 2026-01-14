import type { CartItem } from "./CartItem";
import { cartItems } from "./cartState";
import { saveCart } from "./cartStorage";

// Attaches the interactive cart logic (plus/minus buttons, updating total) to the cart items
export const attachCartLogic = (cartItems: CartItem[], totalElId = "totalText") => {
    // Initally calculate the total price
    updateTotal(cartItems, totalElId);
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
                    if(index !== -1) cartItems.splice(index, 1);
                } else {
                    // Update the quantity displayed in the DOM
                    quantity.textContent = item.quantity.toString();
                }

                // Recalculate the total price
                updateTotal(cartItems, totalElId);
                saveCart(cartItems); // Save in localstorage
    });

        // --- PLUS BUTTON LOGIC ---
        plus.addEventListener("click", () => {
                item.quantity++; // Increase the quantity of this item
                quantity.textContent = item.quantity.toString(); // Update DOM
                updateTotal(cartItems, totalElId); // Recalculate total price
                saveCart(cartItems); // Save in localstorage
        });
    });
}

// Updates the total price in the cart
export const updateTotal = (cartItems: CartItem[], totalElId = "totalText") => {
    // Calculate total: sum of (price * quantity) for each item
    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    // Find the DOM element that displays the total
    const totalText = document.getElementById(totalElId);

    // Update the total text if the element exists
    if (totalText) totalText.textContent = `Totalt: ${total} kr`;
};

export const calculateTotal = (cartItems: CartItem[]): number => {
    return cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
};