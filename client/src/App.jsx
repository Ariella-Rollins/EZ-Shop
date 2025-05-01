import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import { Header } from './components/Header'
import {Home_page} from './components/Home_page'
import { Login_page } from './components/Login_page'
import { Profile_page } from './components/Profile_page'
import { Store_page } from './components/Store_page'
import { Add_product } from './components/Add_product'
import { Edit_product } from './components/Edit_product'
import { Product_page } from './components/Product_page'
import './App.css'

function App() {
  const [products, setProducts] = useState([{name:"Sure Shirt", price: 12, color:"brown", size:"small", _id:"1234"},
    {name:"Foo Foo food", price: 23, color: "tan", size: "medium", _id:"123"}
  ])
  const [userData, setuserData] = useState({})
  const [userProducts, setUserProducts] = useState({})


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home_page products={products}/>}/>
        <Route path="/login" element={<Login_page/>}/>
        <Route path="/profile/:id" element={<Profile_page/>}/>
        <Route path="/store/:id" element={<Store_page/>}/>
        <Route path="/product/new" element={<Add_product/>}/>
        <Route path="/product/:id" element={<Product_page products={products}/>}/>
        <Route path="/product/:id/edit" element={<Edit_product products={products}/>}/>
      </Routes>
    </>

  )
}

export default App
