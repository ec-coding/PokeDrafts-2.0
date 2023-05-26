import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import DeckContext from '../../contexts/DeckContext';
import Icon from '../Icon/Icon'
import CardAttributes from '../CardAttributes/CardAttributes'
import './card.css';

export default function Card({ card, onDeck }) {

  const targetModal = `card-modal-${card.id}-${onDeck}`
  const targetModalID = `#card-modal-${card.id}-${onDeck}`
  const targetType = `card-modal-${card.types}`
  const closeModal = `close-modal-${card.id}`
  const addCard = `add-card-${card.id}`
  const cardName = `${card.name}`

  const user = useContext(UserContext);
  const [decks, changeDecks] = useContext(DeckContext)
  const cardCopyCount = decks.filter(element => element.id === card.id).length

  function addCardToDeck() {
    const maxCards = 60
    const maxDupes = 4
    let cardDuplicateCount = decks.filter(element => element.id === card.id)
    let doubleColorlessCount = decks.filter(element => element.name === "Double Colorless Energy")
    if ((card.supertype === "Energy") && (card.subtypes[0] === "Basic") && (card.name != "Double Colorless Energy")) {
      if (decks.length < maxCards) {
        fetch(`${process.env.REACT_APP_API_URL}/decks/createDeckCard`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + user.token
          },
          body: JSON.stringify(card)
        })
          // Card is not being created with the user's ID
          .then((response) => response.json())
          .then(data => {
            notify("success");
            let newDeck = [...decks, data]
            changeDecks(newDeck)

          })
      } else if (decks.length >= maxCards) {
        notify("deck-full");
      }
    } else if (card.name === "Double Colorless Energy") {
      if (doubleColorlessCount.length < maxDupes) {
        if (decks.length < maxCards) {
          fetch(`${process.env.REACT_APP_API_URL}/decks/createDeckCard`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify(card)
          })
            // Card is not being created with the user's ID
            .then((response) => response.json())
            .then(data => {
              notify("success");
              let newDeck = [...decks, data]
              changeDecks(newDeck)
            })
        } else if (decks.length >= maxCards) {
          notify("deck-full");
        }
      } else if (doubleColorlessCount.length >= maxDupes) {
        notify("dupe-full");
      }
    } else {
      if (cardDuplicateCount.length < maxDupes) {
        if (decks.length < maxCards) {
          fetch(`${process.env.REACT_APP_API_URL}/decks/createDeckCard`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + user.token
            },
            body: JSON.stringify(card)
          })
            // Card is not being created with the user's ID
            .then((response) => response.json())
            .then(data => {
              notify("success");
              let newDeck = [...decks, data]
              changeDecks(newDeck)
            })
        } else if (decks.length >= maxCards) {
          notify("deck-full");
        }
      } else if (cardDuplicateCount.length >= maxDupes) {
        notify("dupe-full");
      }
    }
  }

  function removeCardFromDeck(id) {
    fetch(`${process.env.REACT_APP_API_URL}/decks/deleteCard`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      },
      body: JSON.stringify(card)
    })
      .then((res) => {
        if (res.ok) {
          document.getElementById(closeModal).click();
          const updateDeck = decks.filter((item) => item._id !== card._id)
          changeDecks(updateDeck)
          return res
        }
      })
  }

  function notify(type) {
    (() => {
      let n = document.createElement("div");
      let id = Math.random().toString(36).substr(2, 10);
      n.setAttribute("id", id);
      n.classList.add("notification", type);
      n.classList.add("fade_out")
      if (type === "success") {
        n.innerText = cardName + ' was added to your deck';
      } else if (type === "deck-full") {
        n.innerText = 'Unable to add. You have reached the maximum of 60 cards for your deck.';
      } else if (type === "dupe-full") {
        n.innerText = 'Limit reached. You cannot add additional copies of this card to your deck.';
      }
      document.getElementById(addCard).appendChild(n);
      setTimeout(() => {
        var notifications = document.getElementById(addCard).getElementsByClassName("notification");
        for (let i = 0; i < notifications.length; i++) {
          if (notifications[i].getAttribute("id") == id) {
            notifications[i].classList.remove("fade_out")
            notifications[i].classList.add("do_after_goan");
            setTimeout(() => {
              var notifications = document.getElementById(addCard).getElementsByClassName("notification");
              for (let i = 0; i < notifications.length; i++) {
                if (notifications[i].getAttribute("id") == id) {
                  notifications[i].remove();
                  break;
                }
              }
            }, 350);
            break;
          }
        }
      }, 1500);
    })();
  }

  let button;
  if (onDeck == false) {
    button = <button type="button" class="btn btn-primary col ts-light border-dark mx-3 bg-warning" onClick={addCardToDeck}>Add to Deck</button>
  } else if (onDeck == true) {
    button = <button type="button" class="btn btn-primary col text-light ts-dark border-dark mx-3 bg-red" onClick={removeCardFromDeck}>Delete</button>
  }

  return (
    <>
      <img src={card.images.small} type="button" class="slide-img p-0 w-10 col-2" data-bs-toggle="modal" data-bs-target={targetModalID} alt="..." />

      <div class="modal fade" id={targetModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">

          <div class="modal-content">

            <div class="modal-header" >
              <h1 class="modal-title fs-4" id="exampleModalLabel">Card Info</h1>
              <button type="button" id={closeModal} class="btn btn-secondary" data-bs-dismiss="modal">X</button>
            </div>

            <div class="modal-body card-master" className={targetType}>

              <div class="row m-3">
                <div class="card-image col-xl-6 col-lg-6 col-lg-6 col-md-6 col-sm-12">
                  <img src={card.images.large} loading="lazy" class="modal-img" alt="..." />
                  <section class="modal-footer-container border mt-3">
                    <section class="row card-counter mx-0">
                      <div class="col">
                        <h5 class="text-center pt-1 mt-1 mb-2">Cards in deck: {decks.length}</h5>
                      </div>
                      <div class="col">
                        <h5 class="text-center pt-1 mt-1 mb-2">Copies in deck: {cardCopyCount}</h5>
                      </div>
                    </section>
                    <section class="row modal-button-container mx-0">
                      <button type="button" class="btn btn-primary col ts-dark border-dark mx-3 bg-blue"><a href={card?.cardmarket?.url} class="text-light" target="_blank">Marketboard</a></button>
                      {button}
                    </section>
                  </section>
                </div>

                <div class="card-text text-start col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="row card-title-box">
                    <CardAttributes cardName={card?.name} />
                    <CardAttributes cardCheck={card} />
                    <CardAttributes pokemonHP={card?.hp} cardCheck={card} />
                    <CardAttributes trainerHP={card?.hp} />
                    <Icon type={card?.types} />
                  </div>
                  <hr />

                  <div class="card-attack-box">
                    <CardAttributes pokemonPower={card?.abilities} />
                    <CardAttributes pokemonAttacks={card?.attacks} />
                    <CardAttributes cardRules={card?.rules} />
                  </div>

                  <div className="row card-set">
                    <h6 class="col mb-1">Set: {card?.set.name}</h6>
                    <h6 class="col text-end pe-3 mb-1">Rarity: {card?.rarity}</h6>
                  </div>
                  <hr />
                  <div className="row card-price">
                    <h6 class="col mb-0 pb-0">Trending Price: <h6 class="mb-0 pb-0">${card?.cardmarket.prices.trendPrice} USD</h6></h6>
                    <h6 class="col text-end pe-3 mb-0 pb-0">Last Updated: <h6 class="mb-0 pb-0">{card?.cardmarket.updatedAt}</h6></h6>
                  </div>
                  <hr />

                  <CardAttributes statTrio={card} />
                  <CardAttributes cardBio={card?.flavorText} />
                  <div className="row card-artist">
                    <h6 class="col mt-2">Illustrator: {card?.artist}</h6>
                  </div>

                  <div>
                    <div id={addCard} class="notification-area">
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}