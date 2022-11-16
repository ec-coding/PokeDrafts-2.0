import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchParams from '../components/SearchParams'
import SearchResults from '../components/SearchResults'
import Deck from '../components/Deck'
import CardContext from '../CardContext';
import DeckContext from '../DeckContext';

const Home = ({ user }) => {
    const changeCards = useState([])
    const [decks, changeDecks] = useState([])
    const [tab, changeTab] = useState('slide1')

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

    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };
    return (
        <div style={{ textAlign: "center", margin: "3rem" }}>
            <h1>Dear {user?.email}</h1>

            <p>
                You are viewing this page because you are logged in or you just signed
                up
            </p>
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
            <div>
                <button
                    onClick={logout}
                    style={{
                        color: "red",
                        border: "1px solid gray",
                        backgroundColor: "white",
                        padding: "0.5rem 1rem",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;