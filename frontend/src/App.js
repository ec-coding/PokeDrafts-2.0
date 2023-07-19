import React, { useState, useEffect } from 'react';
import UserContext from './contexts/UserContext';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Flipper, Flipped } from 'react-flip-toolkit'
import Landing from "./screens/Landing/Landing";
import Expansions from "./screens/Expansions/Expansions";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp"
import Home from "./screens/Home/Home";
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [decks, changeDecks] = useState([])
  const [fullScreen, setFullScreen] = useState(false)
  const toggleFullScreen = () => setFullScreen(prevState => !prevState)

  useEffect(() => {
    const theUser = localStorage.getItem("user");
    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/decks/profile`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        changeDecks(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  // FOUNDATION (CR & D OF CRUD)
  // START WITH LISTING ALL THE DECKS, ADDING NEW DECKS, AND DELETING DECKS

  // UPDATE - CHANGE DECK NAME


  // MIT LICENSE 

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        {/* Context for Light / Dark Mode */}
        <Flipper
          flipKey={fullScreen}
        >
          <Routes>
            <Route
              path="/"
              element={user?.email ? <Navigate to="/home" /> : <Landing toggleFullScreen={toggleFullScreen} />}
            />
            <Route path="/expansions">
              <Route path=":expansion" element={<Expansions toggleFullScreen={toggleFullScreen} />} />
            </Route>
            <Route
              path="/login"
              element={user?.email ? <Navigate to="/home" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user?.email ? <Navigate to="/home" /> : <SignUp />}
            />
            <Route
              path="/home"
              element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
            />
          </Routes>
        </Flipper>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

// PROPS DOWN
// EVENTS UP