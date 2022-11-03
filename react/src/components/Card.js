import React from 'react'
import Icon from './Icon'
import CardAttributes from './CardAttributes'

export default function Card({ card }) {
  const targetModal = `card-modal-${card.id}`
  const targetModalID = `#card-modal-${card.id}`
  const targetType = `card-modal-${card.types}`

  return (
    <>
      <img src={card.images.small} type="button" class="slide-img w-10" data-bs-toggle="modal" data-bs-target={targetModalID} alt="..." />

      <div class="modal fade" id={targetModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">

          <div class="modal-content">

            <div class="modal-header" >
              <h1 class="modal-title fs-4" id="exampleModalLabel">Card Info</h1>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">X</button>
            </div>

            <div class="modal-body card-master" className={targetType}>

              <div class="row card-box">
                <div class="card-divider">
                  <img src={card.images.large} class="modal-img" alt="..." />
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
                  <CardAttributes statTrio={card} />
                  <CardAttributes cardBio={card?.flavorText} />


                </div>

              </div>
              <button type="button" class="btn btn-primary">Add to Deck</button>
            </div>
          </div>

        </div>
      </div>

      {/* <div class="modal fade" id={targetModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{card.name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src={card.images.large} type="button" class="modal-img" alt="..." />
              <br />
              <h3>Name: {card.name}</h3>
              <h3>Type: {card.types}</h3>
              <h3>Weakness: {card.weaknesses[0].type}</h3>
              <h3>Desc: {card.flavorText}</h3>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Add to Deck</button>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}