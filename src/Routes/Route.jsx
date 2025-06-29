import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/Auth/SignUp";
import Login from "../Pages/Auth/Login";

const router = createBrowserRouter([
  { path: "/", Component: Root, children: [{ index: true, Component: Home }] },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/signup", Component: SignIn },
      { path: "/auth/login", Component: Login },
    ],
  },
]);

export default router;
