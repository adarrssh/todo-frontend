import React, { useState } from 'react'
import axios from "axios";
const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
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
        const { name, email, password } = user
        if (name && email && password) {
            axios.post("http://localhost:6969/register", user)
                .then(res => alert(res.data.msg))
                .catch(err=> alert(err.response.data.error))
        }
        else {
            alert("invalid input")
        };

    }
        return (
            <>
                <div >
                    <div>
                        Create a new account
                    </div>
                   
                    <div >
                        <form action="#">
                            <div>
                                <div>
                                    <input type="text" name="name" value={user.name || ""} onChange={handleChange} placeholder="FullName" />
                                </div>
                            </div>
                            <div>
                                <div >
                                    <input type="text" name="email" value={user.email || ""} onChange={handleChange} placeholder="Email" />
                                </div>

                            </div>
                            <div >
                                <div >
                                    <input type="password" name="password" value={user.password || ""} onChange={handleChange} placeholder="password" />
                                </div>
                            </div>
                            <div >
                                <button type="submit" onClick={register} >
                                    Register
                                </button>
                            </div>
                        </form>


                    </div>
                </div>

            </>
        )
    
}
export default Register