
let ingredients = {
  tomato: {
    name: "tomato",
    carbs: 10,
    fats: 10,
    protein: 10,
  },
  beef: {
    name: "beef",
    carbs: 10,
    fats: 10,
    protein: 10,
  },
  onion: {
    name: "onion",
    carbs: 10,
    fats: 10,
    protein: 10,
  },
};

let recipe1 = {
  title: "Tacos",
  components: [
    {
      ingredient: ingredients.tomato,
      amount: 1,
      units: "none"
    },
    {
      ingredient: ingredients.beef,
      amount: 3,
      units: "lbs"
    },
  ],
  directions: "cook the damn tacos",
  servings: 2,
};

let recipe2 = {
  title: "Better Tacos",
  ingredients: [ingredients.tomato, ingredients.beef, ingredients.onion],
  directions: "cook the damn tacos",
  servings: 2,
};

export const Recipes = [recipe1];
