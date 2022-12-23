import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import BreedDetail from "./routes/BreedDetail";
import {BreedsLoader, SingleBreedLoader} from "./util/breeds-loader";
import RootLayout from "./components/UI/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
        loader: BreedsLoader,
      },
      {
        path: "/breed",
        element: <BreedDetail />,
        loader: request => SingleBreedLoader(request),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
