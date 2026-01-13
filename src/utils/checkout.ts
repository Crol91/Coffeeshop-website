import { confirmationHtml } from "./createHtml";

// Handles the checkout form submission
export const checkout = () => {
    // Get a reference to the checkout form
    const checkoutForm = document.getElementById("checkoutForm") as HTMLFormElement;

    // Listen for the form submit event
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload

        // Get the values from the input fields firtName and email
        const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        
        // Create and display the order confirmation HTML element
        const orderConfirmation = confirmationHtml(firstName, email);
        
        // Allow the user to click on the confirmation message to remove it from the DOM
        orderConfirmation.addEventListener("click", () => {
            orderConfirmation.remove();
        });
        
        // Reset the form fields after submission
        checkoutForm.reset();
    });
}