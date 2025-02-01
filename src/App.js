import React from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import PortfolioMain from "./components/Protfolio/Portfolio-main";
import Blogs from "./components/Blogs/Blogs"

import ServicesMain from "./components/Services/services-main";




function App() {
  const router = createBrowserRouter([
    {path: "/",
    element: <Home/>
    },
    {
      path: "/portfolio",
      element: <PortfolioMain/>


    },
    {
      path: "/services",
      element: <ServicesMain/>


    },
    {
path: '/blogs',
element : <Blogs/>


    }

  ])
  return (
  <>
  <RouterProvider router={router}/>

  
  </>
  
  );
}

export default App;
