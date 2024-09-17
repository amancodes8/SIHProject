import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import './index.css';
import Heritage from './components/Heritage.jsx';

import Culture from './components/Culture.jsx';
import Home from './components/Home.jsx';
import Festivals from './components/Festivals.jsx';

const router = createBrowserRouter
  (
    [
      {
        path: "/",
        element: <Layout />
        ,

        children: [{
          path: "home",
          element: <Home />
        },
        {
          path: "Culture",
          element: <Culture />
        },
       
        {
          path: "festivals",
          element: <Festivals />
        },
       
      
        {
          path: "heritage",
          element: <Heritage />
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
