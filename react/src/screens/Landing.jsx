import React from "react";
import { Link } from "react-router-dom";
import '../style/Landing.css';
import Footer from '../components/Footer'

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

        <div class="flip-card-container row">
          <section class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/WlnkkQ7.png" alt="" /></div>
              <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/zev5vMv.png" alt="" /></div>
            </div>
          </section>
          <section class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/7tpsOrb.png" alt="" /></div>
              <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/MfrWEXq.png" alt="" /></div>
            </div>
          </section>
          <section class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/Wo1I3kR.png" alt="" /></div>
              <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/TLIixxK.png" alt="" /></div>
            </div>
          </section>
          <section class="flip-card col">
            <div class="flip-card-inner">
              <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/0UluGjx.png" alt="" /></div>
              <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/sfgVYuN.png" alt="" /></div>
            </div>
          </section>
        </div>

        <section class="landing-set-container">
          <h2>Featuring cards from the following sets:</h2>
          <div class="landing-sets">
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Base_Set_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/q2YVnId.jpg" alt="" /></a>
              <h3>Base Set</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Jungle_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/WUVqIZa.jpg" alt="" /></a>
              <h3>Jungle</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Fossil_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/fzPnBJi.jpg" alt="" /></a>
              <h3>Fossil</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Base_Set_2_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/l4fcVLN.jpg" alt="" /></a>
              <h3>Base Set 2</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Team_Rocket_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/Hj0RN6t.jpg" alt="" /></a>
              <h3>Team Rocket</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Gym_Heroes_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/dk730u5.jpg" alt="" /></a>
              <h3>Gym Heroes</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Gym_Challenge_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/tsM9xhr.jpg" alt="" /></a>
              <h3>Gym Challenge</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Gym_Challenge_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/gtVq1l1.jpg" alt="" /></a>
              <h3>Neo Genesis</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Neo_Discovery_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/FDv9Uok.jpg" alt="" /></a>
              <h3>Neo Discovery</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Neo_Revelation_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/ON6FfPy.jpg" alt="" /></a>
              <h3>Neo Revelation</h3>
            </div>
            <div class="">
              <a href="https://bulbapedia.bulbagarden.net/wiki/Neo_Destiny_(TCG)" target="_blank" rel="noreferrer"><img src="https://i.imgur.com/cA8s7UR.jpg" alt="" /></a>
              <h3>Neo Destiny</h3>
            </div>
          </div>
        </section>

        <section class="landing-button-container button-input row">
          <h2>Log in or sign up to begin</h2>
          <div>
          <Link to="/signup"><button>Sign Up</button></Link>
          <Link to="/login"><button>Login</button></Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Landing;