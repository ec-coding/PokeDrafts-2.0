import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp"
import Home from "./screens/Home";


function App() {
  const [user, setUser] = useState({});
  const [decks, changeDecks] = useState([])

  console.log(typeof (changeDecks));

  useEffect(() => {
    const theUser = localStorage.getItem("user");
    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  useEffect(() => {
    fetch('http://localhost:7000/decks/profile')
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
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={user?.email ? <Navigate to="/home" /> : <Landing />}
      />
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
      
      {/* <CardContext.Provider value={changeCards} >
        <DeckContext.Provider value={[decks, changeDecks]} >
          <div className="App">
            <Header />
            <div class="tab">
              <button id="tab-one-button" class="tab-links" onClick={() => changeTab('slide1')}>Search</button>
              <button id="tab-two-button" class="tab-links" onClick={() => changeTab('slide2')}>Results</button>
              <button id="tab-three-button" class="tab-links" onClick={() => changeTab('slide3')}>Deck</button>
            </div>

            {tab === 'slide1' && <div id="tab-one" class="tab-content">
              <SearchParams />
            </div>}

            {tab === 'slide2' && <div id="tab-two" class="tab-content">
              <SearchResults />
            </div>}

            {tab === 'slide3' && <div id="tab-three" class="tab-content">
              <Deck />

            </div>}
            <div class="search-footer-container">
              <section class="search-footer">

              </section>
            </div>

            <Footer />
          </div>
        </DeckContext.Provider>
      </CardContext.Provider> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

