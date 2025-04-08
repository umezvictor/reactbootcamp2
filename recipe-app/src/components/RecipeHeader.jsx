import RecipeNutritionalFacts from "./RecipeNutritionalFacts";
import { AiOutlineFire } from "react-icons/ai";
import { CiWheat } from "react-icons/ci";
import { BiCheese, BiCake } from "react-icons/bi";
import { IoFishOutline } from "react-icons/io5";

export default function RecipeHeader({ nutritionalFacts, name }) {
  const nutritionalFactsArray = [
    {
      id: 1,
      amount: nutritionalFacts.calories,
      category: "calories",
      Icon: AiOutlineFire, //use capital letter for Icon to make it look like a component
    },
    {
      id: 2,
      amount: nutritionalFacts.carbohydrates,
      category: "carbs",
      Icon: CiWheat,
    },
    {
      id: 3,
      amount: nutritionalFacts.fat,
      category: "fats",
      Icon: BiCheese,
    },
    {
      id: 4,
      amount: nutritionalFacts.protein,
      category: "proteins",
      Icon: IoFishOutline,
    },
    {
      id: 5,
      amount: nutritionalFacts.sugar,
      category: "sugar",
      Icon: BiCake,
    },
  ];
  //   return (
  //     <div className="recipe-header">
  //       <h1>Chai-Spiced Cheescake Muffins</h1>
  //       <div className="nutritional-facts-container">
  //         {nutritionalFactsArray.map((fact) => (
  //           <RecipeNutritionalFacts fact={fact} key={fact.id} />
  //         ))}
  //       </div>
  //     </div>
  //   ); style 1. alternatively below i used child prop, passed down to RecipeNutritionalFacts

  return (
    <div className="recipe-header">
      <h1>{name}</h1>
      <div className="nutritional-facts-container">
        {nutritionalFactsArray.map(({ Icon, id, amount, category }) => (
          <RecipeNutritionalFacts fact={{ amount, category }} key={id}>
            <Icon />
          </RecipeNutritionalFacts>
        ))}
      </div>
    </div>
  );
}
