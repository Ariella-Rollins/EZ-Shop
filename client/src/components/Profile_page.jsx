import { useState, useEffect } from "react"
import {useParams, Link, useNavigate} from 'react-router-dom'
import { useLogin } from "../context/userContext"

export const Profile_page = ({users, products}) => {
    const [user, setUser] = useState(null)
    const {id} = useParams()
    const [purchases, setPurchases] = useState(null)
    const { isLoggedIn, logout:userLogout, setLoggedInData, loggedInData } = useLogin()
    const navigate = useNavigate()


    useEffect(()=> {
        if (!user) {
            console.log("users", users)
            setUser(users.find((one)=> (one._id == id)))
            console.log("getting user")
        }
    }, [user])

    // useEffect(()=> {
    //     if (loggedInData._id != id) {
    //         navigate("/")
    //     }
    //     else {
    //         console.log("user", loggedInData)
    //         console.log("purchases", purchases)
    //         const userProducts = []
    //         setPurchases(products.filter((one)=> {
    //             // need to revise purchases is an array of objects
    //             if (loggedInData.purchases.includes(one._id)) {
    //                 userProducts.push(one)
    //             }
    //             }))
    //         console.log(userProducts)
    //         setPurchases(userProducts)
    //     }
    // }, [loggedInData])

    return (
    <>
        {!user? <p>loading</p>:
            <div>
                <h1>{user.name}'s Profile</h1>
                <div className="con">
                    <div className="box1">
                        <h2>Purchase History</h2>
                        <p>Product 1</p>
                        {!purchases? <p>Loading</p>:
                        purchases.map((one, index)=> (
                            <div key={index}>
                                <p>{one.name}</p>
                            </div>
                        ))}

                    </div>
                    <div className="box2">
                        <h2>Store Stats</h2>
                        <p>0 products</p>
                        <p>0 sold</p>
                        <Link to={`/store/${user._id}`}>Visit Store</Link>
                    </div>
                </div>
                
            </div>
        
        }
        </>
    )
           
}