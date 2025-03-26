import { Link } from "react-router-dom";
//Link helps to prvent app refreshing, instead switches to the component you want to render
//it persists your state
export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
