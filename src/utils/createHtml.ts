export const confirmationHtml = (firstName:string, email:string): HTMLDivElement => {
        const checkoutFormSection = document.getElementById("checkoutFormSection") as HTMLDivElement;

        const orderConfirmation = document.createElement("div") as HTMLDivElement;
        orderConfirmation.id = "orderConfirmation";

        const heading = document.createElement("h3") as HTMLHeadingElement;
        const orderText = document.createElement("p") as HTMLParagraphElement;
        const emailText = document.createElement("p") as HTMLParagraphElement;
        
        const orderNumber = Math.floor(100000 + Math.random() * 900000).toString();

        heading.textContent = `Tack för din beställning, ${firstName}!`;
        orderText.innerHTML = `Ditt ordernummer är <strong>#${orderNumber}</strong>`;
        emailText.innerHTML = `En bekräftelse på ditt köp har skickats till <strong>${email}</strong>.`
        // Add to DOM //
        orderConfirmation.append(heading, orderText, emailText);
        checkoutFormSection.appendChild(orderConfirmation);
        return orderConfirmation;
}