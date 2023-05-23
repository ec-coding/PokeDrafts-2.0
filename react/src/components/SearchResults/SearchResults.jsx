import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ReactPaginate from 'react-paginate';
import CardContext from '../../contexts/CardContext';
import PageCountContext from '../../contexts/PageCountContext';
import Card from '../Card/Card'
import '../../style/dropdown.css';
import './searchResults.css';

export default function SearchResults({ pageCount, pageSwitch, currentPage, totalCount }) {

    const [cards, changeCards] = useContext(CardContext)
    const [nameSort, setNameSort] = useState(true)
    const [typeSort, setTypeSort] = useState(true)
    const [idSort, setIdSort] = useState(true)
    const [hpSort, setHpSort] = useState(true)
    const [raritySort, setRaritySort] = useState(true)
    const [artistSort, setArtistSort] = useState(true)
    const [animationKey, setAnimationKey] = useState(0);

    const divsArray = [...Array(totalCount)];

    const divs = divsArray.map((item, index) => (
        <div key={index}></div>
    ));


    const handlePrevPage = () => {
        if (currentPage > 1) {
            const updatedPage = currentPage - 1
            console.log(`This is the updated page: ${updatedPage}`)
            pageSwitch(updatedPage)
            setAnimationKey(animationKey + 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pageCount) {
            const updatedPage = currentPage + 1
            console.log(`This is the updated page: ${updatedPage}`)
            pageSwitch(updatedPage)
            setAnimationKey(animationKey + 1)
        }
    }

    const onPageChange = (event) => {
        const newPage = event.selected + 1
        pageSwitch(newPage)
        setAnimationKey(animationKey + 1)
    }

    const sortByName = () => {
        if (nameSort === true) {
            const sortedByName = [...cards].sort((a, b) => {
                return a.name < b.name ? -1 : 1;
            })
            setNameSort(false)
            changeCards(sortedByName)
        } else if (nameSort === false) {
            const sortedByName = [...cards].sort((a, b) => {
                return a.name < b.name ? 1 : -1;
            })
            setNameSort(true)
            changeCards(sortedByName)
        }
    }

    const sortById = () => {
        if (idSort === true) {
            const sortedById = [...cards].sort((a, b) => {
                return Number(a.number) < Number(b.number) ? -1 : 1
            })
            setIdSort(false)
            changeCards(sortedById)
        } else if (idSort === false) {
            const sortedById = [...cards].sort((a, b) => {
                return Number(a.number) < Number(b.number) ? 1 : -1
            })
            setIdSort(true)
            changeCards(sortedById)
        }
    }

    const sortByRarity = () => {
        function getSortForRarity(rarity) {
            if (rarity === 'Rare Holo') {
                return 1000;
            }
            if (rarity === 'Rare') {
                return 100;
            }
            if (rarity === 'Uncommon') {
                return 10;
            }
            return 0; // This would be Common
        }

        if (raritySort === true) {
            const sortedByRarity = [...cards].sort((a, b) => {
                let aValue = getSortForRarity(a.rarity);
                let bValue = getSortForRarity(b.rarity);
                return aValue < bValue ? -1 : 1;
            })
            setRaritySort(false)
            changeCards(sortedByRarity)
        } else if (raritySort === false) {
            const sortedByRarity = [...cards].sort((a, b) => {
                let aValue = getSortForRarity(a.rarity);
                let bValue = getSortForRarity(b.rarity);
                return aValue < bValue ? 1 : -1;
            })
            setRaritySort(true)
            changeCards(sortedByRarity)
        }
    }

    const sortByArtist = () => {
        if (artistSort === true) {
            const sortedByArtist = [...cards].sort((a, b) => {
                return a.artist < b.artist ? -1 : 1
            })
            setArtistSort(false)
            changeCards(sortedByArtist)
        } else if (artistSort === false) {
            const sortedByArtist = [...cards].sort((a, b) => {
                return a.artist < b.artist ? 1 : -1
            })
            setArtistSort(true)
            changeCards(sortedByArtist)
        }
    }

    return (
        <>
            <div id="carouselExampleCaptions" class="searchResultsMaster carousel slide" data-bs-ride="false">
                <nav id="results-nav" class="justify-content-center border border-top-0 border-dark">
                    <div>
                        <ul class="row m-0 p-0">
                            {/* <li class="col nav-title p-0"><h4 class="mt-1">Sort By</h4></li> */}
                            <li class="col p-0 m-0"><button onClick={sortByName}>Name</button></li>
                            <li class="col p-0 m-0"><button onClick={sortById}>Set No.</button></li>
                            <li class="col p-0 m-0"><button onClick={sortByRarity}>Rarity</button></li>
                            <li class="col p-0 m-0"><button onClick={sortByArtist}>Artist</button></li>
                        </ul>
                    </div>
                </nav>
                <AnimatePresence mode="wait">
                    <motion.div class="searchResultsContainer carousel-inner active pt-3 d-flex justify-content-center row"
                        key={animationKey}
                        // initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        // initial={{ x: '100%' }}
                        // animate={{
                        //     x: 0
                        //   }}
                        transition={{ delay: 0.25, duration: 0.65 }}
                    >

                        {cards && cards.map((card) => (
                            <Card card={card} onDeck={false} />
                        ))}

                    </motion.div>
                </AnimatePresence>
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={onPageChange}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    forcePage={currentPage - 1}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link border-0"
                    previousClassName="page-item sm-pag-btn"
                    previousLinkClassName="page-link border-0"
                    nextClassName="page-item sm-pag-btn"
                    nextLinkClassName="page-link border-0"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination mt-4 pb-3"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
                <button class="carousel-control-prev lg-button-remove" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={handlePrevPage}>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next lg-button-remove" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={handleNextPage}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

// Get the total number of cards requested
// Create an empty div for every X amount of cards within the total above
// When pagination occurs, place the Xth set of X cards in its respective div container, based on its index
// Ex. cards between index 0 and 15 are placed in div #1, cards between index 16 and 31 are placed in div #2, etc


// PRE-LOAD A GIF, and load it for each card while it is materializing