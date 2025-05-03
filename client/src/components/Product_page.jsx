import { useState, useEffect } from "react"
import {useParams, Link, useNavigate} from 'react-router-dom'


export const Product_page = ({products}) => {
const {id} = useParams()
const [product, setProduct] = useState(null)
const [popup, setPopup] = useState(false)
const navigate = useNavigate()

useEffect(()=> {
    if (!product) {
        setProduct(products.find((one)=> one._id == id))
    }
}, [product])


function purchaseProduct(e) {
    e.preventDefault()
    console.log("purchasing", e.target.quantity.value, "items")
    navigate(`/profile/11`)
}


    return (
        <>
        {!product? <p>Loading</p>:
            (<div className="product-con">
                {popup &&(
                <div className="overlay">
                    <div className="popup">
                        <h2>Purchase</h2>
                        <form onSubmit={purchaseProduct}>    
                        <label htmlFor="quantity">Select quantity (3 in stock)</label>
                        <input type="number" name="quantity" id="" min="1" max="3" placeholder="1" />
                        <div className="btns">
                            <input type="submit" value="Purchase" />
                            <button onClick={()=>{ setPopup(false)}}>Cancel</button>
                        </div>
                        </form>
                    </div>
                </div>
                )}
            <img src={`/duck.jpg`} width="300"></img>
            <div className="info">
                <h1>{product.name}</h1>
                <p className="bold">${product.price}</p>
                <div className="line">
                    <p className="bold">Color: {product.color}</p>
                    <p className="bold">Category: {product.category}</p>
                </div>
                <p>{product.desc}</p>
                <button onClick={()=> {setPopup(true)}} className="buy-btn">Purchase</button>
                <Link to={`/store/${product.creator_id}`}>Seller's Other Products</Link>
            </div>
        </div>
        )}
    </>
    )

}