import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Analyze from "./pages/Analyze";
import News from "./pages/News";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/com",
    element: <Community />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign",
    element: <Signup />,
  },
  {
    path: "/analyze",
    element: <Analyze />,
  },
  {
    path: "/news",
    element: <News />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
