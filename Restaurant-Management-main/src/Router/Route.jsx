import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllFood from "../Pages/AllFood/AllFood";
import Gallery from "../Pages/Gallery/Gallery";
import ErrorPage from "../Pages/Error/ErrorPage";
import SingleFood from "../Pages/Food/SingleFood";
import { getSingleFood } from "../api/foods";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import MyAddedFoodItems from "../Pages/Profile/MyAddedFoodItems/MyAddedFoodItems";
import AddFood from "../Pages/Profile/AddFood/AddFood";
import MyOrder from "../Pages/Profile/MyOrder/MyOrder";

export const Router = createBrowserRouter([
  // main route
    {
      path: "/",
      element: <MainLayout/>,
      // error page
      errorElement:<ErrorPage/>,
      // children route
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/all-foods',
          element:<AllFood/>
        },
        {
    path:'/all-foods/:id',
    element:<SingleFood/>,
    loader:({params}) => getSingleFood(params.id)
        },
        {
          path:'/gallery',
          element:<Gallery/>
        },
        {
          path:'/my-added-foods',
          element:<MyAddedFoodItems/>
        },
        {
          path:'/add-food',
          element:<AddFood/>
        },
        {
          path:'/my-ordered-foods',
          element:<MyOrder/>
        }
       
        ]
    },
    {
      path:'/sign-up',
 element:<SignUp/>
    },
    {
      path:'/login',
 element:<Login/>
    }
  ]);