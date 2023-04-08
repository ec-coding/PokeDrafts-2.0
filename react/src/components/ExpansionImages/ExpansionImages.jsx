import React from 'react'

export default function ExpansionImages(props) {

    if (props.cardSet !== undefined) {
        if (props.cardSet == 'base') {
            return (
                <>
                    <img src="https://i.imgur.com/q2YVnId.jpg" alt="base" />
                    <h4 class="bg-blue">Base Set</h4>
                </>
            )
        } else if (props.cardSet == 'jungle') {
            return (
                <>
                    <img src="https://i.imgur.com/WUVqIZa.jpg" alt="jungle" />
                    <h4 class="bg-blue">Jungle</h4>
                </>
            )
        }
    }

}