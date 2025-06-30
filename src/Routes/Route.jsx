import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/Auth/SignUp";
import Login from "../Pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import AddEvent from "../Pages/AddEvent";
import MyEvent from "../Pages/MyEvent";
import ErrorPage from "../Pages/Error/ErrorPage";
import EventPage from "../Pages/Event/EventPage";
import EventDetails from "../Pages/Event/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <EventPage/>
          </PrivateRoute>
        ),
      },
      {
        path: "/addEvents",
        element: (
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/myEvent",
        element: (
          <PrivateRoute>
            <MyEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <EventDetails/>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/signup", Component: SignIn },
      { path: "/auth/login", Component: Login },
    ],
  },
  { path: "*", Component: ErrorPage },
]);

export default router;
