import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from './productSlice';

const CreateProduct = ({productToEdit = {}, isEdit = false, resetForm}) => {
    // console.log(productToEdit)
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        title: "",
        price:"",
        description: "",
        category: "",
    });
    // console.log(product)
    useEffect(() => {
        if(productToEdit){
            setProduct({
                title: productToEdit.title ?? "",
                price: productToEdit.price ?? "",
                description:  productToEdit.description ?? "",
                category:  productToEdit.category ?? "",
            })
        }
    }, [productToEdit])
    

    const handleChange = (e) => {
        setProduct({
            ...product,
                [e.target.name] : e.target.value,
            
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
       if(isEdit){
        dispatch(updateProduct({id: productToEdit.id, product: product}));
        resetForm();
       }else{
        dispatch(createProduct({...product, id: nanoid()}));
       }
       setProduct({
            title: "",
            price:"",
            description: "",
            category: "",
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input name='title' type="text" value={product.title} onChange={handleChange} required />
        </div>
        <div>
            <label>Price</label>
            <input name='price' type="number" value={product.price} onChange={handleChange} required />
        </div>
        <div>
            <label>Description</label>
            <textarea name='description' value={product.description} onChange={handleChange}></textarea>
        </div>
        <div>
            <label>Category</label>
            <input name='category' type="text" value={product.category} onChange={handleChange} required />
        </div>
        <button type='submit'>{isEdit ? "Update Product" : "Create Product"}</button>
    </form>
  )
}

export default CreateProduct