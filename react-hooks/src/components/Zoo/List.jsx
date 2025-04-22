import { useState, useCallback } from "react";
import _ from "lodash";
import Search from "./Search";

const allAnimals = ["elephant", "tiger", "rhino", "monkey", "snake"];
export default function List() {
  const [animals, setAnimals] = useState(allAnimals);

  const handleChange = useCallback((text) => {
    setAnimals(
      allAnimals.filter((animal) => animal.toLocaleLowerCase().includes(text))
    );
  }, []);

  //anytime we cause a rerender, it will create a new instance of handleChange method
  //which will in turn be passed down to the prop in the Search component below
  //thereby causing it to rerender
  //this is prevented using useCallback hook

  return (
    <div>
      <button onClick={() => setAnimals(_.shuffle(animals))}>Shuffle</button>
      <Search onChange={handleChange} />
      <ul>
        {animals.map((animal, index) => (
          <li key={animal}>
            {index + 1}. {animal}
          </li>
        ))}
      </ul>
    </div>
  );
}
