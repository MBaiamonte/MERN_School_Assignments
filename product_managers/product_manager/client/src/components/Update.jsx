import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";


const Update=(props)=>{
    const {id}=useParams();
    const [title, setTitle]=useState();
    const [price, setPrice]=useState();
    const [description, setDescription]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res=>{
                console.log(res)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })//end then
            .catch(err=>console.log(err))
    },[])//end useEffect

    const updateProductFormHandler=(e)=>{
        e.preventDefault();
        axios.patch('http://localhost:8000/api/product/'+id,{title, price, description})
            .then(res=>{
                console.log(res)
                navigate("/")
            })//end then
            .catch(err=>console.log(err))
    }//end update handler


    return(
        <>
            <h2>Edit Product</h2>
            <form onSubmit={updateProductFormHandler}>
                <div>
                    <label>Product Name:</label>
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type='textarea' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Update Product"/>
            </form>

        </>
    )//end return
}//end update
export default Update;