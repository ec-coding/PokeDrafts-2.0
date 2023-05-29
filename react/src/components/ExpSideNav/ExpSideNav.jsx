import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Flipper, Flipped } from 'react-flip-toolkit';
import './expSideNav.scss'

const ExpansionSideNav = ({ expansion, changeNavSlide }) => {

    const toggleNavSlide = () => {
        changeNavSlide(true)
        console.log('toggled from SideNav')
    }


    return (
        <nav class="vt-navbar col-lg-4 col-sm-12 mx-0 px-0">
            <ol className="gen-one-set-one landing-sets row d-flex justify-content-center m-0 px-2 bs-lift">
                {
                    expansion != 'base' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/base" >
                                <Flipped flipId="navBase">
                                    <div>
                                        <img src="https://i.imgur.com/q2YVnId.jpg" alt="" class="booster-base booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Base Set</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>
                }
                {
                    expansion != 'jungle' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/jungle" >
                                <Flipped flipId="navJungle">
                                    <div>
                                        <img src="https://i.imgur.com/WUVqIZa.jpg" alt="" class="booster-jungle booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Jungle</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>
                }
                {
                    expansion != 'fossil' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/fossil" >
                                <Flipped flipId="navFossil">
                                    <div>
                                        <img src="https://i.imgur.com/fzPnBJi.jpg" alt="" class="booster-fossil booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Fossil</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'base-2' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/base-2" >
                                <Flipped flipId="navBase2">
                                    <div>
                                        <img src="https://i.imgur.com/l4fcVLN.jpg" alt="" class="booster-base-2 booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Base Set 2</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>
                }
                {
                    expansion != 'team-rocket' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/team-rocket" >
                                <Flipped flipId="navTeamRocket">
                                    <div>
                                        <img src="https://i.imgur.com/Hj0RN6t.jpg" alt="" class="booster-team-rocket booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Team Rocket</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'gym-heroes' &&


                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/gym-heroes" >
                                <Flipped flipId="navGymHeroes">
                                    <div>
                                        <img src="https://i.imgur.com/dk730u5.jpg" alt="" class="booster-gym-heroes booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Gym Heroes</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'gym-challenge' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/gym-challenge" >
                                <Flipped flipId="navGymChallenge">
                                    <div>
                                        <img src="https://i.imgur.com/tsM9xhr.jpg" alt="" class="booster-gym-challenge booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Gym Challenge</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-genesis' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-genesis" >
                                <Flipped flipId="navNeoGenesis">
                                    <div>
                                        <img src="https://i.imgur.com/gtVq1l1.jpg" alt="" class="booster-neo-genesis booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Neo Genesis</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-discovery' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-discovery" >
                                <Flipped flipId="navNeoDiscovery">
                                    <div>
                                        <img src="https://i.imgur.com/FDv9Uok.jpg" alt="" class="booster-neo-discovery booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Neo Discovery</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-revelation' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-revelation" >
                                <Flipped flipId="navNeoRevelation">
                                    <div>
                                        <img src="https://i.imgur.com/ON6FfPy.jpg" alt="" class="booster-neo-revelation booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Neo Revelation</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-destiny' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-destiny" >
                                <Flipped flipId="navNeoDestiny">
                                    <div>
                                        <img src="https://i.imgur.com/cA8s7UR.jpg" alt="" class="booster-neo-destiny booster-sm" onClick={toggleNavSlide} />
                                        <h4 class="bg-blue text-center">Neo Destiny</h4>
                                    </div>
                                </Flipped>
                            </Link>
                        </div>
                    </li>

                }
            </ol>
        </nav>
    )

}

export default ExpansionSideNav