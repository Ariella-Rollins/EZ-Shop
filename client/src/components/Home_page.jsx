import { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAllProducts } from '../services/product.service'


export const Home_page = ({products, setProducts}) => {
    const navigate = useNavigate()


    // useEffect(()=> {
    //         const fetchProducts = async()=> {
    //             try {
    //                 const all = await getAllProducts()
    //                 setProducts(all)
    //             }
    //             catch (err) {
    //             console.log("fetch err", err)
    //             }  
    //         }
    //         fetchProducts()
    //     }, [])

    return (
        <>
        <h1>Newest Products</h1>
        <form className='filter'>
            <select name="category">
                <option>Category</option>
                <option>Clothes</option>
                <option>Accessories</option>
                <option>Beauty/health</option>
                <option>Home</option>
                <option>Electronics</option>
                <option>Kitchen</option>
                <option>Toys/games</option>
                <option>Pets</option>
                <option>Outdoors</option>
                <option>Other</option>
            </select>
            <input type="submit" value="Filter"></input>
        </form>
        <div className='home-con'>
            {products.map((one, index)=> (
            <div className="product" key={index}>
                <Link to = {`/product/${one._id}`} ><img src="/duck.jpg" height="150" width="150"></img></Link>
                <div>
                    <h2>{one.name}</h2>
                    <p>${one.price}</p>
                    <div className="cmd-btns">
                        <button onClick={()=>{navigate(`/product/${one._id}`)}} className='btn3 view'>View</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </>
    )

}