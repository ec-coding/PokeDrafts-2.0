import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import './signUp.scss';

// https://developers.google.com/identity/gsi/web/reference/js-reference

const SignUp = () => {
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

  const { handleGoogle, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/signup`
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
      <div class="signup row">
        <section class="left col">
          <img src="https://i.imgur.com/HgSy1Gq.png" alt="trim-images" border="0" />
          <div class="form">
            <h1>Register with Google</h1>
            <div class="auth-container">
              {error && <p style={{ color: "red" }}>{error}</p>}
              {loading ? (
                <div>Loading....</div>
              ) : (
                <div id="signUpDiv" class='auth' data-text="signup_with"></div>
              )}
            </div>
            <span>Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply</span>
            <nav style={{ padding: "2rem" }}>
              <div
                onClick={() => {
                  viewNavigate("/");
                }}
              >
                <i class='fas fa-angle-double-left'></i>Go Back
              </div>
            </nav>
          </div>
        </section>
        <section class="right col"></section>
      </div>
    </>
  );
};

export default SignUp;