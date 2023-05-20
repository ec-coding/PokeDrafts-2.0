import React from "react";
import { Link, useNavigate, createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import FlipCardBanner from "../../components/FlipCardBanner/FlipCardBanner"
import Expansions from '../Expansions/Expansions'
import './landing.scss';
import '../../index.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const AnimatedLink = ({ to, children }) => {
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

const Landing = () => {
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
    <div className="landing">
      <section class="top">
      <Navbar />
        <div class="title">
          <h1>Build the Ultimate Deck</h1>
          <h5>A deck-building app for the Pokémon Trading Card Game</h5>
        </div>
      </section>

      <div class="main">

        <FlipCardBanner />

        <section class="set-container">
          <h2>Featuring cards from the following sets:</h2>
          <div class="sets">
            <div className="divider">
              <h3 className="bg-blue">Generation I</h3>
              <h4>Original Series</h4>
              <ol className="row d-flex justify-content-center mx-0 px-0">
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  {/* Use an Animated Link here instead of Link so that you can pass in the set names */}
                  <AnimatedLink to="/expansions/base" >
                    <img src="https://i.imgur.com/q2YVnId.jpg" alt="" class="banner-img" />
                  </AnimatedLink>
                  <h5 class="bg-blue">Base Set</h5>
                </li>
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/WUVqIZa.jpg" alt="" class="banner-img" onClick={() => {
                    viewNavigate("/expansions/jungle");
                  }} />
                  <h5 class="bg-blue">Jungle</h5>
                </li>
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/fzPnBJi.jpg" alt="" class="banner-img" onClick={() => {
                    viewNavigate("/expansions/fossil");
                  }} />
                  <h5 class="bg-blue">Fossil</h5>
                </li>
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/l4fcVLN.jpg" alt="" class="banner-img" onClick={() => {
                    viewNavigate("/expansions/base-2");
                  }} />
                  <h5 class="bg-blue">Base Set 2</h5>
                </li>
              </ol>
              <ol className="gen-one-set-two row d-flex justify-content-center mx-0 px-0">
                <li className="col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/Hj0RN6t.jpg" alt="" class="banner-img" onClick={() => {
                    viewNavigate("/expansions/team-rocket");
                  }} />
                  <h5 class="bg-blue">Team Rocket</h5>
                </li>
                <li className="col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/dk730u5.jpg" alt="" class="banner-img" onClick={() => {
                    viewNavigate("/expansions/gym-heroes");
                  }} />
                  <h5 class="bg-blue">Gym Heroes</h5>
                </li>
                <li className="col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/tsM9xhr.jpg" alt="" class="banner-img" onClick={() => {
                    viewNavigate("/expansions/gym-challenge");
                  }} />
                  <h5 class="bg-blue">Gym Challenge</h5>
                </li>
              </ol>
            </div>
            <div className="divider">
              <h3 className="set-header bg-blue">Generation II</h3>
              <h4 className="set-header">Neo Series</h4>
              <ol className="row d-flex justify-content-center mx-0 px-0">
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/gtVq1l1.jpg" alt="" class="" onClick={() => {
                    viewNavigate("/expansions/neo-genesis");
                  }} />
                  <h5 class="bg-blue">Neo Genesis</h5>
                </li>
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/FDv9Uok.jpg" alt="" class="" onClick={() => {
                    viewNavigate("/expansions/neo-discovery");
                  }} />
                  <h5 class="bg-blue">Neo Discovery</h5>
                </li>
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/ON6FfPy.jpg" alt="" class="" onClick={() => {
                    viewNavigate("/expansions/neo-revelation");
                  }} />
                  <h5 class="bg-blue">Neo Revelation</h5>
                </li>
                <li className="col-xl-3 col-lg-4 col-md-6 mx-0">
                  <img src="https://i.imgur.com/cA8s7UR.jpg" alt="" class="" onClick={() => {
                    viewNavigate("/expansions/neo-destiny");
                  }} />
                  <h5 class="bg-blue">Neo Destiny</h5>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <div class="button-container row">
          <h2>Log in or sign up to begin</h2>
          <div>
            <button class="bg-warning" onClick={() => {
              viewNavigate("/signup");
            }} >Sign Up</button>
            <button class="bg-info" onClick={() => {
              viewNavigate("/login");
            }} >Login</button>
          </div>
        </div>

      </div>
      <Footer />
      </div>
    </>
  );
};

export default Landing;