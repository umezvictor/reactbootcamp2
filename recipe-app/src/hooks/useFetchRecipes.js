import axios from "axios";
import { useEffect, useState } from "react";

//this is a custom custom hook
//this code can be referenced from any page that needs the saame data.
//instead of making the same api call several places
const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
    //tags: "under_30_minutes",
  },
  headers: {
    "x-rapidapi-key": "8ac8209c1bmsh64cf06c6e5117f8p141112jsnaf3ed5e41603",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};
const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //return data - this is reusable
  return [recipes];
};

export default useFetchRecipes;
