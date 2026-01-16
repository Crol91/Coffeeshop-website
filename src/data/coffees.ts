import { Coffee } from "../models/Coffee";

export const coffeeList: Coffee[] = [
  new Coffee(
    "/src/assets/coffeeImages/caramelLight.jpeg",
    "Caramel Light",
    "Ljustrostat kaffe med kolasmak",
    199,
    true
  ),
  new Coffee(
    "/src/assets/coffeeImages/chocolate.jpeg",
    "Chocolate",
    "Kraftfullt kaffe med med chokladsmak",
    149,
    true
  ),
  new Coffee(
    "/src/assets/coffeeImages/vanilla.jpeg",
    "Vanila",
    "Ljusrostat kaffe med len vaniljton",
    149,
    true
  ),
  new Coffee(
    "/src/assets/coffeeImages/cinnamon.jpeg",
    "Cinnamon",
    "Kryddigt kaffe med toner av kanel",
    129,
    false
  ),
  new Coffee(
    "/src/assets/coffeeImages/darkRoast.jpeg",
    "Dark Roast",
    "Mörkrostat kaffe med intensiv smak",
    199,
    true
  ),
  new Coffee(
    "/src/assets/coffeeImages/caramelDark.jpeg",
    "Caramel Dark",
    "Mörkrostat kaffe med kolasmak",
    199,
    false
  ),
];
