import React, { useContext, useState } from 'react'
import { InvoiceContext } from '../Context/InvoiceContext'

const ItemForm = () => {
  const { addItem } = useContext(InvoiceContext)
  const [item, setItem] = useState({ description: '', amount: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
    setItem({ description: '',quantity:1,unit:'numbers',amount:0 })
  }
  const handleQuantityChange = (e) => {
    const value = parseFloat(e.target.value);
    setItem({ ...item, quantity: value });
  };

  const handleUnitChange = (e) => {
    const value = e.target.value;
    setItem({ ...item, unit: value });
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setItem({ ...item, amount: value });
  };

  return (
    <form className='Itemform' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Description"
        value={item.description}
        onChange={(e) => setItem({ ...item, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <select value={item.unit} onChange={handleUnitChange}>
        <option value="kg">kg</option>
        <option value="ltr">ltr</option>
        <option value="numbers">numbers</option>
      </select>
      <input
        type="number"
        placeholder="Amount for Single Quantity"
        value={item.amount}
        onChange={handleAmountChange}
      />
      <button type="submit">Add Item</button>
    </form>
  )
}
export default ItemForm
