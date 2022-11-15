import './App.css';
import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchParams from './components/SearchParams'
import SearchResults from './components/SearchResults'
import Deck from './components/Deck'
import CardContext from './CardContext';
import DeckContext from './DeckContext';

function App() {
  const changeCards = useState([])
  const [decks, changeDecks] = useState([])
  const [tab, changeTab] = useState('slide1')

  console.log(typeof (changeDecks));

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
    <>
    <Nav />
    <Route path="/" exact component={Home} >
    </Route>
    <Route path="/profile" component={Profile}>
    <CardContext.Provider value={changeCards} >
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
    </CardContext.Provider>
    </Route>
  </>
  );
}

export default App;

