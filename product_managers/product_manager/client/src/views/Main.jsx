import React,{useState} from "react";
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";

const Main = (props)=>{

    const [products, setProducts]=useState([]);
    const removeFromDom=(productId)=>{
        setProducts(products.filter(product=>product._id!=productId)); //sets array to include everything that dosent match the id were deleting so it dosent presit in state even when removed from db
    }//end removeFormDom

    return(
        <>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <ProductsList  products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </>
    )//end main return
}//end main
export default Main;