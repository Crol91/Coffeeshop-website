import type { CartItem } from "../types/CartItem";
import dark_roast from "../assets/products/dark_roast.jpeg";
import vanilla  from "../assets/products/vanilla.jpeg";

export let cartItems: CartItem[] = [
    {
        id: "coffee-1",
        thumbnail: dark_roast,
        name: " Dark Roast",
        price: 199,
        quantity: 1
    },
    {
        id: "coffee-2",
        thumbnail: vanilla,
        name: "Vanilla",
        price: 199,
        quantity: 1
    }
];