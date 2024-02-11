import React,{useEffect,useState} from "react";
import axios from 'axios';


const Pokemon=(props)=>{
    const [pokemon,setPokemon]=useState([])
    useEffect(()=>{
        axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res=>{
            console.log(res.data)
            setPokemon((res.data.results))
        })
        .catch((err)=>console.log(err))
    },[])

    return(
        <>
        <h3>Pokemon List</h3>
        {pokemon.map((pokemon=>
        <ul key={pokemon.id}>{pokemon.name.toUpperCase()}</ul>))}
        </>
    )
}
export default Pokemon;