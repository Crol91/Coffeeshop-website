import { confirmationHtml } from "./createHtml";

export const checkout = () => {
    const checkoutForm = document.getElementById("checkoutForm") as HTMLFormElement;

    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        
        const orderConfirmation = confirmationHtml(firstName, email);
        
        orderConfirmation.addEventListener("click", () => {
            orderConfirmation.remove();
        });
        
        checkoutForm.reset();
    });
}