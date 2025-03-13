/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider routes={routes} />
  </StrictMode>,
)
