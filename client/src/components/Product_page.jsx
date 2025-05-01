import { useState } from "react"
import { useEffect} from "react"
import {useParams} from 'react-router-dom'


export const Product_page = ({products}) => {
const {id} = useParams()
const [product, setProduct] = useState(null)

useEffect(()=> {
    if (!product) {
        setProduct(products.find((one)=> one._id == id))
    }
}, [product])


    return (
        <>
        {!product? <p>Loading</p>:
        <div>
            <img src={`/duck.jpg`} height="200" width="300"></img>
            <div>
                <h1>{product.name}</h1>
                <p>${product.price}</p>
                <p>{product.color}</p>
            </div>
        </div>
        }
        </>
    )

}