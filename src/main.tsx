import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginComponent from './components/Auth/LoginComponent.tsx'
import RegistrationComponent from './components/Auth/RegistrationComponent.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <div>404 Not Found</div>,
  children: [
    {
      path: '/',
      element: <LoginComponent />,
    },
    {
      path: 'login',
      element: <LoginComponent />,
    },
    {
      path: 'register',
      element: <RegistrationComponent />,
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
