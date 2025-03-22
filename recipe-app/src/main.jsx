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

//added react router setup here
//RouterProvider defines the routes/paths and the components it should render

const router = createBrowserRouter(
  //defines paths and component to render
  //top Route is the parent component, the rest are children
  //used to achieve nested routing
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
