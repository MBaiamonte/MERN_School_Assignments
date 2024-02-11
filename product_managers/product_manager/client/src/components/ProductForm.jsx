import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const PersonForm = (props)=>{

//start state vars
    const {products, setProducts}=props;
    const [title, setTitle]= useState("");
    const [price, setPrice]=useState("");
    const [description, setDescription]= useState("");
    const navigate=useNavigate();


//  start functions
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {title, price, description})
        .then(res=>{
            // console.log(res);
            console.log(res.data, "/////////////////////////////////////////");
            setProducts([...products, res.data.product])
            setTitle("")
            setPrice("")
            setDescription("")
        })//end then
        .catch(err=>console.log(err));
    }//end submit handler


    return(
        <>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Product Name:</label>
                    <input type='text'  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input type='text'value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type='textarea'  value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Create Product"/>
            </form>
        </>
    )//end return
}
export default PersonForm;