import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Playing from "@/pages/Playing";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/playing/:key",
    element: <Playing />,
  },
]);

export default routers;
