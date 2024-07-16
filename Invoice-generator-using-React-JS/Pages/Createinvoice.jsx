import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InvoiceContext } from '../Context/InvoiceContext'
import InvoiceForm from '../Components/Invoiceform'

const CreateInvoice = () => {
  const { setInvoice } = useContext(InvoiceContext)
  const [details, setDetails] = useState({ clientName: '', date: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setInvoice(prevState => ({
      ...prevState,
      details
    }))
    navigate('/customize')
  }

  return (
    <div className='Createinvoice'>
      <h1>Create Invoice</h1>
      <InvoiceForm details={details} setDetails={setDetails} handleSubmit={handleSubmit} />
    </div>
  )
}
export default CreateInvoice
