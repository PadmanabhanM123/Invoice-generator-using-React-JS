
import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import { InvoiceProvider } from './Context/InvoiceContext';
import CreateInvoice from './Pages/Createinvoice';
import CustomizeInvoice from './Pages/Customizeinvoice';
import ViewInvoice from '../Project/src/Pages/Viewinvoice';
import "./App.css"

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<CreateInvoice/>} />
          <Route path="/customize" element={<CustomizeInvoice/>} />
          <Route path="/view" element={<ViewInvoice/>} />
        </Routes>
  )
}

export default App

