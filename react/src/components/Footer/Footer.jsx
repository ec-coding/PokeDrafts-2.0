import React from 'react'
import './footer.css'

export default function Footer() {

    let isViewTransition =
        "Your browser does not support View Transitions API";
    if (document.startViewTransition) {
        isViewTransition = "Your browser supports View Transitions API";
    }

    return (
        <>
            <div id="footer-container">
                <div class="footer">
                    <p>Wizards of the Coast, Pokémon, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. © 1995-2023 Wizards. All Rights Reserved.</p>
                    <p>PokéDrafts is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC. PokéDrafts may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy. Pokémon® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at https://company.wizards.com/.</p>
                    <p>© 2022-2023 EC Web Design</p>

                    {isViewTransition}
                </div>
            </div>
        </>
    )
}