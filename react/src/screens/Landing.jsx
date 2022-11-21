import React from "react";
import { Link } from "react-router-dom";
import '../style/Landing.css';
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
      <div class="landing-container">

        <header>
          <nav>
            <ul>
              <li>
                <button><Link to="/signup">Sign Up</Link></button>
              </li>
              <li>
                <button><Link to="/login">Login</Link></button>
              </li>
            </ul>
          </nav>
        </header>

        <div>
          <h4>Welcome </h4>


        </div>
      </div>
      <div class="landing-body">
        <section class="landing-articles">
          <article></article>
          <article></article>
          <article></article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Landing;