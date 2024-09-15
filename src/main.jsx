import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import './index.css';
import Main from './components/Main.jsx';
import Products from './components/Products.jsx'
import About from './components/About.jsx';
import Login from './components/Login.jsx'
import MyCalendar from './components/MyCalendar.jsx';

const router = createBrowserRouter
  (
    [
      {
        path: "/",
        element: <Layout />
        ,

        children: [{
          path: "about",
          element: <About />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "main",
          element: <Main />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "calendar",
          element: <MyCalendar />
        }
        ]
      }
    ]
  )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
