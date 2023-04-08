import React, { useEffect, useState, useContext } from "react";
import { createRoot } from 'react-dom/client';
import { Link, useNavigate, createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import ExpansionBody from '../../components/ExpansionBody/ExpansionBody'
import ExpansionSideNav from '../../components/ExpansionSideNav/ExpansionSideNav'
import "./ExpansionPanel.css"

const AnimatedLink = ({ to, children, cardSet }) => {
    const navigate = useNavigate();
    return (
        <a
            href={to}
            onClick={(ev) => {
                ev.preventDefault();
                document.startViewTransition(() => {
                    Expansions(cardSet)
                    navigate(to);
                });
            }}
        >
            {children}
        </a>
    );
};

const Expansions = ({ }) => {
    // const [expansion, setExpansion] = useState('')

    // function changeExpansion(currentExpansion) {
    //     console.log(currentExpansion)
    //     setExpansion(currentExpansion) 
    // }

    const {expansion}=useParams()

    return (
        <>
            <div class="expansionOne">
                <header class="main-header">
                    <a href="/" class="back-and-title">
                        <svg class="back-icon" viewBox="0 0 24 24"><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>
                        <span class="main-header-text">Demo site</span>
                    </a>
                </header>
                <div class="row mx-0 px-0">
                    <ExpansionBody expansion={expansion} />
                    <div class="col-2"></div>
                    <ExpansionSideNav />
                </div >
            </div>
        </>
    )
}

export default Expansions;