import React,{useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = (props)=>{
    const {id} =useParams(); //pull the id value from path
    const [product,setProduct]=useState({}) //setting it to an empty object 
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })//end then
        .catch((err)=>{
            console.log(err)
        })
    }, [])//end use effect

    const deleteHandler=(e)=>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res)=>{
                console.log(res)
                navigate("/")
            })
    }

return(
    <>
        <h3> Title: {product.title}</h3>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={e=>navigate("/")}>Home</button>
    
    </>
)

}
export default Detail;