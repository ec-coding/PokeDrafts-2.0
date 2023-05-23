import React, { useEffect, useState, useContext } from "react";
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Link, useNavigate, useLocation, createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import ExpBody from '../../components/ExpBody/ExpBody'
import ExpSideNav from '../../components/ExpSideNav/ExpSideNav'
import "./expansions.scss"

var el = document.getElementById('hero-img')
if (el) {
  el.addEventListener('click', () => {
    document.startViewTransition(() => {
      document
        .querySelectorAll('.booster-sm .booster-hero')
        .forEach((target) => target.classList.toggle('hidden'));
    });
  });

}

const Expansions = ({ toggleFullScreen, isFullScreen }) => {
  const [isHero, setIsHero] = React.useState(true);
  const { expansion } = useParams()

  const navigate = useNavigate();
  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };

  return (
    <>
      <div class="expansions">
        <header class="main-header bs-lift">
          <span class="back-and-title bg-blue bs-lift py-1 px-3" onClick={() => {
            viewNavigate("/");
          }}>
            <svg class="back-icon" viewBox="0 0 24 24"><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>
            <img src="https://i.imgur.com/HgSy1Gq.png" alt="" class="app-logo" />
          </span>
        </header>
        <div class="main row mx-0 px-0">
          <ExpBody expansion={expansion} isFullScreen={isFullScreen} />
          <ExpSideNav expansion={expansion} />
        </div >
      </div>
    </>
  )
}

export default Expansions;