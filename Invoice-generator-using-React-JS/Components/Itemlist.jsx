import React, { useContext } from 'react'
import { InvoiceContext } from '../Context/InvoiceContext'
const ItemList = () => {
  const { invoice ,deleteItem} = useContext(InvoiceContext)
  return (
    <div className='Itemlist'>
      <h2>Items List</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Amount per Unit</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.amount}</td>
              <td>{item.amount * item.quantity}</td>
              <td>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ItemList
