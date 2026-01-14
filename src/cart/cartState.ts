import type { CartItem } from "./CartItem";
import darkRoast from "../assets/coffeeImages/darkRoast.jpeg";
import vanilla  from "../assets/coffeeImages/vanilla.jpeg";

export let cartItems: CartItem[] = [
    {
        id: "coffee-1",
        thumbnail: darkRoast,
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
    },
];