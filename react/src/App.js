import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchParams from './components/SearchParams'
import SearchResults from './components/SearchResults'
import CardContext from './CardContext';

function App() {
  const changeCards = useState([])
  const [tab, changeTab] = useState('slide1')

  return (
    <CardContext.Provider value={changeCards} >
    <div className="App">
      <Header />
      <div class="tab">
        <button id="tab-one-button" class="tab-links" onClick={() => changeTab('slide1')}>Search</button>
        <button id="tab-two-button" class="tab-links" onClick={() => changeTab('slide2')}>Results</button>
        <button id="tab-three-button" class="tab-links" onClick={() => changeTab('slide3')}>Deck</button>
      </div>

      {tab==='slide1' && <div id="tab-one" class="tab-content">
        <SearchParams />
      </div>}

      {tab==='slide2' &&<div id="tab-two" class="tab-content">
        <SearchResults />
      </div>}

      {tab==='slide3' &&<div id="tab-three" class="tab-content">
        <div class="search-header-container">
          <h2 id="search-header">Card Deck</h2>
            <section class="instructions">
              <h6 class="instructions-text">Browse through and click on any card to remove it from your deck.</h6>
            </section>
        </div>
        {/* <Deck /> */}
      </div>}

      <Footer />
    </div>
    </CardContext.Provider>
  );
}

export default App;
