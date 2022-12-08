import React, { useState, useContext } from 'react';
import CardContext from '../CardContext';
import Card from './Card'
import '../style/Dropdown.css';

export default function SearchResults() {

    const [cards, changeCards] = useContext(CardContext)
    const [nameSort, setNameSort] = useState(true)
    const [typeSort, setTypeSort] = useState(true)
    const [idSort, setIdSort] = useState(true)
    const [hpSort, setHpSort] = useState(true)
    const [raritySort, setRaritySort] = useState(true)
    const [artistSort, setArtistSort] = useState(true)

    const arrayChunks = (array, chunk_size) => Array(Math.ceil(array?.length / chunk_size)).fill().map((_, index) => index * chunk_size).map((begin) => array.slice(begin, begin + chunk_size));
    const chunks = arrayChunks(cards, 24);

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

    const sortByType = () => {
        if (typeSort === true) {
            const sortedByType = [...cards].sort((a, b) => {
                return a.types[0] < b.types[0] ? -1 : 1
            })
            setTypeSort(false)
            changeCards(sortedByType)

        } else if (typeSort === false) {
            const sortedByType = [...cards].sort((a, b) => {
                return b.types[0] > a.types[0] ? 1 : -1
            })
            setTypeSort(true)
            changeCards(sortedByType)
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

    const sortByHP = () => {
        if (hpSort === true) {
            const sortedByHP = [...cards].sort((a, b) => {
                return Number(a.hp) < Number(b.hp) ? 1 : -1
            })
            setHpSort(false)
            changeCards(sortedByHP)
        } else if (hpSort === false) {
            const sortedByHP = [...cards].sort((a, b) => {
                return Number(a.hp) < Number(b.hp) ? -1 : 1
            })
            setHpSort(true)
            changeCards(sortedByHP)
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
            <div class="search-header-container">
                <h2 id="search-header">Search Results</h2>
                <section class="instructions">
                    <h6 class="instructions-text">Browse through and click on any card for more information.</h6>
                </section>
            </div>

            <nav id="sub-header-nav" class="button-input sub-header">
            <div>
                <ul class="row">
                    <li class="col"><h4>Sort By</h4></li>
                    <li class="col"><button onClick={sortByName}>Name</button></li>
                    <li class="col"><button onClick={sortByType}>Type</button></li>
                    <li class="col"><button onClick={sortById}>Set No.</button></li>
                    <li class="col"><button onClick={sortByHP}>HP</button></li>
                    <li class="col"><button onClick={sortByRarity}>Rarity</button></li>
                    <li class="col"><button onClick={sortByArtist}>Artist</button></li>
                </ul>
                </div>
            </nav>




            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner active">


                    {/* How do you assign an array chunk to each carousel? */}

                    {chunks.map(slides => {
                        if (chunks.indexOf(slides) === 0) {
                            return (
                                <div class="carousel-item active">
                                    {slides.map(card => {
                                        return (
                                            <Card card={card} onDeck={false} />
                                        )
                                    })}
                                </div>
                            )
                        } else {
                            return (
                                <div class="carousel-item">
                                    {slides.map(card => {
                                        return (
                                            <Card card={card} onDeck={false} />
                                        )
                                    })}
                                </div>
                            )
                        }
                    })}

                    {/* RESEARCH ARRAY CHUNKING */}

                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}

                    {/* <div class="carousel-item">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div> */}

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}