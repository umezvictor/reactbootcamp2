export default function RecipeNutritionalFacts({ fact, children }) {
  //destructure the icons and render it like a normal component
  //children will resolve to what is inside the parent component
  //inn this case, its Icon. it was passed inside RecipeHeader
  return (
    <div className="recipe-fact-container">
      {children}
      <h3>{fact.amount}</h3>
      <p>{fact.category}</p>
    </div>
  );
}
