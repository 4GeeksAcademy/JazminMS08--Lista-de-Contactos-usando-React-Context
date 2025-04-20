import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { StoreProvider } from './hooks/useGlobalReducer'
import { ContactProvider } from "./context/ContactContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <ContactProvider>
        <RouterProvider router={router} />
      </ContactProvider>
    </StoreProvider>
  </React.StrictMode>
);
