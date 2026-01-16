export class Coffee {
  image: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;

  constructor(
    image: string,
    name: string,
    description: string,
    price: number,
    inStock: boolean
  ) {
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }
}
