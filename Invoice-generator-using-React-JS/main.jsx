import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { InvoiceProvider } from './Context/InvoiceContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <InvoiceProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InvoiceProvider>
  </React.StrictMode>  
)
