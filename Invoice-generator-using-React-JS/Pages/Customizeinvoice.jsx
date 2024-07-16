
import React from 'react'
import { Link } from 'react-router-dom'
import ItemForm from '../Components/Itemform'
import ItemList from '../Components/Itemlist'

const CustomizeInvoice = () => {
  return (
    <div className='Custinvoice'>
      <ItemForm/>
      <ItemList/>
      <Link to="/view">
        <button>View Invoice</button>
      </Link>
    </div>
  )
}
export default CustomizeInvoice
