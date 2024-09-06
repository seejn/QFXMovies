import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CityProvider } from './context/CityContext.jsx'
import { BookingProvider } from './context/BookingContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CityProvider>
      <BookingProvider>
        <App />
      </BookingProvider>
    </CityProvider>
  </StrictMode>,
)
