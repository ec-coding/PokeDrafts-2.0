import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from '../../components/Icon/Icon'
import "./ExpansionPanel.css"

const ExpansionOne = () => {
    return (
        <>
            <div class="expansionOne">
                <header class="main-header">
                    <a href="./" class="back-and-title">
                        <svg class="back-icon" viewBox="0 0 24 24"><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>
                        <span class="main-header-text">Demo site</span>
                    </a>
                </header>
                <div class="row mx-0 px-0">
                    <main class="row col-8 mx-0 py-5 px-0">
                        <div class="col-2"></div>
                        <div class="col-5">
                            <img src="https://i.imgur.com/q2YVnId.jpg" alt="" />
                            <h4 class="bg-blue">Base Set</h4>
                        </div>
                        <div class="col-4 text-start">
                            <div>
                                <h3>Cards in Set</h3>
                                <h5>English: 102</h5>
                                <h5>Japanese: 102</h5>
                            </div>
                            <br />
                            <div>
                                <h3>Set Number</h3>
                                <h5>English: 1</h5>
                                <h5>Japanese: 1</h5>
                            </div>
                            <br />
                            <div>
                                <h3>Release Date</h3>
                                <h5>English: Jan 9, 1999</h5>
                                <h5>Japanese: Oct 20, 1996</h5>
                            </div>
                            <br />
                            <div>
                                <h3>Theme Decks</h3>
                                <div class="row mx-0 px-0">
                                    <Icon textSwitch={'Water'} /><Icon textSwitch={'Grass'} /><h5 class="col">Overgrowth</h5>
                                </div>
                                <div class="row mx-0 px-0">
                                    <Icon textSwitch={'Lightning'} /><Icon textSwitch={'Psychic'} /><h5 class="col">Zap!</h5>
                                </div>
                                <div class="row mx-0 px-0">
                                    <Icon textSwitch={'Fire'} /><Icon textSwitch={'Grass'} /><h5 class="col">Brushfire</h5>
                                </div>
                                <div class="row mx-0 px-0">
                                    <Icon textSwitch={'Water'} /><Icon textSwitch={'Fighting'} /><h5 class="col">Blackout!</h5>
                                </div>
                            </div>

                        </div>
                        <p>Ok, that's enough fun, you can go back to <a href="./">page 1</a>, or date you carry on to <a href="./page-3">page 3</a>?</p>
                    </main>
                    <div class="col-2"></div>

                    <nav class="vt-navbar col-2 mx-0 px-0 pb-4">
                        <ol className="gen-one-set-one landing-sets row d-flex justify-content-center m-0 px-0">
                            <li className="set-booster-pack row col-12 md-6 mx-0">
                                <div class="col mx-0 px-0">
                                    <img src="https://i.imgur.com/q2YVnId.jpg" alt="" class="" />
                                    <h4 class="bg-blue">Base Set</h4>
                                </div>
                            </li>
                            <li className="set-booster-pack row col-12 md-6 mx-0">
                                <div class="col mx-0 px-0">
                                    <img src="https://i.imgur.com/WUVqIZa.jpg" alt="" class="" />
                                    <h4 class="bg-blue">Jungle</h4>
                                </div>
                            </li>
                            <li className="set-booster-pack row col-12 md-6 mx-0">
                                <div class="col mx-0 px-0">
                                    <img src="https://i.imgur.com/fzPnBJi.jpg" alt="" class="" />
                                    <h4 class="bg-blue">Fossil</h4>
                                </div>
                            </li>
                            <li className="set-booster-pack row col-12 md-6 mx-0">
                                <div class="col mx-0 px-0">
                                    <img src="https://i.imgur.com/l4fcVLN.jpg" alt="" class="" />
                                    <h4 class="bg-blue">Base Set 2</h4>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div >
            </div>
        </>
    )
}

export default ExpansionOne;