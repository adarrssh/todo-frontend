import React, { useState } from 'react'
import axios from "axios";
import "./Register.css";
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
var validator = require("email-validator");


const Register = () => {
    const Navigate=useNavigate()
    const [load, setLoad] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    if (load) {
        console.log("loag");
        return (<Loading />)
    }


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
    }


    //register function 
    const register = (e) => {
        e.preventDefault();
        setLoad(true)
        const { name, email, password } = user
        if (name && email && password) {
            if (validator.validate(email)) {
                axios.post("https://to-do-bk.herokuapp.com/register", user)
                    .then(res => {
                        alert(res.data.msg)
                        setLoad(false)
                    }
                    )
                    .catch(err => {
                        alert(err.response.data.error)
                        setLoad(false)
                    })
            } else {
                setLoad(false)
                alert('not a valid email');
            }
        }
        else {
            alert("invalid input")
            setLoad(false)

        };
    }


    return (
        <>
            <div className='r-body'>

                <div className='r-main' >
                    <div className='r-heading'>
                        <h1>Register</h1>
                    </div>
                    <div className="form-div">
                        <div className="inp">
                            <input type="text" name="name" value={user.name || ""} onChange={handleChange} placeholder="FullName" />
                        </div>
                        <div className="inp">
                            <input type="text" name="email" value={user.email || ""} onChange={handleChange} placeholder="Email" />
                        </div>
                        <div className="inp">
                            <input type="password" name="password" value={user.password || ""} onChange={handleChange} placeholder="password" />
                        </div>
                        <div className="inp">
                            <button className='submit' type="submit" onClick={register}>Register</button>
                            <button className='submit' type="submit" onClick={()=>Navigate('/login')}>Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Register