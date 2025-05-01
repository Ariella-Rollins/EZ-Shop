import { useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { getAllQuizzes } from '../services/quiz.service'


export const Home_page = ({products}) => {

    return (
        <>
        <h1>Newest Products</h1>
        <div>
            {products.map((one, index)=> (
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
        </>
    )

}