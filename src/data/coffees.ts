import { Coffee } from "../models/Coffee";

export const coffeeList: Coffee[] = [
  new Coffee(
    "/src/assets/coffeeImages/caramelDark.jpeg",
    "Caramel Dark",
    199,
    false
  ),
  new Coffee(
    "/src/assets/coffeeImages/caramelLight.jpeg",
    "Caramel Light",
    199,
    true
  ),
  new Coffee("/src/assets/coffeeImages/chocolate.jpeg", "Chocolate", 149, true),
  new Coffee("/src/assets/coffeeImages/vanilla.jpeg", "Vanilla", 149, true),
  new Coffee("/src/assets/coffeeImages/cinnamon.jpeg", "Cinnamon", 129, false),
  new Coffee(
    "/src/assets/coffeeImages/darkRoast.jpeg",
    "Dark Roast",
    199,
    true
  ),
];
