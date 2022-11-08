import React, { useState, useContext } from 'react';
import CardContext from '../CardContext';
import Card from './Card'

export default function SearchResults() {

    const [cards, changeCards] = useContext(CardContext)

    const arrayChunks = (array, chunk_size) => Array(Math.ceil(array?.length / chunk_size)).fill().map((_, index) => index * chunk_size).map((begin) => array.slice(begin, begin + chunk_size));
    const chunks = arrayChunks(cards, 20);


    return (
        <>
            <div class="search-header-container">
                <h2 id="search-header">Search Results</h2>
                <section class="instructions">
                    <h6 class="instructions-text">Browse through and click on any card for more information.</h6>
                </section>
            </div>

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
                                            <Card card={card} />
                                        )
                                    })}
                                </div>
                            )
                        } else {
                            return (
                                <div class="carousel-item">
                                    {slides.map(card => {
                                        return (
                                            <Card card={card} />
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