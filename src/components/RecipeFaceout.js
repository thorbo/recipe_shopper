import { Fragment } from "react";
import AllRecipes from "../pages/AllRecipes";
import classes from "./RecipeFaceout.module.css";

const RecipeFaceout = (props) => {
  let recipe = props.recipe;
  let cals = 0;

  return (
    <div className={classes.recipe} onClick={() => props.onClick(recipe.title)}>
      <img src={recipe.image} />
      <h3>{recipe.title}</h3>
      <ul>
        {recipe.components.map((component) => {
          let ingredient = component.ingredient
          cals += ingredient.protein + ingredient.fats + ingredient.carbs;
          return <li key={ingredient.name}>{ingredient.name}</li>;
        })}
      </ul>
      <hr />
      <span>Total Cals: {cals}</span>
    </div>
  );
};

export default RecipeFaceout;
