import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tailwindcss/tailwind.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/errors/ErrorPage.jsx'
import Backend from './components/defaults/backend.jsx'
import Client from './components/defaults/client.jsx'
import Blogs from './views/dashboard/blogs.jsx'
import Profile from './views/dashboard/profile.jsx'
import Home from './views/dashboard/home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Client/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'dashboard',
    element: <Backend/>,
    children: [
      {
        path: 'dashboard',
        element: <Home/>,
      },
      {
        path: 'blogs',
        element: <Blogs/>,
      },
      {
        path: 'profiles',
        element: <Profile/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
