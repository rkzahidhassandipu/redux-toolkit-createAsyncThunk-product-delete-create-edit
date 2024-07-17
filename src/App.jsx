import React, { useState } from 'react'
import ProductListView from './features/Products/ProductListView'
import CreateProduct from './features/Products/CreateProduct'

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleSetProductToEdit = (product) => {
    setProductToEdit(product);
    setIsEdit(true);
  }
  const resetForm = () => {
    setProductToEdit(null);
    setIsEdit(false)
  }
  return (
    <div>
      <CreateProduct productToEdit={productToEdit} isEdit={isEdit} resetForm={resetForm} />
      <ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
    </div>
  )
}

export default App