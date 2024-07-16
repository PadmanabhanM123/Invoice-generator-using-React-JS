import React, { createContext, useState } from 'react'
const InvoiceContext = createContext()
const InvoiceProvider = ({ children }) => {
  const [invoice, setInvoice] = useState({
    details: {clientName:"",date:""},
    items: []
  })
  const addItem = (item) => {
    setInvoice(prevInvoice => ({
      ...prevInvoice,
      items: [...prevInvoice.items, item]
    }));
  };

  const deleteItem = (index) => {
    setInvoice(prevInvoice => ({
      ...prevInvoice,
      items: prevInvoice.items.filter((i) => i !== index)
    }));
  };
  return (
    <InvoiceContext.Provider value={{ invoice, setInvoice,addItem,deleteItem }}>
      {children}
    </InvoiceContext.Provider>
  )
}
export { InvoiceContext, InvoiceProvider }
