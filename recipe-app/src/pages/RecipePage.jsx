import { useParams } from "react-router-dom";
import { recipes } from "../components/CardList";
export default function RecipePage() {
  //get id from url query param
  const { id } = useParams();
  //take note, the id from the url will come as a string type
  const recipe = recipes.find((r) => r.id === parseInt(id));
  return (
    <div>
      <h1>{recipe.name}</h1>
    </div>
  );
}
