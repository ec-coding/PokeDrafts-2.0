import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Flipper, Flipped } from 'react-flip-toolkit';
import './expSideNav.scss'

const ExpansionSideNav = ({ expansion, changeNavSlide }) => {
    const toggleNavSlide = () => {
        changeNavSlide(true)
    }


    return (
        <nav class="vt-navbar col-lg-4 col-sm-12 mx-0 px-0">
            <ol className="gen-one-set-one landing-sets row d-flex justify-content-center m-0 px-2">
                {
                    expansion != 'base' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/base" >
                                <Flipped flipId="landingBase">
                                    <img src="https://i.imgur.com/q2YVnId.jpg" alt="" class="booster-base booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Base Set</h4>
                            </Link>
                        </div>
                    </li>
                }
                {
                    expansion != 'jungle' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/jungle" >
                                <Flipped flipId="landingJungle">
                                    <img src="https://i.imgur.com/WUVqIZa.jpg" alt="" class="booster-jungle booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Jungle</h4>
                            </Link>
                        </div>
                    </li>
                }
                {
                    expansion != 'fossil' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/fossil" >
                                <Flipped flipId="landingFossil">
                                    <img src="https://i.imgur.com/fzPnBJi.jpg" alt="" class="booster-fossil booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Fossil</h4>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'base-2' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/base-2" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/l4fcVLN.jpg" alt="" class="booster-base-2 booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Base Set 2</h4>
                            </Link>
                        </div>
                    </li>
                }
                {
                    expansion != 'team-rocket' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/team-rocket" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/Hj0RN6t.jpg" alt="" class="booster-team-rocket booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Team Rocket</h4>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'gym-heroes' &&


                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/gym-heroes" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/dk730u5.jpg" alt="" class="booster-gym-heroes booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Gym Heroes</h4>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'gym-challenge' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/gym-challenge" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/tsM9xhr.jpg" alt="" class="booster-gym-challenge booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Gym Challenge</h4>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-genesis' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-genesis" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/gtVq1l1.jpg" alt="" class="booster-neo-genesis booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Neo Genesis</h4>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-discovery' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-discovery" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/FDv9Uok.jpg" alt="" class="booster-neo-discovery booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Neo Discovery</h4>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-revelation' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-revelation" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/ON6FfPy.jpg" alt="" class="booster-neo-revelation booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Neo Revelation</h4>
                            </Link>
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-destiny' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <Link to="/expansions/neo-destiny" >
                                <Flipped flipId="landing">
                                    <img src="https://i.imgur.com/cA8s7UR.jpg" alt="" class="booster-neo-destiny booster-sm" onClick={toggleNavSlide} />
                                </Flipped>
                                <h4 class="bg-blue text-center">Neo Destiny</h4>
                            </Link>
                        </div>
                    </li>

                }
            </ol>
        </nav>
    )

}

export default ExpansionSideNav