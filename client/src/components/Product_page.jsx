import { useState, useEffect } from "react"
import {useParams, Link} from 'react-router-dom'


export const Product_page = ({products}) => {
const {id} = useParams()
const [product, setProduct] = useState(null)

const [buttonText, setButtonText] = useState("Purchase")

useEffect(()=> {
    if (!product) {
        setProduct(products.find((one)=> one._id == id))
    }
}, [product])


    return (
        <>
        {!product? <p>Loading</p>:
        <div className="product-con">
            <img src={`/duck.jpg`} height="200" width="300"></img>
            <div className="info">
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <p>{product.color}</p>
                <p>{product.desc}</p>
                <button onClick={()=> {setButtonText("Purchased");}}>{buttonText}</button>
                <Link to={`/store/${product.creator_id}`}>Seller's Other Products</Link>
            </div>
        </div>
        }
        </>
    )

}