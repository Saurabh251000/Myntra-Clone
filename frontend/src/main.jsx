import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App";
import Bag from "./routes/Bag";
import ProductList, { FetchData } from "./routes/ProductList";
import WishList from "./routes/WishList";
import Profile from './routes/Profile';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import myntraStore from "./store";
import Login from "./componenets/Login";
import SignUp from "./componenets/SignUp";
import PersonalInfo from "./componenets/PersonalInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
        loader: FetchData,
        children: [
          {
            path : "/pinfo",
            element: <PersonalInfo />
          }
        ]
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile",
            element: <Login />,
          },
          {
            path: "/profile/sign-in",
            element: <Login />,
            // action: FormActionL,
          },
          {
            path: "/profile/sign-up",
            element: <SignUp />,
            // action: FormAction,
          },
        ],
      }
    ],
  },
  {
    path: "/bag",
    element: <Bag />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
