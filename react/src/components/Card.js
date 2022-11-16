import React, { useState, useContext } from 'react';
import DeckContext from '../DeckContext';
import Icon from './Icon'
import CardAttributes from './CardAttributes'

export default function Card({ card, onDeck }) {
  const targetModal = `card-modal-${card.id}`
  const targetModalID = `#card-modal-${card.id}`
  const targetType = `card-modal-${card.types}`
  const closeModal = `close-modal-${card.id}`

  const [decks, changeDecks] = useContext(DeckContext)

  function addCardToDeck() {
    fetch('http://localhost:7000/decks/createDeckCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(card)
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        let newDeck = [...decks, data]
        changeDecks(newDeck)
      })
  }

  function removeCardFromDeck(id) {
    fetch('http://localhost:7000/decks/deleteCard', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    })
      .then((res) => {
        if (res.ok) {
          const updateDeck = decks.filter((item) => item !== card)
          document.getElementById(closeModal).click();
          changeDecks(updateDeck)
          return res
        }
      })
  }

  let button;
  if (onDeck == false) {
    button = <button type="button" class="btn btn-primary col" onClick={addCardToDeck}>Add to Deck</button>
  } else if (onDeck == true) {
    button = <button type="button" class="btn btn-primary col" onClick={removeCardFromDeck}>Delete</button>
  }


  return (
    <>
      <img src={card.images.small} type="button" class="slide-img w-10" data-bs-toggle="modal" data-bs-target={targetModalID} alt="..." />

      <div class="modal fade" id={targetModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">

          <div class="modal-content">

            <div class="modal-header" >
              <h1 class="modal-title fs-4" id="exampleModalLabel">Card Info</h1>
              <button type="button" id={closeModal} class="btn btn-secondary" data-bs-dismiss="modal">X</button>
            </div>

            <div class="modal-body card-master" className={targetType}>

              <div class="row card-box">
                <div class="card-divider card-image">
                  <img src={card.images.large} class="modal-img" alt="..." />
                  <div class="row modal-button-container">
                    <button type="button" class="btn btn-primary col"><a href={card?.cardmarket?.url} target="_blank">Marketboard</a></button>
                    {/* IF STATEMENT HERE, 2nd PROP PASSED INTO CARD SHOW ADD TO DECK BUTTON OR SHOW REMOVE FROM DECK BUTTON */}
                    {/* IF ONDECK = TRUE, SHOW REMOVE FROM DECK BUTTON */}
                    {button}
                  </div>
                </div>

                <div class="card-divider card-text">
                  <div class="row card-title-box">
                    <CardAttributes cardName={card?.name} />
                    <CardAttributes cardCheck={card} />
                    <CardAttributes pokemonHP={card?.hp} cardCheck={card} />
                    <CardAttributes trainerHP={card?.hp} />
                    <Icon type={card?.types} />
                  </div>
                  <hr />

                  <div>
                    <CardAttributes pokemonPower={card?.abilities} />
                    <CardAttributes pokemonAttacks={card?.attacks} />
                    <CardAttributes cardRules={card?.rules} />
                  </div>


                  <CardAttributes statTrio={card} />
                  <CardAttributes cardBio={card?.flavorText} />

{/* Separate background for unique info */}

                  <div>
                    <div className="row">
                      <h6 class="col">Set: {card?.set.name}</h6>
                      <h6 class="col text-right">Rarity: {card?.rarity}</h6>
                    </div>
                    <hr />
                    <div className="row">
                      <h6 class="col">Trending Price: <h6 class="no-margin-bottom">${card?.cardmarket.prices.trendPrice} USD</h6></h6>
                      <h6 class="col text-right">Last Updated: <h6 class="no-margin-bottom">{card?.cardmarket.updatedAt}</h6></h6>
                    </div>
                  </div>
                  <hr />

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}