import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import About from "./pages/About";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Errorpage from "./pages/Errorpage";

import CountryContextProvider from "./store/countryStore";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/countries",
          element: <Countries />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/countries/:id",
          element: <Country />,
        },
      ],
    },
  ]);

  return (
    <CountryContextProvider>
      <RouterProvider router={route}></RouterProvider>;
    </CountryContextProvider>
  );
}

export default App;
