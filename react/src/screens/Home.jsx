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
import '../style/Icon.css';
import '../style/TabView.css';
import '../style/Navbar.css';
import '../style/Modal.css';
import '../style/Carousel.css';
import '../style/Accordion.css';
import '../style/Header.css';
import '../style/Footer.css';
import '../style/SearchParam.css';
import '../style/Profile.css';
import '../style/Card.css';
import '../style/Deck.css';

const Home = ({ }) => {
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    const user = useContext(UserContext);
    const changeCards = useState([])
    const [decks, changeDecks] = useState([])
    const [tab, changeTab] = useState('slide1')

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/decks/profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
            .then((res) => res.json())
            .then((response) => {
                // console.log(response)
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
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid tab">


                                <ul class="navbar-nav">
                                    <li>
                                        <img id="title-img" src="https://i.imgur.com/HgSy1Gq.png" alt="trim-images" border="0" />
                                    </li>
                                    {/* <li class="nav-item">
                                        <button id="tab-zero-button" class="tab-links" onClick={() => changeTab('slide0')}>Profile</button>
                                    </li> */}
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
                                <ul class="nav-item-two navbar-nav">
                                    <li class="nav-item">
                                        <button id="logout-button" class="tab-links" onClick={logout}>Logout</button>
                                    </li>
                                </ul>

                        </div>
                    </nav>

                    <div className="App">
                        <div className="App-inner">
                            <Header />
                            {/* {tab === 'slide0' && <div id="tab-zero" class="tab-content">
                                <Profile user={user} />
                            </div>} */}


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
                        </div>
                    </div>
                    <Footer />
                </DeckContext.Provider>
            </CardContext.Provider>
        </>
    );
};

export default Home;