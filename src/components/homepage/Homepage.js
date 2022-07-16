import React from 'react'
import { useNavigate } from 'react-router-dom';
const Homepage = ({user}) => {

    const Navigate = useNavigate();

    const logout=()=>{
        window.localStorage.clear();
        Navigate('/register');

        
    }

    return (
        <>
            <h1>Welcome to Homepage which is only visible to 

                {user.name?(` ${user.name}`):"logged in user"}
            </h1>

            <button onClick={logout}>logout</button>
        </>
    )
}
export default Homepage