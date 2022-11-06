import React, { useState, useContext } from 'react';
import DeckContext from '../DeckContext';
import Card from './Card'

export default function SearchResults() {

    const [decks, changeDecks] = useContext(DeckContext)

    return (
        <>
        <div class="search-header-container">
          <h2 id="search-header">Card Deck</h2>
            <section class="instructions">
              <h6 class="instructions-text">Browse through and click on any card to remove it from your deck.</h6>
            </section>
        </div>
        </>
    )
}