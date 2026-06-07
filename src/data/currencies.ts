import { Currency } from "../types/currency";

export const currencies: Currency[] = [
  {
    id: 1,
    name: "Coin",
    value: "3.39q",
    image: require("../app/assets/coin_image.png"),
  },
  {
    id: 2,
    name: "Gem",
    value: "1061",
    image: require("../app/assets/gem_image.png"),
  },
  {
    id: 3,
    name: "Stone",
    value: "1385",
    image: require("../app/assets/stone_image.png"),
  },
];
