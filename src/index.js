import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddWilder from './pages/AddWilder';
import ModifyWilder from './pages/ModifyWilder';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/add",
    element: <AddWilder/>,
    errorElement: <ErrorPage />,
  },
  {
    path:"/modify",
    element: <ModifyWilder/>,
    errorElement: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
