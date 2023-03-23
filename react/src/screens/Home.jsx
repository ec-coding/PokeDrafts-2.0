import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import SearchFilter from '../components/SearchFilter/SearchFilter'
import SearchResults from '../components/SearchResults/SearchResults'
// import Profile from '../components/Profile'
import Deck from '../components/UserDeck/Deck'
// import Parallax from '../components/Parallax/Parallax'
import UserContext from '../UserContext';
import CardContext from '../CardContext';
import DeckContext from '../DeckContext';
import '../style/Home.css'
import '../style/Icon.css';
import '../style/TabView.css';
import '../style/Navbar.css';
import '../style/Modal.css';
import '../style/Carousel.css';
import '../style/Accordion.css';
import '../style/Footer.css';
import '../style/Profile.css';
import '../style/Card.css';

const Home = ({ }) => {
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    const user = useContext(UserContext);
    const changeCards = useState([])
    const [decks, changeDecks] = useState([])
    const [tab, changeTab] = useState('slide1')
    const [showResults, setShowResults] = useState(false)
    const [totalCount, changeTotalCount] = useState(0)
    const [pageNumber, changePageNumber] = useState(0)
    // REACT ROUTER

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

    function onSearch(totalCount) {
        setShowResults(true)
        changeTotalCount(totalCount)
        changePageNumber(pageNumber)
        // Sharing State Between Components
    }

    return (
        <>
            <CardContext.Provider value={changeCards} >
                <DeckContext.Provider value={[decks, changeDecks]} >
                    <nav class="navbar navbar-expand-lg bg-light border border-dark">
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
                                {/* <li class="nav-item">
                                    <button id="tab-two-button" class="tab-links" onClick={() => changeTab('slide2')}>Results</button>
                                </li> */}
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
                    <div class="navbar-substitute"></div>

                    <div className="App text-center">
                        <div className="App-inner">
                            {/* <Header /> */}
                            <div className="homeContainer">
                                <div className="search-header-container">

                                </div>
                                {tab === 'slide1' && <div class="searchFieldContainer">

                                    {(showResults) &&
                                        <div>
                                            <h3 class="searchFilterHeader bg-info border border-dark mb-0 py-1">Search Results</h3>
                                            <div id="tab-two" className="searchResultsMaster">
                                                <SearchResults
                                                    autoResetPage={true}
                                                    showResults={showResults}
                                                    totalCount={totalCount}
                                                />
                                            </div>
                                        </div>

                                    }

                                    <h3 class="searchFilterHeader bg-info border border-bottom-0 border-dark mb-0 py-1">Card Search</h3>
                                    <div id="tab-one" className="searchFilterTab border border-dark panel text-left">
                                        <SearchFilter onSearch={onSearch} pageNumber={pageNumber} />
                                    </div>

                                </div>
                                }

                                {tab === 'slide3' && <div id="tab-three" className="deckMaster panel">
                                    <Deck />
                                </div>}

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