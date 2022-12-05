import React from 'react'

const Profile = ({ user }) => {
    return (
        <>
            <div class="profile-container">
                <div class="search-header-container">
                    <h2>Profile</h2>
                </div>
            </div>
            <div class="profile tab-content">
            <h2>Hello {user?.firstName}</h2>

        <h3>Avatar</h3>
        <h3>Decks</h3>
        <h3>Registered Since</h3>
        <h3>Total Cards</h3>

            </div>
        </>
    )
}

export default Profile;