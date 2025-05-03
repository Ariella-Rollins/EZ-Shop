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
        <div className='login-con'>
            <div className='col1'>
                <h2>Login</h2>
                <form>
                    <input type="text" name="email" id="" placeholder='Email Address'/>
                    <input type="password" name="pw" id="" placeholder='Password'/>
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className='col2'>
                <h2>Create Account</h2>
                <form>
                <div className="names">
                    <input type="text" name="fname" id="" placeholder='First Name'/>
                    <input type="text" name="lname" id="" placeholder='Last Name'/>
                </div>
                <input type="text" name="email" id="" placeholder='Email Address'/>
                <input type="password" name="pw" id="" placeholder='Password' />
                <input type="submit" value="Sign-up" />
                </form>
                

            </div>
        </div>
        </>
    )




    }