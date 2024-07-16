
import React from 'react'
const InvoiceForm = ({ details, setDetails, handleSubmit }) => {
  return (
    <form className='Invoiceform' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Client Name"
        value={details.clientName}
        onChange={(e) => setDetails({ ...details, clientName: e.target.value })}
      />
      <input
        type="date"
        value={details.date}
        onChange={(e) => setDetails({ ...details, date: e.target.value })}
      />
      <button type="submit">Next</button>
    </form>
  )
}

export default InvoiceForm
