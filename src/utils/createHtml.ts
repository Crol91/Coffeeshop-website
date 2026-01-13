import type { CartItem } from "../types/CartItem";

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

export const cartItemHtml = (item:CartItem): HTMLDivElement => {
    const itemEl = document.createElement("div");
    itemEl.className = "cartItem";
    itemEl.dataset.id = item.id;

    const img = document.createElement("img");
    img.src = item.thumbnail;
    img.alt = item.name;
    img.className = "thumbnail";

    const name = document.createElement("p");
    name.textContent = item.name;

    const controls = document.createElement("div");
    controls.className = "cartItemControls";

    const minusSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z" fill="#4d3328"></path> </g></svg>`;
    const plusSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782Z" fill="#4d3328"></path> </g></svg>`;
    
    const minus = document.createElement("button");
    minus.innerHTML = minusSVG;

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity.toString();

    const plus = document.createElement("button");
    plus.innerHTML = plusSVG;

    minus.className = "cartMinus";
    plus.className = "cartPlus";
    quantity.className = "cartQuantity";

    controls.append(minus, quantity, plus);
    itemEl.append(img, name, controls);

    return itemEl;
}

export const cartHtml = (cartItems: CartItem[]) => {
    const cartContainer = document.getElementById("cartContainer") as HTMLDivElement;
    if (!cartContainer) return;

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
    checkoutLink.href = "checkout";
    checkoutLink.textContent = "Till kassan";

    cartSpanContainer.append(cartSpan1, cartSpan2);
    cartHeader.append(cartTitle, cartSpanContainer);

    cartItems.forEach(item => {
            const itemEl = cartItemHtml(item);
            cartPriceSummary.appendChild(itemEl);
        });
        
    totalHeader.appendChild(totalText);
    cartPriceSummary.appendChild(totalHeader);
    cartBttn.appendChild(checkoutLink);
    cartContainer.append(cartHeader, cartPriceSummary, cartBttn);
}
