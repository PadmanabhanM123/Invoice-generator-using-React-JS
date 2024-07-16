import React, { useContext } from 'react'
import { InvoiceContext } from '../Context/InvoiceContext'

const InvoiceTable = () => {
  const { invoice } = useContext(InvoiceContext)
  const calculateTotalPerItem = (item) => {
    return item.quantity * item.amount;
  };
  return (
    <div className='Invoicetable'>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {invoice.items.map((item, index) => (
          <tr key={index}>
            <td>{item.description}</td>
            <td>{calculateTotalPerItem(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
export default InvoiceTable
