import { useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { getAllQuizzes } from '../services/quiz.service'


export const Home_page = ({products}) => {

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
                    <Link to = {`/product/${one._id}`} className='view'>View</Link>
                </div>
            </div>
            ))}
        </div>
        </>
    )

}