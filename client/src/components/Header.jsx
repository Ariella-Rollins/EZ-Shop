import { Link } from 'react-router-dom'


export const Header = () => {

    return (
        <div className='header'>
            <h1>EZ-Shop</h1>
            <Link to={`/`}>Home</Link>
            <Link to={`/login`}>Login</Link>
        </div>
    )

}