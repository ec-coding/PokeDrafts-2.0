import React from 'react'

const Profile = ({ user }) => {
    return (
        <>
            <div class="profile-body">
                <div class="profile-container">
                    <div class="profile">

                        <section class="profile-half">
                            <h2>Hello {user?.firstName}</h2>
                            <h3>Avatar</h3>
                        </section>

                        <section class="profile-half">
                            <h3>Decks</h3>
                            <h3>Registered Since</h3>
                            <h3>Total Cards</h3>
                        </section>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;