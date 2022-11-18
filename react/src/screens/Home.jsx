import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchParams from '../components/SearchParams'
import SearchResults from '../components/SearchResults'
import Profile from '../components/Profile'
import Deck from '../components/Deck'
import UserContext from '../UserContext';
import CardContext from '../CardContext';
import DeckContext from '../DeckContext';

const Home = ({}) => {
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    const user = useContext(UserContext);
    const changeCards = useState([])
    const [decks, changeDecks] = useState([])
    const [tab, changeTab] = useState('slide1')

    useEffect(() => {
        fetch('http://localhost:7000/decks/profile', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
              },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                changeDecks(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);


    return (
        <>
            <CardContext.Provider value={changeCards} >
                <DeckContext.Provider value={[decks, changeDecks]} >
                    <div className="App">

                        <nav class="navbar navbar-expand-lg bg-light">
                            <div class="container-fluid tab">

                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <button id="tab-zero-button" class="tab-links" onClick={() => changeTab('slide0')}>Profile</button>
                                        </li>
                                        <li class="nav-item">
                                            <button id="tab-one-button" class="tab-links" onClick={() => changeTab('slide1')}>Search</button>
                                        </li>
                                        <li class="nav-item">
                                            <button id="tab-two-button" class="tab-links" onClick={() => changeTab('slide2')}>Results</button>
                                        </li>
                                        <li class="nav-item">
                                            <button id="tab-three-button" class="tab-links" onClick={() => changeTab('slide3')}>Deck</button>
                                        </li>
                                    </ul>
                                    <ul class="nav-item-two">
                                        <li>
                                            <button id="logout-button" class="tab-links" onClick={logout}>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <Header />
                        {tab === 'slide0' && <div id="tab-zero">

                            <Profile user={user}/>

                        </div>}


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
                        <div>

                        </div>
                        <Footer />
                    </div>
                </DeckContext.Provider>
            </CardContext.Provider>
        </>
    );
};

export default Home;