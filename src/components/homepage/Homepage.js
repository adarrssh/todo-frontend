import React from 'react'

const Homepage = ({user}) => {

    console.log(user._id);
    return (
        <>
            <h1>Welcome to Homepage which is only visible to  {user.name}</h1>
        </>
    )
}
export default Homepage