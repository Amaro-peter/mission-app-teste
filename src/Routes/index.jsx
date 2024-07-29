import {createBrowserRouter} from "react-router-dom";
import Login from "../Pages/Login";
import RegisterSupporter from "../Pages/RegisterSupporter";
import RegisterMissionary from "../Pages/RegisterMissionary";
import Home from "../Pages/Home";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, 
    },
    {
      path: "/registerSupporter",
      element: <RegisterSupporter />,
    },
    {
      path: "/registerMissionary",
      element: <RegisterMissionary />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);