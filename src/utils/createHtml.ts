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

export const cartHtml = () => {
    const cartContainer = document.getElementById("cartContainer") as HTMLDivElement;

    const cartHeader = document.createElement("section");
    const cartPriceSummary = document.createElement("section");
    const totalHeader = document.createElement("div");
    const cartBttn = document.createElement("div");

    const cartSpanContainer = document.createElement("div");
    const cartSpan1 = document.createElement("span");
    const cartSpan2 = document.createElement("span");

    const cartTitle = document.createElement("h2");
    const totalText = document.createElement("h3");
    const checkoutLink = document.createElement("a");

    cartHeader.id = "cartHeader";
    cartSpanContainer.id = "cartSpanContainer";
    cartSpan1.id = "cartSpan1";
    cartSpan2.id = "cartSpan2";
    cartPriceSummary.id = "cartPriceSummary";
    totalHeader.id = "totalHeader";
    cartTitle.id = "cartTitle";
    totalText.id = "totalText";
    cartBttn.id = "cartBttn";
    checkoutLink.id = "ceckoutLink";

    cartTitle.textContent = "Varukorg";
    totalText.textContent = "Totalt";
    checkoutLink.href = "#checkout";
    checkoutLink.textContent = "Till kassan";

    cartSpanContainer.append(cartSpan1, cartSpan2);
    cartHeader.append(cartTitle, cartSpanContainer);
    totalHeader.appendChild(totalText);
    cartPriceSummary.appendChild(totalHeader);
    cartBttn.appendChild(checkoutLink);
    cartContainer.append(cartHeader, cartPriceSummary, cartBttn);
}
