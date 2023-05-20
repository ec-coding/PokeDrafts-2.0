import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import './expSideNav.scss'

const AnimatedLink = ({ to, children }) => {
    const navigate = useNavigate();
    return (
        <a
            href={to}
            id={`hero-img`}
            onClick={(ev) => {
                ev.preventDefault();
                document.startViewTransition(() => {
                    navigate(to);
                });
            }}
        >
            {children}
        </a>
    );
};

const ExpHero = ({ link, heroContent }) => {

    return (
        <>
            {link}
            {heroContent}
        </>
    )
}

const ExpansionSideNav = ({ expansion }) => {
    return (
        <nav class="vt-navbar col-lg-4 col-sm-12 mx-0 px-0">
            <ol className="gen-one-set-one landing-sets row d-flex justify-content-center m-0 px-2">
                {
                    expansion != 'base' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/base" >
                                    <img src="https://i.imgur.com/q2YVnId.jpg" alt="" class="booster-base booster-sm" />
                                    <h4 class="bg-blue text-center">Base Set</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>
                }
                {
                    expansion != 'jungle' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/jungle" >
                                    <img src="https://i.imgur.com/WUVqIZa.jpg" alt="" class="booster-jungle booster-sm" />
                                    <h4 class="bg-blue text-center">Jungle</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>
                }
                {
                    expansion != 'fossil' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/fossil" >
                                    <img src="https://i.imgur.com/fzPnBJi.jpg" alt="" class="booster-fossil booster-sm" />
                                    <h4 class="bg-blue text-center">Fossil</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
                {
                    expansion != 'base-2' &&
                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/base-2" >
                                    <img src="https://i.imgur.com/l4fcVLN.jpg" alt="" class="booster-base-2 booster-sm" />
                                    <h4 class="bg-blue text-center">Base Set 2</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>
                }
                {
                    expansion != 'team-rocket' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/team-rocket" >
                                    <img src="https://i.imgur.com/Hj0RN6t.jpg" alt="" class="booster-team-rocket booster-sm" />
                                    <h4 class="bg-blue text-center">Team Rocket</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
                {
                    expansion != 'gym-heroes' &&


                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/gym-heroes" >
                                    <img src="https://i.imgur.com/dk730u5.jpg" alt="" class="booster-gym-heroes booster-sm" />
                                    <h4 class="bg-blue text-center">Gym Heroes</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
                {
                    expansion != 'gym-challenge' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/gym-challenge" >
                                    <img src="https://i.imgur.com/tsM9xhr.jpg" alt="" class="booster-gym-challenge booster-sm" />
                                    <h4 class="bg-blue text-center">Gym Challenge</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-genesis' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/neo-genesis" >
                                    <img src="https://i.imgur.com/gtVq1l1.jpg" alt="" class="booster-neo-genesis booster-sm" />
                                    <h4 class="bg-blue text-center">Neo Genesis</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-discovery' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/neo-discovery" >
                                    <img src="https://i.imgur.com/FDv9Uok.jpg" alt="" class="booster-neo-discovery booster-sm" />
                                    <h4 class="bg-blue text-center">Neo Discovery</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-revelation' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/neo-revelation" >
                                    <img src="https://i.imgur.com/ON6FfPy.jpg" alt="" class="booster-neo-revelation booster-sm" />
                                    <h4 class="bg-blue text-center">Neo Revelation</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
                {
                    expansion != 'neo-destiny' &&

                    <li class="set-booster-pack row col-lg-6 col-sm-12 md-6 mx-0">
                        <div class="col">
                            <ExpHero
                                link={<AnimatedLink to="/expansions/neo-destiny" >
                                    <img src="https://i.imgur.com/cA8s7UR.jpg" alt="" class="booster-neo-destiny booster-sm" />
                                    <h4 class="bg-blue text-center">Neo Destiny</h4>
                                </AnimatedLink>}
                            />
                        </div>
                    </li>

                }
            </ol>
        </nav>
    )

}

export default ExpansionSideNav