import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import PlaygroundPage from './routes/PlaygroundPage';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/Home",
    element: <HomePage />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/About",
    element: <AboutPage />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/Playground",
    element: <PlaygroundPage />,
    errorElement: <ErrorPage/>,
  },
])

function App() {
  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  );
}

export default App;
