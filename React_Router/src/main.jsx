import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Route/>,
    children: [
      {
        path : "",
        element: <Home/>
      } , 
      {
        path : "about",
        element: <About/>
      } , 
      {
        path : "contact",
        element: <Contact/>
      }
    ]
      
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
