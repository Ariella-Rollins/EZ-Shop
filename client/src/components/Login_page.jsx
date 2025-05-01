import { useNavigate } from 'react-router-dom'
// import { register, getUser } from '../services/user.service'
import { useState } from 'react'
import { useLogin } from '../context/UserContext'
// import { loginServer } from '../services/user.service'





    export const Login_page = () => {
        const navigate = useNavigate()
        const { login: loginClient, isLoggedIn, logout:userLogout, setLoggedInData, loggedInData } = useLogin()
        const [registerErrors, setRegisterErrors] = useState({})
        const [loginErrors, setLoginErrors] = useState("")





    


    return(
        <>
        <h1>Shop and Sell in One Place</h1>
        <div>
            <div className='box1'>
                <h2>Login</h2>
                <form>
                    <input type="text" name="email" id="" placeholder='Email Address'/>
                    <input type="password" name="pw" id="" placeholder='Password'/>
                </form>
            </div>
            <div className='box2'>
                <h2>Create Account</h2>
                <form>
                <input type="text" name="fname" id="" placeholder='First Name'/>
                <input type="text" name="lname" id="" placeholder='Last Name'/>
                <input type="text" name="email" id="" placeholder='Email Address'/>
                <input type="password" name="pw" id="" placeholder='Password' />
                </form>
                <p>Quick sign-up</p>

            </div>
        </div>
        </>
    )




    }