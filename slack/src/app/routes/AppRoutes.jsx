import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/home";
import { useEffect } from "react";
import { currentLoggedInEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoutes from "../protectedRoutes/PublicRoutes";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
const AppRoutes = () => {
  let dispatch = useDispatch();
   useEffect(()=>{
     (()=>{
     dispatch(currentLoggedInEmployee())
     })()

   },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [{
            path: "",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          }
          ]
        }
      ]
    },

    {
      path: "/home",
      element:<ProtectedRoute />,
      children: [
        {
          path: "",
            element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
       ],
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;