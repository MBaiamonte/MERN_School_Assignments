import React,{useState} from 'react';
import {BrowserRouter,Link, Routes, Route} from "react-router-dom";
import { useParams } from 'react-router-dom';
import './App.css'

function App() {
const {input}=useParams();

  const Home=(props)=>{
    return(
      <div>
        <h2>Welcome to the Home Page</h2>
      </div>
    );
  };
  // const Number = (props)=>{
  //   return(
  //     <div>
  //       <h3>The Number is {num}</h3>
  //     </div>
  //   );
  // };
  const Sayings=(props)=>{
    const {input,textColor,backgroundColor}=useParams();
    return(
      <div>
        {isNaN(input)?
        <h3 style={textColor?{color: textColor, backgroundColor:backgroundColor}:undefined }>This is the number: {input}</h3>:
        <h3>This is the number: {input}</h3>}
      </div>
    )
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:input" element={<Sayings/>}/>
          <Route path="/:input/:textColor" element={<Sayings/>}/>
          <Route path="/:input/:textColor/:backgroundColor" element={<Sayings/>}/>
          {/* <Route path="/:num" element={<Number/>}/> */}
        </Routes>
      
      </BrowserRouter>
    </>
  )
};

export default App;
