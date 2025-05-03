import { Link } from 'react-router-dom'


export const Header = () => {


    

    return (
        <div className='header'>
            <div className='logo'>
                <img src="/cart.png" alt="cart" height="50" width="50"></img>
                <Link to={`/`}><h1>EZ-Shop</h1></Link>
            </div>
            <div className="links">
                <Link to={`/`}>Home</Link>
                <Link to={`/login`}>Login</Link>
            </div>
        </div>
    )

}