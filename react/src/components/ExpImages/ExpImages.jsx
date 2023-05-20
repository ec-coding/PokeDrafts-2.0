import React from 'react';
import './expImages.scss'

export default function ExpansionImages(props) {

    if (props.cardSet !== undefined) {
        if (props.cardSet == 'base') {
            return (
                <div class="expansion-image col-lg-6 col-md-6 col-sm-10 my-5">
                    <img src="https://i.imgur.com/q2YVnId.jpg" alt="base" className="booster-base booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Base Set</h4>
                </div>
            )
        } else if (props.cardSet == 'jungle') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/WUVqIZa.jpg" alt="jungle" className="booster-jungle booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Jungle</h4>
                </div>
            )
        } else if (props.cardSet == 'fossil') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/fzPnBJi.jpg" alt="fossil" className="booster-fossil booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Fossil</h4>
                </div>
            )
        } else if (props.cardSet == 'base-2') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/l4fcVLN.jpg" alt="base 2" className="booster-base-2 booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Base 2</h4>
                </div>
            )
        } else if (props.cardSet == 'team-rocket') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/Hj0RN6t.jpg" alt="team rocket" className="booster-team-rocket booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Team Rocket</h4>
                </div>
            )
        } else if (props.cardSet == 'gym-heroes') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/dk730u5.jpg" alt="gym heroes" className="booster-gym-heroes booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Gym Heroes</h4>
                </div>
            )
        } else if (props.cardSet == 'gym-challenge') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/tsM9xhr.jpg" alt="gym challenge" className="booster-gym-challenge booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Gym Challenge</h4>
                </div>
            )
        } else if (props.cardSet == 'neo-genesis') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/gtVq1l1.jpg" alt="neo genesis" className="booster-neo-genesis booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Genesis</h4>
                </div>
            )
        } else if (props.cardSet == 'neo-discovery') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/FDv9Uok.jpg" alt="neo discovery" className="booster-neo-discovery booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Discovery</h4>
                </div>
            )
        } else if (props.cardSet == 'neo-revelation') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/ON6FfPy.jpg" alt="neo revelation" className="booster-neo-revelation booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Revelation</h4>
                </div>
            )
        } else if (props.cardSet == 'neo-destiny') {
            return (
                <div class="expansion-image col-lg-4 col-md-6 col-sm-10 mt-4">
                    <img src="https://i.imgur.com/cA8s7UR.jpg" alt="neo destiny" className="booster-neo-destiny booster-hero ds-dark-lg mt-4"/>
                    <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Destiny</h4>
                </div>
            )
        }
    }

}