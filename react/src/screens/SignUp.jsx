import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import '../style/SignUp.css';

// https://developers.google.com/identity/gsi/web/reference/js-reference

const SignUp = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:7000/signup"
  );

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "continue_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
    <>
      <main class="median-master-container">
        <div class="median-container row">
          <section class="median-form-container col">

            <img id="title-img" src="https://i.imgur.com/HgSy1Gq.png" alt="trim-images" border="0" />

            <div class="median-form">

              <h1>Register with Google</h1>
              <div class="signup-container">
                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading ? (
                  <div>Loading....</div>
                ) : (
                  <div id="signUpDiv" data-text="signup_with"></div>
                )}
              </div>

              <span>Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply</span>

              <nav class="landing-return" style={{ padding: "2rem" }}>
                <Link to="/"><i class='fas fa-angle-double-left'></i>Go Back</Link>
              </nav>

            </div>


          </section>
          <section class="median-bg-container col"></section>
        </div>
      </main>
    </>
  );
};

export default SignUp;