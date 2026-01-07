export const checkout = () => {
    const checkoutForm = document.getElementById("checkoutForm") as HTMLFormElement;

    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const checkoutFormSection = document.getElementById("checkoutFormSection") as HTMLDivElement;

        const orderConfirmation = document.createElement("div") as HTMLDivElement;
        orderConfirmation.id = "orderConfirmation";

        const heading = document.createElement("h3") as HTMLHeadingElement;
        const orderText = document.createElement("p") as HTMLParagraphElement;
        const emailText = document.createElement("p") as HTMLParagraphElement;
        
        const orderNumber = generateOrderNumber();
        heading.textContent = `Tack för din beställning, ${firstName}!`;
        orderText.innerHTML = `Ditt ordernummer är <strong>#${orderNumber}</strong>`;
        emailText.innerHTML = `En bekräftelse på ditt köp har skickats till <strong>${email}</strong>.`
        
        checkoutFormSection.appendChild(orderConfirmation);
        orderConfirmation.appendChild(heading);
        orderConfirmation.appendChild(orderText);
        orderConfirmation.appendChild(emailText);

        checkoutForm.reset();
    });

    const generateOrderNumber = ():string => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
}