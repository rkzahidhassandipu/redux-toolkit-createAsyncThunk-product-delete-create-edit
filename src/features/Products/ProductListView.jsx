import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { deleteProduct, fetchProducts, updateProduct } from './productSlice';



const ProductListView = ({onHandleSetProductToEdit}) => {
    const {products, isloading, error} = useSelector((state) => state.productsR);
    

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchProducts());
    }, [dispatch]);

    const handleEdit = (product) => {
        onHandleSetProductToEdit(product)
    }


    
  return (
    <div>
        {isloading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isloading && !error && products && products.length > 0 && (
            <section className='products'>
                {
                products.map((product) => {
                    return <article key={product.id}>
                       <div className="product-info">
                            <h3>{product.title}</h3>
                            <p><b>Description: </b>{product.description}</p>
                            <p>Price: $ {product.price}</p>
                            <strong>Category: {product.category}</strong>
                       </div>
                        <div className="btn">
                            <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                            <button  onClick={() => handleEdit(product)}>Edit</button>
                        </div>
                    </article>
                })
                }
            </section>
        )}
    </div>
  )
}

export default ProductListView