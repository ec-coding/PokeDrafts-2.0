import React from "react";
import { Link } from "react-router-dom";
import FlipCardBanner from "../../components/FlipCardBanner/FlipCardBanner"
import './Landing.css';
import '../../index.css'
import Footer from '../../components/Footer/Footer'

const Landing = () => {
  return (
    <>
      <div class="landing-container">

        <header>
          <nav class="row landing-navbar">
            <ul id="nav-ul-one" class="col">
              <img id="title-img" src="https://i.imgur.com/HgSy1Gq.png" alt="trim-images" border="0" />

              <li>
                <button><Link to="/">Home</Link></button>
              </li>
            </ul>
            <ul id="nav-ul-two" class="col">
              <li>
                <button><Link to="/signup">Sign Up</Link></button>
              </li>
              <li>
                <button><Link to="/login">Login</Link></button>
              </li>
            </ul>
          </nav>
        </header>

        <div class="landing-title-container">
          <h1>Build the Ultimate Deck</h1>
          <h5>A deck-building app for the Pokémon Trading Card Game</h5>
        </div>

      </div>
      <div class="landing-body">

        <FlipCardBanner />

        <section class="landing-set-container">
          <h2>Featuring cards from the following sets:</h2>
          <div class="landing-sets">
            <section className="set-divider gen-i">
              <h3 className="set-header bg-blue">Generation I</h3>
              <h4 className="set-header">Original Series</h4>
              <ol className="gen-one-set-one row d-flex justify-content-center mx-0 px-0">
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/q2YVnId.jpg" alt="" /></a>
                  <h4 class="bg-blue">Base Set</h4>
                </li>
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Jungle_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/WUVqIZa.jpg" alt="" /></a>
                  <h4 class="bg-blue">Jungle</h4>
                </li>
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Fossil_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/fzPnBJi.jpg" alt="" /></a>
                  <h4 class="bg-blue">Fossil</h4>
                </li>
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Base_Set_2_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/l4fcVLN.jpg" alt="" /></a>
                  <h4 class="bg-blue">Base Set 2</h4>
                </li>
                </ol>
                <ol className="gen-one-set-two row d-flex justify-content-center mx-0 px-0">
                <li className="set-booster-pack col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/Hj0RN6t.jpg" alt="" /></a>
                  <h4 class="bg-blue">Team Rocket</h4>
                </li>
                <li className="set-booster-pack col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Gym_Heroes_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/dk730u5.jpg" alt="" /></a>
                  <h4 class="bg-blue">Gym Heroes</h4>
                </li>
                <li className="set-booster-pack col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Gym_Challenge_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/tsM9xhr.jpg" alt="" /></a>
                  <h4 class="bg-blue">Gym Challenge</h4>
                </li>
                </ol>
            </section>
            <section className="set-divider gen-ii">
              <h3 className="set-header bg-blue">Generation II</h3>
              <h4 className="set-header">Neo Series</h4>
              <ol className="row d-flex justify-content-center mx-0 px-0">
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Gym_Challenge_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/gtVq1l1.jpg" alt="" /></a>
                  <h4 class="bg-blue">Neo Genesis</h4>
                </li>
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Neo_Discovery_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/FDv9Uok.jpg" alt="" /></a>
                  <h4 class="bg-blue">Neo Discovery</h4>
                </li>
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Neo_Revelation_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/ON6FfPy.jpg" alt="" /></a>
                  <h4 class="bg-blue">Neo Revelation</h4>
                </li>
                <li className="set-booster-pack col-xl-3 col-lg-4 col-md-6 mx-0">
                  <a href="https://bulbapedia.bulbagarden.net/wiki/Neo_Destiny_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/cA8s7UR.jpg" alt="" /></a>
                  <h4 class="bg-blue">Neo Destiny</h4>
                </li>
              </ol>
            </section>
          </div>
        </section>

        <section class="landing-button-container button-input row">
          <h2>Log in or sign up to begin</h2>
          <div>
            <Link to="/signup"><button class="bg-warning">Sign Up</button></Link>
            <Link to="/login"><button class="bg-info">Login</button></Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Landing;