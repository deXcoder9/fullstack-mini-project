import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Authentication from "../pages/authentication/Authentication";
import PrivateRoute from "./PrivateRoute";


 export const router = createBrowserRouter([
   {
     path:"/authentication",
     element:<Authentication />
   },
    {
      path: "/",
      element: <PrivateRoute> <Main></Main> </PrivateRoute>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);