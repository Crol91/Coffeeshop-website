
// Creates an order confirmation HTML element after the user completes a purchase 
export const confirmationHtml = (firstName:string, email:string): HTMLDivElement => {
        /* Get reference to the checkout form selection */
        const checkoutFormSection = document.getElementById("checkoutFormSection") as HTMLDivElement;

        // Create a new div for the order confirmation 
        const orderConfirmation = document.createElement("div") as HTMLDivElement;
        orderConfirmation.id = "orderConfirmation";

        // Create heading and paragraph elements for the confirmation message 
        const heading = document.createElement("h3") as HTMLHeadingElement;
        const orderText = document.createElement("p") as HTMLParagraphElement;
        const emailText = document.createElement("p") as HTMLParagraphElement;
        
        //Generate a random order number
        const orderNumber = Math.floor(100000 + Math.random() * 900000).toString();

        // Fill the confirmation element with text
        heading.textContent = `Tack för din beställning, ${firstName}!`;
        orderText.innerHTML = `Ditt ordernummer är <strong>#${orderNumber}</strong>`;
        emailText.innerHTML = `En bekräftelse på ditt köp har skickats till <strong>${email}</strong>.`
        
        // Add to DOM
        orderConfirmation.append(heading, orderText, emailText);
        checkoutFormSection.appendChild(orderConfirmation);
        // Return the created element
        return orderConfirmation;
}
