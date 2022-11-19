import React, { useState, useContext } from 'react';
import DeckContext from '../DeckContext';
import Card from './Card'

export default function SearchResults() {
    const typePokemon = []
    const typeTrainer = []
    const typeEnergy = []
    const [decks, changeDecks] = useContext(DeckContext)
    const arrayChunks = (array, chunk_size) => Array(Math.ceil(array?.length / chunk_size)).fill().map((_, index) => index * chunk_size).map((begin) => array.slice(begin, begin + chunk_size));
    const chunks = arrayChunks(decks, 60);

    decks.sort((a, b) => a.name.localeCompare(b.name))


    // HOW DO I MAKE THIS MUTATE THE ARRAYS?
    // var groupBy = function (xs, key) {
    //     return xs.reduce(function (rv, x) {
    //         (rv[x[key]] = rv[x[key]] || []).push(x);
    //         return rv;
    //     }, {});
    // };

    // groupBy(decks, 'id')

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

    return (
        <>
            <div class="search-header-container">
                <h2 id="search-header">Card Deck</h2>
                <section class="instructions">
                    <h6 class="instructions-text">Browse through and click on any card to remove it from your deck.</h6>
                </section>
            </div>


            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}

                <div class="deck-inner carousel-inner active">


                    {chunks.map(slides => {
                        if (chunks.indexOf(slides) === 0) {
                            return (
                                <>
                                    <h4>Pokémon</h4>
                                    <div class="deck-type type-pokemon">
                                        
                                        {typePokemon.map((card) => {
                                            return (
                                                <Card card={card} onDeck={true} />
                                            )
                                        })}
                                    </div>
                                    <h4>Trainer</h4>
                                    <div class="deck-type type-trainer">
                                        {typeTrainer.map((card) => {
                                            return (
                                                <Card card={card} onDeck={true} />
                                            )
                                        })}
                                    </div>
                                    <h4>Energy</h4>
                                    <div class="deck-type type-energy">
                                        {typeEnergy.map((card) => {
                                            return (
                                                <Card card={card} onDeck={true} />
                                            )
                                        })}
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

