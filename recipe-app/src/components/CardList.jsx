import Card from "./Card";

// export const recipes = [
//   {
//     id: 1,
//     name: "Poke Bowls",
//     image:
//       "https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg",
//     tag: "Fancy dinner",
//     numberOfMinutes: 50,
//   },
//   {
//     id: 2,
//     name: "Pink Soup Bowls",
//     image:
//       "https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg",
//     tag: "Fancy dinner",
//     numberOfMinutes: 50,
//   },
//   {
//     id: 3,
//     name: "Banana cake",
//     image:
//       "https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg",
//     tag: "Fancy dinner",
//     numberOfMinutes: 30,
//   },
//   {
//     id: 4,
//     name: "Fish soup",
//     image:
//       "https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg",
//     tag: "Fancy dinner",
//     numberOfMinutes: 20,
//   },
// ];

export default function CardList({ recipes }) {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
