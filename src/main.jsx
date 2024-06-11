import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Layout from "./Layout/Layout.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Help from "./pages/help/Help.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import ThemeConfig from "./components/ThemeConfig/ThemeConfig.jsx";
import SettingLayout from "./Layout/SettingLayout.jsx";
import InfoConfig from "./components/ThemeConfig/InfoConfig.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <Help />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
  {
    path: "/settings",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <SettingLayout />,
        children: [
          {
            path: "",
            element: <InfoConfig />,
          },
          {
            path: "theme",
            element: <ThemeConfig />,
          },
        ],
      },
    ],
  },
  // {
  //   path: "/settings",
  //   element: <SettingLayout />,
  //   children: [
  //     {
  //       path: "/settings",
  //       element: <InfoConfig />,
  //     },
  //     {
  //       path: "/settings/theme",
  //       element: <ThemeConfig />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
