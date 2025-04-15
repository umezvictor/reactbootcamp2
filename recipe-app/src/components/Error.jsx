import { Link } from "react-router-dom";
import emptyPlate from "../assets/no-food-found.png";
export default function Error({ message, explanation }) {
  return (
    <div className="not-found-container">
      <img src={emptyPlate} alt="" className="not-found-image" />
      <h1 className="not-found-header">
        {message ? message : "Recipe not found"}
      </h1>
      <p> {explanation ? explanation : "Something went wrong"}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
