import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Params, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import BreedDetail from "./routes/BreedDetail";
import breedsLoader from "./components/util/breeds-loader";
import RootLayout from "./components/UI/RootLayout";

type Breed = {
  id: string;
  name: string;
  description: string;
  vcahospitals_url: string;
  cfa_url: string;
  vetstreet_url: string;
}[];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
        loader: breedsLoader,
      },
      {
        path: "/breed/:name",
        element: <BreedDetail />,
        loader: breedsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
