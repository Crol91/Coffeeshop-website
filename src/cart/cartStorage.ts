import type { CartItem } from "./CartItem";

const CART_KEY = "cart"; // Key in localstorage

// Save the whole cart
export const saveCart = (cartItems: CartItem[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
};

// Load cart, return empty array if nothing exists
export const loadCart = (): CartItem[] => {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
};

// Clear cart
export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
};

