import { useState, useEffect } from "react"
import {useParams, Link, useNavigate} from 'react-router-dom'

export const Store_page = ({users, products}) => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const [userProducts, setUserProducts] = useState(null)
    const navigate = useNavigate()

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
                    <Link to={`/product/new`} className="add-product">Add product</Link>
                </div>
                <div className="home-con">
                {!userProducts? <p>None yet</p>:
                userProducts.map((one, index)=> (
                    <div className="product" key={index}>
                        <Link to = {`/product/${one._id}`} ><img src="/duck.jpg" height="150" width="150"></img></Link>
                        <div>
                            <h2>{one.name}</h2>
                            <p>${one.price}</p>
                            <div className="cmd-btns">
                                <button onClick= {()=>{navigate(`/product/${one._id}`)}} className='btn3 view'>View</button>
                                <button onClick= {()=>{navigate(`/product/edit/${one._id}`)}} className='btn3 edit'>Edit</button>
                                <button onClick={()=> {deleteProduct(one._id)}} className='btn3 delete'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            }
            
        </div>
    )

}