import { useState, useEffect } from "react"
import {useParams, Link} from 'react-router-dom'

export const Store_page = ({users, products}) => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const [userProducts, setUserProducts] = useState(null)

    useEffect(()=> {
        if (!user) {
            setUser(users.find((one)=> one._id == id))
        }
    }, [user])

    useEffect(()=> {
        if (user) {
            setUserProducts(products.filter((one)=> one.creator_id == id))
        }
    }, [user])

    return (
        <div>
            {!user? <p>Loading</p>:
            <div>
                <div className="title">
                    <h1>{user.name}'s Store</h1>
                    <Link to={`/product/new`}>Add product</Link>
                </div>
                {!userProducts? <p>None yet</p>:
                userProducts.map((one, index)=> (
                    <div className="product" key={index}>
                        <Link to = {`/product/${one._id}`} ><img src="/duck.jpg" height="150" width="200"></img></Link>
                        <Link to = {`/product/${one._id}`}>
                            <h2>{one.name}</h2>
                            <p>${one.price}</p>
                            <p>Color: {one.color}</p>
                            <p>Size: {one.size}</p>
                            <button>View</button>
                    </Link>
                    </div>
                ))}
            </div>
            }
        </div>
    )

}