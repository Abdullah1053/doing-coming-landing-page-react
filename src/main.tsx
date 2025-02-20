import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/pricing.css'
import './assets/header.css'
import "./assets/landing-page.css"
import { RouterProvider } from 'react-router-dom'
import router from './routing/routes.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
