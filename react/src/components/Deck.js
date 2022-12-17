import React, { useState, useContext } from 'react';
import UserContext from '../UserContext';
import DeckContext from '../DeckContext';
import Card from './Card'

export default function UserDeck() {
    const typePokemon = []
    const typeTrainer = []
    const typeEnergy = []
    const [nameSort, setNameSort] = useState(true)
    const [typeSort, setTypeSort] = useState(true)
    const [idSort, setIdSort] = useState(true)
    const [hpSort, setHpSort] = useState(true)
    const [raritySort, setRaritySort] = useState(true)
    const [artistSort, setArtistSort] = useState(true)
    const [decks, changeDecks] = useContext(DeckContext)
    const arrayChunks = (array, chunk_size) => Array(Math.ceil(array?.length / chunk_size)).fill().map((_, index) => index * chunk_size).map((begin) => array.slice(begin, begin + chunk_size));
    const chunks = arrayChunks(decks, 60);
    const user = useContext(UserContext);


    // HOW DO I MAKE THIS MUTATE THE ARRAYS?
    var groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    const deckDict = groupBy(decks, 'id')

    // SORT BY CARD TYPE
    for (var i = 0; i < decks.length; i++) {
        if (decks[i].supertype === "Pokémon") {
            typePokemon.push(decks[i])
        } else if (decks[i].supertype === "Trainer") {
            typeTrainer.push(decks[i])
        } else if (decks[i].supertype === "Energy") {
            typeEnergy.push(decks[i])
        }
    }

    const renderPokemon = () => {
        const mySet2 = new Set()

        let retArr = []
        for (var i = 0; i < typePokemon.length; i++) {
            mySet2.add(typePokemon[i].id)
        }

        for (const [key, value] of mySet2.entries()) {

            retArr.push(
                <div className={'deck-card-stack pokemon-card-stack'} >
                    {deckDict[value].map((card, index) => {
                        return (
                            <div className={'deck-card pokemon-card'} style={{
                                // zIndex: index + 1, 
                                top: 30 * index
                            }} >
                                <Card card={card} onDeck={true} />
                            </div>
                        )
                    })}
                </div>
            )

        }
        return retArr
    }

    const renderTrainer = () => {
        const mySet3 = new Set()

        let retArr = []
        for (var i = 0; i < typeTrainer.length; i++) {
            mySet3.add(typeTrainer[i].id)
        }
        for (const [key, value] of mySet3.entries()) {

            retArr.push(
                <div className={'deck-card-stack trainer-card-stack'} >
                    {deckDict[value].map((card, index) => {
                        return (
                            <div className={'deck-card trainer-card'} style={{
                                // zIndex: index + 1, 
                                top: 30 * index
                            }} >
                                <Card card={card} onDeck={true} />
                            </div>
                        )
                    })}
                </div>
            )

        }
        return retArr
    }

    const renderEnergy = () => {
        const energyChunks = arrayChunks(typeEnergy, 4);
        const mySet4 = new Set()

        let retArr = []
        for (var i = 0; i < typeEnergy.length; i++) {
            mySet4.add(typeEnergy[i].id)
        }
        for (const [key, value] of mySet4.entries()) {
            retArr.push(
                <div className={'deck-card-stack energy-card-stack'} >
                    {deckDict[value].map((card, index) => {
                        if (index < 4) {
                            return (
                                <div className={'deck-card energy-card'} style={{
                                    // zIndex: index + 1, 
                                    top: 30 * index
                                }} >
                                    <Card card={card} onDeck={true} />
                                </div>
                            )
                        }
                    })}
                </div>
            )
        }
        return retArr
    }

    function deleteDeck(id) {
        fetch(`${process.env.REACT_APP_API_URL}/decks/deleteDeck`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
            .then((res) => {
                if (res.ok) {
                    let deckState = []
                    changeDecks(deckState)
                    return res
                }
            })
    }


    // SORTING
    const sortByName = () => {
        if (nameSort === true) {
            const sortedByName = [...decks].sort((a, b) => {
                return a.name < b.name ? -1 : 1;
            })
            setNameSort(false)
            changeDecks(sortedByName)
        } else if (nameSort === false) {
            const sortedByName = [...decks].sort((a, b) => {
                return a.name < b.name ? 1 : -1;
            })
            setNameSort(true)
            changeDecks(sortedByName)
        }
    }

    // const sortByType = () => {
    //     if (typeSort === true) {
    //         const sortedByType = [...decks].sort((a, b) => {
    //             return a.types[0] < b.types[0] ? -1 : 1
    //         })
    //         setTypeSort(false)
    //         changeDecks(sortedByType)

    //     } else if (typeSort === false) {
    //         const sortedByType = [...decks].sort((a, b) => {
    //             return b.types[0] > a.types[0] ? 1 : -1
    //         })
    //         setTypeSort(true)
    //         changeDecks(sortedByType)
    //     }
    // }

    const sortById = () => {
        if (idSort === true) {
            const sortedById = [...decks].sort((a, b) => {
                return Number(a.number) < Number(b.number) ? -1 : 1
            })
            setIdSort(false)
            changeDecks(sortedById)
        } else if (idSort === false) {
            const sortedById = [...decks].sort((a, b) => {
                return Number(a.number) < Number(b.number) ? 1 : -1
            })
            setIdSort(true)
            changeDecks(sortedById)
        }
    }

    const sortByHP = () => {
        if (hpSort === true) {
            const sortedByHP = [...decks].sort((a, b) => {
                return Number(a.hp) < Number(b.hp) ? 1 : -1
            })
            setHpSort(false)
            changeDecks(sortedByHP)
        } else if (hpSort === false) {
            const sortedByHP = [...decks].sort((a, b) => {
                return Number(a.hp) < Number(b.hp) ? -1 : 1
            })
            setHpSort(true)
            changeDecks(sortedByHP)
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
            const sortedByRarity = [...decks].sort((a, b) => {
                let aValue = getSortForRarity(a.rarity);
                let bValue = getSortForRarity(b.rarity);
                return aValue < bValue ? -1 : 1;
            })
            setRaritySort(false)
            changeDecks(sortedByRarity)
        } else if (raritySort === false) {
            const sortedByRarity = [...decks].sort((a, b) => {
                let aValue = getSortForRarity(a.rarity);
                let bValue = getSortForRarity(b.rarity);
                return aValue < bValue ? 1 : -1;
            })
            setRaritySort(true)
            changeDecks(sortedByRarity)
        }
    }

    const sortByArtist = () => {
        if (artistSort === true) {
            const sortedByArtist = [...decks].sort((a, b) => {
                return a.artist < b.artist ? -1 : 1
            })
            setArtistSort(false)
            changeDecks(sortedByArtist)
        } else if (artistSort === false) {
            const sortedByArtist = [...decks].sort((a, b) => {
                return a.artist < b.artist ? 1 : -1
            })
            setArtistSort(true)
            changeDecks(sortedByArtist)
        }
    }




    // console.log('@@@ render pokemon', renderPokemon())

    // let typeDict;
    // for (var i = 0; i < decks.length; i++) {
    //     if (typeDict[decks[i].supertype])
    //         typeDict[decks[i].supertype].push(decks[i])
    //     else
    //         typeDict[decks[i].supertype] = [decks[i]]
    // }

    return (
        <>
            <div class="search-header-container">
                <h2 id="search-header">Card Deck</h2>
                <section class="instructions">
                    <h6 class="instructions-text">Browse through and click on any card to remove it from your deck.</h6>
                </section>
            </div>
            <section class="sub-header button-input deck-console">
                <ul class="row">
                    <li class="col">
                        <button type="submit">Rename Deck</button>
                    </li>
                    <li class="col">
                        <button type="submit" onClick={deleteDeck}>Delete Deck</button>
                    </li>
                </ul>
            </section>


            <section class="sub-header button-input">
                <ul class="row">
                    <li class="col"><h4>Sort By</h4></li>
                    <li class="col"><button onClick={sortByName}>Name</button></li>
                    {/* <li class="col"><button onClick={sortByType}>Type</button></li> */}
                    <li class="col"><button onClick={sortById}>Set No.</button></li>
                    <li class="col"><button onClick={sortByHP}>HP</button></li>
                    <li class="col"><button onClick={sortByRarity}>Rarity</button></li>
                    <li class="col"><button onClick={sortByArtist}>Artist</button></li>
                </ul>
            </section>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}

                <div class="deck-inner carousel-inner active">
                    <div class="deck-inner-header">
                        <h3>Deck 1</h3>
                        <h4>Cards in Deck: {decks.length}</h4>
                    </div>
                    <br />

                    {chunks.map(slides => {
                        if (chunks.indexOf(slides) === 0) {
                            return (
                                <>
                                    {/* Show counters for # of cards in each stack */}
                                    <div class="deck-header">
                                        <h4 class="card-stack-title">Pokémon</h4>
                                        <h4>x {typePokemon.length}</h4>
                                    </div>
                                    <div className="deck-type type-pokemon">
                                        {renderPokemon()}
                                    </div>

                                    <div class="deck-header">
                                        <h4 class="card-stack-title">Trainer</h4>
                                        <h4>x {typeTrainer.length}</h4>
                                    </div>
                                    <div className="deck-type type-trainer">
                                        {renderTrainer()}
                                    </div>

                                    <div class="deck-header">
                                        <h4 class="card-stack-title">Energy</h4>
                                        <h4>x {typeEnergy.length}</h4>
                                    </div>
                                    <div class="deck-type type-energy">
                                        {renderEnergy()}
                                    </div>
                                </>
                            )
                        }
                    })
                    }


                    {/* How do you assign an array chunk to each carousel? */}

                    {/* {chunks.map(slides => {
                            if (chunks.indexOf(slides) === 0) {
                                return (
                                    <div class="carousel-item active">
                                        {slides.map(card => {
                                            return (
                                                <Card card={card} onDeck={true} />
                                            )
                                        })}
                                    </div>
                                )
                            } else {
                                return (
                                    <div class="carousel-item">
                                        {slides.map(card => {
                                            return (
                                                <Card card={card} onDeck={true} />
                                            )
                                        })}
                                    </div>
                                )
                            }
                        })} */}
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


                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
                </div>
            </div>
        </>
    )
}

