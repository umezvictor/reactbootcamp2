import CardList from "../components/CardList";
import Header from "../components/Header";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {
  //get the data from the custom hook here - cleaner approach
  const [recipes] = useFetchRecipes();

  return (
    <>
      <Header />
      <CardList recipes={recipes} />
    </>
  );
}
