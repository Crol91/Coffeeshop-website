import { Coffee } from "../models/Coffee";

export const coffeeList: Coffee[] = [
  new Coffee(
    "../assets/coffeeImages/caramelDark.jpeg",
    "Caramel Dark",
    199,
    false
  ),
  new Coffee(
    "../assets/coffeeImages/caramelLight.jpeg",
    "Caramel Light",
    199,
    true
  ),
  new Coffee("../assets/coffeeImages/chocolate.jpeg", "Chocolate", 149, true),
  new Coffee("../assets/coffeeImages/vanilla.jpeg", "Vanila", 149, true),
  new Coffee("../assets/coffeeImages/cinnamon.jpeg", "Cinnamon", 129, false),
  new Coffee("../assets/coffeeImages/darkRoast.jpeg", "Dark Roast", 199, true),
];
