import React, { useContext } from 'react'
import PDFDownloader from '../Components/Pdf'
import InvoiceTable from '../Components/Invoicetable'
import { InvoiceContext } from '../Context/InvoiceContext'

const ViewInvoice = () => {
  const {invoice}=useContext(InvoiceContext)
  const calculateTotal=(item)=>{
    return item.quantity*item.amount
  }
  const calculateGrandTotal=()=>{
    return invoice.items.reduce((total,item)=>total+calculateTotal(item),0)
  }
  return (
    <div className='Viewinvoice'>    
      <h1>Invoice</h1>
      <div className='details'>
        <p><strong>Client Name:</strong> {invoice.details.clientName || 'N/A'}</p>
        <p><strong>Date:</strong> {invoice.details.date || 'N/A'}</p>
      </div>
      <InvoiceTable/>
      <div className='total'>
        <h2>Grand Total:{calculateGrandTotal()}</h2>
      </div>
      <PDFDownloader calculateGrandTotal={calculateGrandTotal}/>
    </div>
  )
}

export default ViewInvoice
