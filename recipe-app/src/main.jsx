import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import App from "./App";
import RecipePage from "./pages/RecipePage";
import ErrorPage from "./pages/ErrorPage";
import Ingredients from "./components/Ingredient";
import Instructions from "./components/Instruction";

//added react router setup here
//RouterProvider defines the routes/paths and the components it should render

const router = createBrowserRouter(
  //defines paths and component to render
  //top Route is the parent component, the rest are children
  //used to achieve nested routing
  ///recipe/:id  :id isfor dynamic links
  //errorElement for handling page not found 404 page
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe/:id" element={<RecipePage />}>
        <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
        <Route path="/recipe/:id/instructions" element={<Instructions />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
