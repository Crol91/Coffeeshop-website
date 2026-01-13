import type { CartItem } from "../types/CartItem";

export const attachCartLogic = (cartItems: CartItem[]) => {
    updateTotal(cartItems);
    
cartItems.forEach(item => {
    const itemEl = document.querySelector(`.cartItem[data-id="${item.id}"]`) as HTMLDivElement;
    if(!itemEl) return;

    const minus = itemEl.querySelector(".cartMinus") as HTMLButtonElement;
    const plus = itemEl.querySelector(".cartPlus") as HTMLButtonElement;
    const quantity = itemEl.querySelector(".cartQuantity") as HTMLSpanElement;
    if (!minus || !plus || !quantity) return;

        minus.addEventListener("click", () => {
                item.quantity--;
                if(item.quantity <= 0){
                    itemEl.remove();

                    const index = cartItems.findIndex(i => i.id === item.id);
                    if(index !== -1) {
                        cartItems.splice(index, 1);
                    }
                    updateTotal(cartItems);
                    return;
                }
                quantity.textContent = item.quantity.toString();
                updateTotal(cartItems);
        });
        plus.addEventListener("click", () => {
                item.quantity++;
                quantity.textContent = item.quantity.toString();
                updateTotal(cartItems);
        });
    });
}

const updateTotal = (cartItems: CartItem[]) => {
    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const totalText = document.getElementById("totalText");
    if (totalText) totalText.textContent = `Totalt: ${total} kr`;
};