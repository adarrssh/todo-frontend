import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import Loading from '../Loading/Loading';
import Alert from 'react-bootstrap/Alert'


const Login = ({ setLoginUser, setLocalStorage }) => {
    const Navigate = useNavigate();
    const [load, setLoad] = useState(false)
    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    if (load) {
        return (
            <Loading />)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault();
        setLoad(true)
        const { email, password } = user

        if (email && password) {
            axios.post("https://to-do-bk.herokuapp.com/login", user)
                .then((res) => {
                    setLoad(false)
                    alert(res.data.msg);
                    setLoginUser(res.data.user)
                    setLocalStorage(res.data.user);
                    Navigate('/')
                })
                .catch((err) => {
                    setLoad(false)
                    console.log(err);
                    alert(err.response.data.error)
                })

        } else {
            alert('invalid input')
            setLoad(false)
        }
    }


    return (
        <>
            <div className='l-body' >
                <div className="l-main">
                    
                    <div className="l-heading">
                        <h1>Login</h1>
                    </div>
                    <div className="form-div">
                        <div className="inp">
                            <input type="text" name="email" value={user.email || ""} onChange={handleChange} placeholder="Email" />
                        </div>
                        <div className="inp">
                            <input type="password" name="password" value={user.password || ""} onChange={handleChange} placeholder="password" />
                        </div>
                        <div className="inp">
                            <button className='submit' type="submit" onClick={login}>login</button>
                            <p>Don't have an account? <span onClick={() => Navigate('/register')}>Register</span></p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Login