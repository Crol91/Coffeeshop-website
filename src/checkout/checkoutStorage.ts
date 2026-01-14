// Get the next ordernumber in chronological order and safes it in localstorage
export const getNextOrderNumber = (): number => {
const lastOrder = localStorage.getItem("lastOrderNumber");
let orderNumber = lastOrder ? parseInt(lastOrder) + 1 : 100001;

localStorage.setItem("lastOrderNumber", orderNumber.toString());
return orderNumber;
};