import React,{ useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Main from './views/Main'
import Detail from './components/Detail'
import Update from './components/Update'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<Detail/>} path="/product/:id"/>
          <Route element={<Update/>} path="/product/edit/:id"/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
