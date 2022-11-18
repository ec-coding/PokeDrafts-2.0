import React from 'react'

const Profile = ({ user }) => {
    return (
        <>
            <div class="profile-container">
                <div class="search-header-container">
                    <h2>Hello {user?.firstName}</h2>
                </div>
            </div>
            <div class="profile tab-content">

            </div>

        </>
    )
}

export default Profile;