import React, { useState } from "react";
import { Flipper } from 'react-flip-toolkit';
import { useNavigate, useParams } from "react-router-dom";
import ExpBody from '../../components/ExpBody/ExpBody'
import ExpSideNav from '../../components/ExpSideNav/ExpSideNav'
import "./expansions.scss"

const Expansions = ({ }) => {
  const [isHero, setIsHero] = React.useState(true);
  const [navSlide, setNavSlide] = useState(false)
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

  const changeNavSlide = () => {
    setNavSlide(!navSlide)
    console.log('toggled from Expansions')
  }

  return (
    <>
      <div class="expansions">
        <header class="main-header bs-lift">
          <span class="back-and-title bg-blue py-1 px-3" onClick={() => {
            viewNavigate(`/`);
          }}>
            <svg class="back-icon" viewBox="0 0 24 24"><path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"></path></svg>
            <img src="https://i.imgur.com/HgSy1Gq.png" alt="" class="app-logo" />
          </span>
        </header>
        <Flipper flipKey={navSlide}>
          <div class="main row mx-0 px-0">
            <ExpBody expansion={expansion} navSlide={navSlide} />
            <ExpSideNav expansion={expansion} changeNavSlide={changeNavSlide} />
          </div >
        </Flipper>
      </div>
    </>
  )
}

export default Expansions;