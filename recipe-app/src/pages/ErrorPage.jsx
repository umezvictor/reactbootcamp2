import Error from "../components/Error";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  //extract error message from react router
  const error = useRouteError();
  return (
    <div className="error-page">
      <Error message={error.statusText} explanation={error.data} />
    </div>
  );
}
