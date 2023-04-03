import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import SearchResults from '../../components/SearchResults/SearchResults'
// import Profile from '../components/Profile'
import Deck from '../../components/UserDeck/Deck'
// import Parallax from '../components/Parallax/Parallax'
import UserContext from '../../contexts/UserContext';
import CardContext from '../../contexts/CardContext';
import DeckContext from '../../contexts/DeckContext';
import './Home.css'
import '../../style/Modal.css';

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
    const [totalCount, setTotalCount] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const [fetchLink, setFetchLink] = useState()

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

    function onSearch(totalCount, pageCount) {
        setShowResults(true)
        setTotalCount(totalCount)
        setPageCount(pageCount)
        // Sharing State Between Components
    }

    function pageSwitch(updatedPage) {
        setCurrentPage(updatedPage)
    }

    return (
        <>
            <CardContext.Provider value={changeCards} >
                <DeckContext.Provider value={[decks, changeDecks]} >
                    <nav class="navbar navbar-expand-lg bg-light border border-dark py-0 w-100">
                        <div class="container-fluid px-4">
                            <ul class="navbar-nav h-100">
                                <li>
                                    <img id="title-img" src="https://i.imgur.com/HgSy1Gq.png" alt="trim-images" border="0" class="pt-1 mx-2" />
                                </li>
                                {/* <li class="nav-item">
                                        <button id="tab-zero-button" class="tab-links" onClick={() => changeTab('slide0')}>Profile</button>
                                    </li> */}
                                {/* <li class="nav-item">
                                    <button id="tab-one-button" class="tab-links h-100" onClick={() => changeTab('slide1')}>Search</button>
                                </li> */}
                                {/* <li class="nav-item">
                                    <button id="tab-two-button" class="tab-links" onClick={() => changeTab('slide2')}>Results</button>
                                </li> */}
                                {/* <li class="nav-item">
                                    <button id="tab-three-button" class="tab-links h-100" onClick={() => changeTab('slide3')}>Deck</button>
                                </li> */}
                            </ul>
                            <ul class="navbar-nav h-100">
                                <li class="nav-item">
                                    <button id="logout-button" class="tab-links h-100" onClick={logout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="navbar-substitute"></div>

                    <div className="App text-center">
                        <div className="App-inner">
                            <div className="homeContainer">
                                {tab === 'slide1' && <div class="searchFieldContainer">

                                    {(showResults) &&
                                        <div>
                                            <h3 class="componentBanner bg-info border border-dark mb-0 py-1">Search Results</h3>
                                            <div id="tab-two" className="searchResultsTab">
                                                <SearchResults
                                                    pageSwitch={pageSwitch}
                                                    autoResetPage={true}
                                                    currentPage={currentPage}
                                                    showResults={showResults}
                                                    totalCount={totalCount}
                                                    pageCount={pageCount}
                                                />
                                            </div>
                                        </div>

                                    }

                                    <ul class="componentBanner border border-dark border-bottom-0 m-0 p-0 d-flex justify-content-center" id="myTab" role="tablist">
                                        <li class="nav-item mx-1" role="presentation">
                                            <button class="active p-0" id="search-tab" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="search" aria-selected="true">
                                                <h3 class="border-0 m-0 p-1">Search</h3>
                                            </button>
                                        </li>
                                        <li class="nav-item mx-1" role="presentation">
                                            <button class="p-0" id="deck-tab" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="deck" aria-selected="false">
                                                <h3 class="border-0 m-0 p-1">Deck</h3>
                                            </button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div id="tab-one" className="searchFilterTab border border-dark panel text-start tab-pane fade show active" role="tabpanel">
                                            <SearchFilter
                                                pageSwitch={pageSwitch}
                                                onSearch={onSearch}
                                                currentPage={currentPage}
                                            />
                                        </div>
                                        <div id="tab-three" className="deckMaster panel show tab-pane fade" aria-labelledby="headingOne" role="tabpanel">
                                            <Deck />
                                        </div>
                                    </div>
                                </div>
                                }
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