import axios from "axios";
import { useState } from "react";

//this is a custom custom hook
//this code can be referenced from any page that needs the saame data.
//instead of making the same api call several places
const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },
  headers: {
    "x-rapidapi-key": "8ac8209c1bmsh64cf06c6e5117f8p141112jsnaf3ed5e41603",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};
const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchText) => {
    setLoading(true);
    setRecipes(null);
    setError(null);
    try {
      const requestOptions = { ...options };
      //add search text to options if available
      if (searchText) {
        //the api takes param called q for searching
        requestOptions.params.q = searchText;
      }
      //console.log(requestOptions);
      const response = await axios.request(requestOptions);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  //return data - this is reusable
  return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;
