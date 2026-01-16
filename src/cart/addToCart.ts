import type { CartItem } from "./CartItem";
import { loadCart, saveCart } from "./cartStorage";

export const addToCart = (newItem: CartItem) => {
    // Fetch the existing cart from localstorage
    const cart = loadCart();
    
    // Check if the product that's being added already exists in the cart
    const existingItem = cart.find(item => item.id === newItem.id);

    if(existingItem) {
        existingItem.quantity++; // If product already exists, increase quantity
    } else {
        cart.push(newItem); // Otherwise add new cartItem
    }
    saveCart(cart); // Save updated cart
};