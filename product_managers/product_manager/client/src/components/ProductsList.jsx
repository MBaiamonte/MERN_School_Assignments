import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const ProductsList=(props)=>{
    const {removeFromDom, products, setProducts}=props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data)
                setProducts(res.data.products)
            })//end then 
            .catch((err)=>console.log(err))
    },[])//end useEffect

    const deleteProduct = (productId)=>{
        axios.delete('http://localhost:8000/api/product/'+ productId)
            .then(res=>{
                removeFromDom(productId)
            })//end then
            .catch(err=>console.log(err))
    }//end delete handler

return(
    <>
        {
            products.map((product, index)=>{
                return( // MUSt Have return statement or it'll just render blank
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <button>
                            <Link to={`/product/edit/${product._id}`}>Edit</Link>
                        </button>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                )//end map return
                
            })//end mapping of products
        }
    </>
    )//end return
}//end ProductList
export default ProductsList;