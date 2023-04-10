import React, { useEffect, useState, useContext } from "react";
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { Link, useNavigate, createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import ExpansionBody from '../../components/ExpansionBody/ExpansionBody'
import ExpansionSideNav from '../../components/ExpansionSideNav/ExpansionSideNav'
import "./ExpansionPanel.css"

var el = document.getElementById('hero-img')
if(el) {
    el.addEventListener('click', () => {
        document.startViewTransition(() => {
            document
                .querySelectorAll('.booster-sm .booster-hero')
                .forEach((target) => target.classList.toggle('hidden'));
        });
      });
      
}


const Expansions = ({ }) => {
    const [isHero, setIsHero] = React.useState(true);
    const { expansion } = useParams()

    return (
        <>
            <div class="expansionContainer">
                <header class="main-header bs-lift">
                    <a href="/" class="back-and-title">
                        <svg class="back-icon" viewBox="0 0 24 24"><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>
                        <img src="https://i.imgur.com/HgSy1Gq.png" alt="" class="app-logo" />
                    </a>
                </header>
                <div class="row mx-0 px-0">
                    <ExpansionBody expansion={expansion} />
                    <ExpansionSideNav expansion={expansion} />
                </div >
            </div>
        </>
    )
}

export default Expansions;