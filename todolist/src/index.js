import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
 {
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/",
      element: <Home/>
     },
     {
      path: "contact",
      element: <Contact/>
     },
  ]
 },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
