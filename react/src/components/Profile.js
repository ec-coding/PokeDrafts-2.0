import React from 'react'

const Profile = ({ user }) => {
    return (
        <>
            <div class="profile-container">
                <h1>Hello {user?.firstName}</h1>
                <p>
                    You are viewing this page because you are logged in or you just signed up
                </p>
            </div>

        </>
    )
}

export default Profile;