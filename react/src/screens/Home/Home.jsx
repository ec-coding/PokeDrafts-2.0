import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from '../../components/Footer/Footer'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import SearchResults from '../../components/SearchResults/SearchResults'
// import Profile from '../components/Profile'
import Deck from '../../components/UserDeck/Deck'
// import Parallax from '../components/Parallax/Parallax'
import UserContext from '../../contexts/UserContext';
import CardContext from '../../contexts/CardContext';
import DeckContext from '../../contexts/DeckContext';
import './home.scss'
import '../../style/modal.css';

const Home = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        if (!document.startViewTransition) {
            return navigate(window.location.reload());
        } else {
            return document.startViewTransition(() => {
                navigate(window.location.reload());
            });
        }
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
    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(false)

        // Sharing State Between Components
    }

    function pageSwitch(updatedPage) {
        setCurrentPage(updatedPage)
    }

    return (
        <>
            <CardContext.Provider value={changeCards} >
                <DeckContext.Provider value={[decks, changeDecks]} >
                    <div className='home'>
                        <nav className="navbar navbar-expand-lg bg-light border border-dark py-0 w-100">
                            <div className="container-fluid px-4">
                                <ul className="navbar-nav h-100">
                                    <li>
                                        <img id="title-img" src="https://i.imgur.com/HgSy1Gq.png" alt="trim-images" border="0" className="pt-1 mx-2" />
                                    </li>
                                    {/* <li className="nav-item">
                                        <button id="tab-zero-button" className="tab-links" onClick={() => changeTab('slide0')}>Profile</button>
                                    </li> */}
                                    {/* <li className="nav-item">
                                    <button id="tab-one-button" className="tab-links h-100" onClick={() => changeTab('slide1')}>Search</button>
                                </li> */}
                                    {/* <li className="nav-item">
                                    <button id="tab-two-button" className="tab-links" onClick={() => changeTab('slide2')}>Results</button>
                                </li> */}
                                    {/* <li className="nav-item">
                                    <button id="tab-three-button" className="tab-links h-100" onClick={() => changeTab('slide3')}>Deck</button>
                                </li> */}
                                </ul>
                                <ul className="navbar-nav h-100">
                                    <li className="nav-item">
                                        <button id="logout-button" className="tab-links h-100" onClick={logout}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="navbar-substitute"></div>

                        <div className="App text-center">
                            <div className="App-inner">
                                <div className="homeContainer">
                                    {tab === 'slide1' && <div className="searchFieldContainer">

                                        {(showResults) &&
                                            <AnimatePresence>
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <h3 className="componentBanner bg-info border border-dark mb-0 py-1">Search Results</h3>
                                                    <div id="tab-two" className="searchResultsTab">
                                                        <SearchResults
                                                            pageSwitch={pageSwitch}
                                                            autoResetPage={true}
                                                            currentPage={currentPage}
                                                            showResults={showResults}
                                                            totalCount={totalCount}
                                                            pageCount={pageCount}
                                                            isLoading={isLoading}
                                                        />
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                        }

                                        <ul className="componentBanner border border-dark border-bottom-0 m-0 p-0 d-flex justify-content-center" id="myTab" role="tablist">
                                            <li className="nav-item mx-1" role="presentation">
                                                <button className="active p-0" id="search-tab" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="search" aria-selected="true">
                                                    <h3 className="border-0 m-0 p-1">Search</h3>
                                                </button>
                                            </li>
                                            <li className="nav-item mx-1" role="presentation">
                                                <button className="p-0" id="deck-tab" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="deck" aria-selected="false">
                                                    <h3 className="border-0 m-0 p-1">Deck</h3>
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div id="tab-one" className="searchFilterTab border border-dark panel text-start tab-pane show active" role="tabpanel">
                                                <SearchFilter
                                                    pageSwitch={pageSwitch}
                                                    onSearch={onSearch}
                                                    currentPage={currentPage}
                                                />
                                            </div>
                                            <div id="tab-three" className="deckMaster panel show tab-pane" aria-labelledby="headingOne" role="tabpanel">
                                                <Deck />
                                            </div>
                                        </div>
                                    </div>
                                    }
                                </div>

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