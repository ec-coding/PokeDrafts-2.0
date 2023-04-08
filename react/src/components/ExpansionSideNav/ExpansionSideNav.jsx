import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";

const AnimatedLink = ({ to, children, onClick }) => {
    const navigate = useNavigate();
    return (
        <a
            href={to}
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
    const [currentExp, setCurrentExp] = useState()

    return (
        <>
                {link}

        </>
    )
}

const ExpansionSideNav = ({}) => {

    return (
        <nav class="vt-navbar col-2 mx-0 px-0 pb-4">
            <ol className="gen-one-set-one landing-sets row d-flex justify-content-center m-0 px-0">
                <li className="set-booster-pack row col-12 md-6 mx-0">
                    <div class="col mx-0 px-0">
                        <ExpHero
                            link={<AnimatedLink to="/expansions/base" >
                                <img src="https://i.imgur.com/q2YVnId.jpg" alt="" class="" />
                                <h4 class="bg-blue">Base</h4>
                            </AnimatedLink>}
                        />
                    </div>
                </li>
                <li className="set-booster-pack row col-12 md-6 mx-0">
                    <div class="col mx-0 px-0">
                    <ExpHero
                            link={<AnimatedLink to="/expansions/jungle" >
                                <img src="https://i.imgur.com/WUVqIZa.jpg" alt="" class="" />
                                <h4 class="bg-blue">Jungle</h4>
                            </AnimatedLink>}
                        />
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
    )

}

export default ExpansionSideNav