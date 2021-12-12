import RecipeFaceout from "../components/RecipeFaceout";
import { Recipes } from "../store/Recipes";
import { useNavigate } from "react-router-dom";

const AllRecipes = (props) => {
  const navigate = useNavigate();

  const recipeClickHandler = (name) => {
    navigate(`/${name}`);
  };

  return (
    <div className="recipes">
      {Recipes.map((recipe) => {
        return (
          <RecipeFaceout
            key={recipe.id}
            recipe={recipe}
            onClick={recipeClickHandler}
          />
        );
      })}
    </div>
  );
};

export default AllRecipes;
