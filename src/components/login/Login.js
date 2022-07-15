import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = ({setLoginUser}) => {;
    const nav = useNavigate()
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:6969/login", user)
            .then((res)=>{
               alert(res.data.msg);
               setLoginUser(res.data.user)
               nav("/")
            })
            .catch((err)=>{
                console.log(err);
                alert(err.response.data.msg)
            })
        }

    
    return (
        <>
            <div >
                <div >
                    Login To Your Account
                </div>
                <div className="mt-8">
                    <form autoComplete="off">
                        <div >
                            <div >

                                <input type="text" name="email" value={user.email || ""} onChange={handleChange} placeholder="Your email" />
                            </div>
                        </div>
                        <div>
                            <div>


                                <input type="password"  name="password" value={user.password || ""} onChange={handleChange} placeholder="Your password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" onClick={login}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>

        </>
    )
}
export default Login