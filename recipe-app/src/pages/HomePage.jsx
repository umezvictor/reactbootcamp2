import { useEffect } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {
  //get the data from the custom hook here - cleaner approach
  const [fetchRecipes, { data, loading, error }] = useFetchRecipes();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (searchText) => {
    if (searchText) {
      //.log("home page ", searchText);
      fetchRecipes(searchText);
    }
  };
  //because the state lives here, the function that updates it should also live here
  //that's why this is passed as a prop here <Header handleSearch={handleSearch} />
  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
      {error && <p>{error}</p>}
    </>
  );
}
