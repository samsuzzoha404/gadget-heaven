import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Layout from "../Layout/Layout";
import ProductDetail from "../components/ProductDetail";
import Error from "../Pages/Error";
import Offer from "../Pages/Offer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../gadget.json"),
      },
      {
        path: "/statistics",
        loader: () => fetch("../gadget.json"),
        element: <Statistics></Statistics>,
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "detail/:id",
        loader: () => fetch("../gadget.json"),
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
    ],
  },
]);
export default routes;
