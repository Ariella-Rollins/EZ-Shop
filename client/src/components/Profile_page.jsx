import { useState, useEffect } from "react"
import {useParams, Link} from 'react-router-dom'

export const Profile_page = ({users, products}) => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const [purchases, setPurchases] = useState(null)

    useEffect(()=> {
        if (!user) {
            setUser(users.find((one)=> one._id == id))
        }
    }, [user])

    useEffect(()=> {
        if (user) {
            console.log("user", user)
            console.log("products", products)
            const userProducts = []
            products.map((one)=> {
                if (user.purchases.includes(one._id)) {
                    userProducts.push(one)
                }
                })
            console.log(userProducts)
            setPurchases(userProducts)
        }
    }, [user])

    return (
        <>
        {!user? <p>Loading</p>:
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