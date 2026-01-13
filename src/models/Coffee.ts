export class Coffee {
  image: string;
  name: string;
  price: number;
  inStock: boolean;

  constructor(image: string, name: string, price: number, inStock: boolean) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.inStock = inStock;
  }
}
