import axios from "axios";
import { useReducer } from "react";

//this is a custom custom hook
//this code can be referenced from any page that needs the saame data.
//instead of making the same api call several places
const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: {
    id: "8138",
  },
  headers: {
    "x-rapidapi-key": "8ac8209c1bmsh64cf06c6e5117f8p141112jsnaf3ed5e41603",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

//initial state of reducer
const initialState = {
  data: null,
  loading: false,
  error: null,
};

const Action = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_ERROR: "FETCH_ERROR",
};

//the _ means we don't really care about it
//the use reducer hook is going to pass it in
//state
const reducer = (_, action) => {
  switch (action.type) {
    case Action.FETCHING_DATA:
      return {
        data: null,
        error: null,
        loading: true,
      };
    case Action.FETCH_SUCCESSFUL:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case Action.FETCH_ERROR:
      return {
        data: null,
        error: action.payload,
        loading: false,
      };
    default:
      return initialState;
  }
};

const useFetchRecipe = () => {
  //dispatch dispatch fucntion
  //THIS is the reducer function: () => {}
  //when you pass it an action it will update the state
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchRecipe = async (id) => {
    dispatch({ type: Action.FETCHING_DATA });

    try {
      const requestOptions = { ...options };
      requestOptions.params.id = id;
      const response = await axios.request(requestOptions);

      dispatch({ type: Action.FETCH_SUCCESSFUL, payload: response.data });
    } catch (err) {
      console.error(err);

      dispatch({ type: Action.FETCH_ERROR, payload: err.message });
    }
  };

  //return data - this is reusable
  return [fetchRecipe, { data, loading, error }];
};

export default useFetchRecipe;
