import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Flipper, Flipped } from 'react-flip-toolkit';
import Slider from "react-slick";
import './expCarousel.scss'

const ExpansionSideNav = ({ expansion }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/base" >
                        <Flipped>
                            <img src="https://i.imgur.com/q2YVnId.jpg" alt="" class="booster-base booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Base Set</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/jungle" >
                        <Flipped>
                            <img src="https://i.imgur.com/WUVqIZa.jpg" alt="" class="booster-jungle booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Jungle</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/fossil" >
                        <Flipped>
                            <img src="https://i.imgur.com/fzPnBJi.jpg" alt="" class="booster-fossil booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Fossil</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/base-2" >
                        <Flipped>
                            <img src="https://i.imgur.com/l4fcVLN.jpg" alt="" class="booster-base-2 booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Base Set 2</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/team-rocket" >
                        <Flipped>
                            <img src="https://i.imgur.com/Hj0RN6t.jpg" alt="" class="booster-team-rocket booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Team Rocket</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/gym-heroes" >
                        <Flipped>
                            <img src="https://i.imgur.com/dk730u5.jpg" alt="" class="booster-gym-heroes booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Gym Heroes</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/gym-challenge" >
                        <Flipped>
                            <img src="https://i.imgur.com/tsM9xhr.jpg" alt="" class="booster-gym-challenge booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Gym Challenge</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/neo-genesis" >
                        <Flipped>
                            <img src="https://i.imgur.com/gtVq1l1.jpg" alt="" class="booster-neo-genesis booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Neo Genesis</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/neo-discovery" >
                        <Flipped>
                            <img src="https://i.imgur.com/FDv9Uok.jpg" alt="" class="booster-neo-discovery booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Neo Discovery</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/neo-revelation" >
                        <Flipped>
                            <img src="https://i.imgur.com/ON6FfPy.jpg" alt="" class="booster-neo-revelation booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Neo Revelation</h4>
                    </Link>
                </div>
            </div>
            <div class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                <div class="col">
                    <Link to="/expansions/neo-destiny" >
                        <Flipped>
                            <img src="https://i.imgur.com/cA8s7UR.jpg" alt="" class="booster-neo-destiny booster-sm" />
                        </Flipped>
                        <h4 class="bg-blue text-center">Neo Destiny</h4>
                    </Link>
                </div>
            </div>
        </Slider>
    )

}

export default ExpansionSideNav

    // < nav class="vt-navbar col-lg-4 col-sm-12 mx-0 px-0" >
    //     <ol className="gen-one-set-one landing-sets row d-flex justify-content-center m-0 px-2">
    //     </ol>
    // </nav >