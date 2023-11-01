import Recipes from "./Recipes";

const categories = [
  {
    id: 1,
    title: "Broodjes",
    recipes: Recipes,
  },
  {
    id: 2,
    title: "Salades",
    recipes: [...Recipes.slice(3, 7)],
  },
  {
    id: 3,
    title: "Drinks",
    recipes: [...Recipes.slice(2, 6)],
  },
];

export default categories;
