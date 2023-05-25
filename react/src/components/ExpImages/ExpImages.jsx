import React from 'react';
import { Link } from "react-router-dom";
import { Flipper, Flipped } from 'react-flip-toolkit';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './expImages.scss'

const ExpImages = (props) => {

    if (props.cardSet !== undefined) {
        if (props.cardSet == 'base') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to='/#landingBase'>
                            <Flipped flipId="landingBase">
                                <img src="https://i.imgur.com/q2YVnId.jpg" alt="base" className="booster-base booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Base Set</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'jungle') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingJungle" >
                            <Flipped flipId="landingJungle">
                                <img src="https://i.imgur.com/WUVqIZa.jpg" alt="jungle" className="booster-jungle booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Jungle</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'fossil') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingFossil" >
                            <Flipped flipId="landingFossil">
                                <img src="https://i.imgur.com/fzPnBJi.jpg" alt="fossil" className="booster-fossil booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Fossil</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'base-2') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingBase2" >
                            <Flipped flipId="landingBase2">
                                <img src="https://i.imgur.com/l4fcVLN.jpg" alt="base 2" className="booster-base-2 booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Base 2</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'team-rocket') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingTeamRocket" >
                            <Flipped flipId="landingTeamRocket">
                                <img src="https://i.imgur.com/Hj0RN6t.jpg" alt="team rocket" className="booster-team-rocket booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Team Rocket</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'gym-heroes') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingGymHeroes" >
                            <Flipped flipId="landingGymHeroes">
                                <img src="https://i.imgur.com/dk730u5.jpg" alt="gym heroes" className="booster-gym-heroes booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Gym Heroes</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'gym-challenge') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingGymChallenge" >
                            <Flipped flipId="landingGymChallenge">
                                <img src="https://i.imgur.com/tsM9xhr.jpg" alt="gym challenge" className="booster-gym-challenge booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Gym Challenge</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'neo-genesis') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingNeoGenesis" >
                            <Flipped flipId="landingNeoGenesis">
                                <img src="https://i.imgur.com/gtVq1l1.jpg" alt="neo genesis" className="booster-neo-genesis booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Genesis</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'neo-discovery') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingNeoDiscovery" >
                            <Flipped flipId="landingNeoDiscovery">
                                <img src="https://i.imgur.com/FDv9Uok.jpg" alt="neo discovery" className="booster-neo-discovery booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Discovery</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'neo-revelation') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingNeoRevelation" >
                            <Flipped flipId="landingNeoRevelation">
                                <img src="https://i.imgur.com/ON6FfPy.jpg" alt="neo revelation" className="booster-neo-revelation booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Revelation</h4>
                    </div>
                </div>
            )
        } else if (props.cardSet == 'neo-destiny') {
            return (
                <div class="expansion-image row col-lg-6 col-md-6 col-sm-10 my-5 justify-content-center">
                    <div className='col-8'>
                        <HashLink to="/#landingNeoDestiny" >
                            <Flipped flipId="landingNeoDestiny">
                                <img src="https://i.imgur.com/cA8s7UR.jpg" alt="neo destiny" className="booster-neo-destiny booster-hero ds-dark-lg mt-4" />
                            </Flipped>
                        </HashLink>
                        <h4 class="exp-header bg-blue text-center mx-1 mt-3">Neo Destiny</h4>
                    </div>
                </div>
            )
        }
    }

}

export default ExpImages;