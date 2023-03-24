import React, { useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import CardContext from '../../CardContext';
import Card from '../Card/Card'
import '../../style/Dropdown.css';
import './SearchResults.css';

export default function SearchResults({ totalCount }) {
    
    const [cards, changeCards] = useContext(CardContext)
    const [nameSort, setNameSort] = useState(true)
    const [typeSort, setTypeSort] = useState(true)
    const [idSort, setIdSort] = useState(true)
    const [hpSort, setHpSort] = useState(true)
    const [raritySort, setRaritySort] = useState(true)
    const [artistSort, setArtistSort] = useState(true)
    const [pageNumber, changePageNumber] = useState(0)

    const itemsPerPage = 14;
    const endOffset = pageNumber + itemsPerPage;
    const currentItems = cards.slice(pageNumber, endOffset)
    const pageCount = Math.ceil(totalCount / itemsPerPage)
    const arrayChunks = (array, chunk_size) => Array(Math.ceil(array?.length / chunk_size)).fill().map((_, index) => index * chunk_size).map((begin) => array.slice(begin, begin + chunk_size));
    const chunks = arrayChunks(cards, 14);
    
    const handlePageClick = (event) => {
        const pageNumber = (event.selected * itemsPerPage) % totalCount;
        console.log(pageNumber)
        changePageNumber(pageNumber)
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
                <nav id="results-nav" class="d-flex justify-content-center border border-top-0 border-dark">
                    <div>
                        <ul class="row m-0">
                            <li class="col nav-title p-0"><h4 class="mt-1">Sort By</h4></li>
                            <li class="col p-0 m-0"><button onClick={sortByName}>Name</button></li>
                            <li class="col p-0 m-0"><button onClick={sortById}>Set No.</button></li>
                            <li class="col p-0 m-0"><button onClick={sortByRarity}>Rarity</button></li>
                            <li class="col p-0 m-0"><button onClick={sortByArtist}>Artist</button></li>
                        </ul>
                    </div>
                </nav>
                <div class="carousel-inner active pt-2">

                    {currentItems && currentItems.map ((card) => (

                        <Card card={card} onDeck={false} />

                    ))}

                    <ReactPaginate
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        forcePage={0}
                        previousLabel="< Prev"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="carousel-control-prev"
                        nextClassName="page-item"
                        nextLinkClassName="carousel-control-next"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />

                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>

        </>
    )
}
