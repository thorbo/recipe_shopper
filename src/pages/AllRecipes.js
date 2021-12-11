import { Fragment } from "react";
import RecipeFaceout from "../components/RecipeFaceout";
import { Recipes } from "../store/Recipes";

const AllRecipes = (props) => {
    const recipeClickHandler = (name) => {
        alert(name)
    }

  return (
    <div className="recipes">
      {Recipes.map((recipe) => {
        return <RecipeFaceout recipe={recipe} onClick={recipeClickHandler}/>;
      })}
    </div>
  );
};

export default AllRecipes;
