import { useState, useEffect } from "react"
import {useParams, Link, useNavigate} from 'react-router-dom'
import { useLogin } from "../context/userContext"
import { deleteProduct, getAllProducts } from "../services/product.service"
import { getAllUsers } from "../services/user.service"

export const Store_page = ({users, setUsers, products, setProducts}) => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const [userProducts, setUserProducts] = useState(null)
    const navigate = useNavigate()
    const { isLoggedIn, logout:userLogout, setLoggedInData, loggedInData } = useLogin()
    
    // fetch users and products if there aren't any.
    useEffect(()=> {
        if (users.length == 0) {
            console.log("fetching users")
            const fetchUsers = async()=> {
                try {
                    const all = await getAllUsers()
                    console.log("all users", all)
                    setUsers(all)
                }
                catch (err) {
                    console.log("fetch user err", err)
                    }
            }
        fetchUsers() 
        }
        if (!products || products?.length == 0) {
            const fetchProducts = async()=> {
                try {
                    const all = await getAllProducts()
                    console.log("all products", all)
                    setProducts(all)
                }
                catch (err) {
                console.log("fetch product err", err)
                }  
            }
            fetchProducts()
        }
    }, [users])

    // set user if haven't already
    useEffect(()=> {
        if (users.length > 0) {
            if (!user) {
                console.log("fetching user", users)
                setUser(users.find((one)=> one._id == id))
            }
        }
    }, [user, users])

    // set user's products
    useEffect(()=> {
        if (user && products) {
            console.log("setting products")
            setUserProducts(products.filter((one)=> one.creator_id == id))
        }
    }, [user, products])



    function removeProduct(id) {
        deleteProduct(id)
        .then(()=> {
            fetchProducts()
        })
    }

    return (
        <div>
            {!user? <p>Loading</p>:
            <div>
                <div className="title">
                    <h1>{user.fname}'s Store</h1>
                    {loggedInData._id == user._id && <Link to={`/product/new`} className="add-product">Add product</Link>}
                </div>
                <div className="home-con">
                {!userProducts || userProducts.length==0? <p className="box1">No products yet</p>:
                userProducts.map((one, index)=> (
                    <div className="product" key={index}>
                        <Link to = {`/product/${one._id}`} ><img src={ one.pic1?`${one.pic1}`: '/no-pic.jpg'} height="150" width="150"></img></Link>
                        <div>
                            <h2>{one.name}</h2>
                            <p>${one.price}</p>
                            <div className="cmd-btns">
                                <button onClick= {()=>{navigate(`/product/${one._id}`)}} className='btn3 view'>View</button>
                                { loggedInData._id == user._id && 
                                <><button onClick= {()=>{navigate(`/product/${one._id}/edit`)}} className='btn3 edit'>Edit</button>
                                <button onClick={()=> {removeProduct(one._id)}} className='btn3 delete'>Delete</button>
                                </>}
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