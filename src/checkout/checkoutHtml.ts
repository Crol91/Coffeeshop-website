import type { CartItem } from "../cart/CartItem";
import { calculateTotal } from "../cart/cartLogic";
import { getNextOrderNumber } from "./checkoutStorage";


// Creates an order confirmation HTML element after the user completes a purchase 
export const confirmationHtml = (firstName:string, email:string, cartItems: CartItem[]): HTMLDivElement => {
        /* Get reference to the checkout form selection */
        const checkoutFormSection = document.getElementById("checkoutFormSection") as HTMLDivElement;
    
        // Create a new div for the order confirmation 
        const orderConfirmation = document.createElement("div") as HTMLDivElement;
        orderConfirmation.id = "orderConfirmation";

        // Create heading and paragraph elements for the confirmation message 
        const heading = document.createElement("h3") as HTMLHeadingElement;
        const orderText = document.createElement("p") as HTMLParagraphElement;
        const emailText = document.createElement("p") as HTMLParagraphElement;
        
        // Get next chronological ordernumber 
        const orderNumber = getNextOrderNumber();

        // Fill the confirmation element with text
        heading.textContent = `Tack för din beställning, ${firstName}!`;
        orderText.innerHTML = `Ditt ordernummer är <strong>#${orderNumber}</strong>`;
        emailText.innerHTML = `En bekräftelse på ditt köp har skickats till <strong>${email}</strong>.`
        
        // List with products that's been baught
        const itemsList = document.createElement("ul");
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} x${item.quantity} - ${item.price * item.quantity} kr`;
            itemsList.appendChild(li);
        });

        // Total price
        const totalEl = document.createElement("h3");
        totalEl.textContent = `Total: ${calculateTotal(cartItems)} kr`;

        // Add to DOM
        orderConfirmation.append(heading, orderText, emailText, itemsList, totalEl);
        checkoutFormSection.appendChild(orderConfirmation);
        // Return the created element
        return orderConfirmation;
};
