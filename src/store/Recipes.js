import { Recipe, Component, Ingredient } from "./ClassBuilder";
import { Ingredients } from "./Ingredients";

let recipe1 = new Recipe(
  "tacos",
  "https://www.recipetineats.com/wp-content/uploads/2021/08/Spaghetti-Puttanesca_64-SQ.jpg"
);
recipe1.setComponents(
  new Component(Ingredients.tomato, 1, null),
  new Component(Ingredients.beef, 2, "lbs")
);

export const Recipes = [recipe1];
