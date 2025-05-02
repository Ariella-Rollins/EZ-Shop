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
  const [products, setProducts] = useState([
    {name:"Cool Shirt", price: 12, color:"brown", size:"small", _id:"123", creator_id: "12", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name:"Pink Shirt", price: 12, color:"pink", size:"small", _id:"1234", creator_id: "12", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name:"Emo Shirt", price: 12, color:"black", size:"small", _id:"12345", creator_id: "12", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name:"Foo Foo food", price: 10, color: "tan", size: "medium", _id:"456", creator_id: "11", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name:"Ducky food", price: 23, color: "tan", size: "medium", _id:"4567", creator_id: "11", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {name:"Chicken food", price: 13, color: "tan", size: "medium", _id:"45678", creator_id: "11", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
  ])
  const [users, setusers] = useState([{name: "john", _id: 12, purchases: ["45678", "1234"]}, {name: "jane", _id: 11} ])
  const [userData, setuserData] = useState({})
  const [userProducts, setUserProducts] = useState({})


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home_page products={products}/>}/>
        <Route path="/login" element={<Login_page/>}/>
        <Route path="/profile/:id" element={<Profile_page users={users} products={products}/>}/>
        <Route path="/store/:id" element={<Store_page users={users} products={products}/>}/>
        <Route path="/product/new" element={<Add_product/>}/>
        <Route path="/product/:id" element={<Product_page products={products}/>}/>
        <Route path="/product/:id/edit" element={<Edit_product products={products}/>}/>
      </Routes>
    </>

  )
}

export default App
