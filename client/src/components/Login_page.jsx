import { useNavigate } from 'react-router-dom'
import { register, getUser } from '../services/user.service'
import { useState } from 'react'
import { useLogin } from '../context/userContext'
import { loginServer } from '../services/user.service'

export const Login_page = () => {
    const navigate = useNavigate()
    const { login: loginClient, isLoggedIn, logout:userLogout, setLoggedInData, loggedInData } = useLogin()
    const [registerErrors, setRegisterErrors] = useState({})
    const [loginErrors, setLoginErrors] = useState("")

const handleRegister = e => {
    e.preventDefault()
    let { name, email, pw, cpw } = e.target
            name = name.value
            email = email.value 
            const password = pw.value
            const confirmPassword = cpw.value 
            register({name, email, password, confirmPassword,}) //cookie/jwt is sent from server when registering
                .then( (res)=>{ 
                    loginClient() //Now set login to true client side for tracking
                    getUser(res.data._id)
                    .then(data => {
                        setLoggedInData(data) // gets logged in user's data.
                    })
                    navigate('/') 
                })
                .catch( errors => {
                    setRegisterErrors( errors ) } )
}

const handleLogin = e => {
    e.preventDefault()
    let { email, pw} = e.target
    loginServer( {email: email.value, password: pw.value} )
    .then((res)=>{ 
        loginClient() //Now set login to true client side for tracking
        getUser(res)
        .then(data => {
            setLoggedInData(data) // gets logged in user's data.
        })
        navigate('/') 
    })
    .catch ((err)=> {
        setLoginErrors(err)
    })
}


    return(
        <>
        <h1>Shop and Sell in One Place</h1>
        <div className='login-con'>
            <div className='col1'>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    {loginErrors&& <p className='errors'>{loginErrors}</p>}
                    <input type="text" name="email" id="" placeholder='Email Address'/>
                    <input type="password" name="pw" id="" placeholder='Password'/>
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className='col2'>
                <h2>Create Account</h2>
                <form onSubmit={handleRegister}>
                {registerErrors&& <p className='errors'>{registerErrors}</p>}
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