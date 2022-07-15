import React from 'react'

const Homepage = ({user}) => {
    return (
        <>
            <h1>Welcome to Homepage which is only visible to 

                {user.name?(` ${user.name}`):"logged in user"}
            </h1>
        </>
    )
}
export default Homepage