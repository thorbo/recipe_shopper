import { Fragment } from "react";
import AllRecipes from "../pages/AllRecipes";
import classes from "./RecipeFaceout.module.css";

const RecipeFaceout = (props) => {
  let recipe = props.recipe;
  let cals = 0;

  return (
    <div className={classes.recipe} onClick={() => props.onClick(recipe.title)}>
      <img src="https://www.recipetineats.com/wp-content/uploads/2021/08/Spaghetti-Puttanesca_64-SQ.jpg" />
      <p>{recipe.title}</p>
      <ul>
        {recipe.components.map((component) => {
          let ingredient = component.ingredient
          cals += ingredient.protein + ingredient.fats + ingredient.carbs;
          return <li>{ingredient.name}</li>;
        })}
      </ul>
      <hr />
      <span>Total Cals: {cals}</span>
    </div>
  );
};

export default RecipeFaceout;
