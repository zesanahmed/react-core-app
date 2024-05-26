import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../layouts/DashboardLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
      ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            }
        ]
    }
  ]);