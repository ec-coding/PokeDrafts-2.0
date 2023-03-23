import React, { useState, useContext } from 'react';
import CardContext from '../../CardContext';
import Icon from '../Icon';
import { Panel, Button, FlexboxGrid } from 'rsuite';
import { BiSearchAlt } from 'react-icons/bi'
import './SearchFilter.css'

// LOOK UP LOADING STRATEGIES ie lazy loading of images
// using logic to make first load good
// load the 1st page, once the first page has loaded, load the subsequent next 2 pages in order

// fill the buttons with an up and down arrow

export default function SearchFilter({ onSearch }) {
    const [cardType, changeCardType] = useState('Pokémon')
    const [cardSet, changeCardSet] = useState([])
    const [cardElement, changeCardElement] = useState('')
    const [searchResultsReveal, setSearchResultsReveal] = useState('')
    // Contexts are states that multiple components can share
    // External card context - We are using that card context
    const [cards, changeCards] = useContext(CardContext)
    const [show, toggleShow] = useState(false)
    const [pageNumber, changePageNumber] = useState(1)

    function getCards() {
        const nameInput = document.querySelector('#name-search').value
        const url = `https://api.pokemontcg.io/v2/cards/?`

        let subtypeParam = ''
        let fetchURLText = ''

        if (cardSet.includes('base1')) {
            subtypeParam += ` set.id:base1 OR`
        }
        if (cardSet.includes('base2')) {
            subtypeParam += ` set.id:base2 OR`
        }
        if (cardSet.includes('base3')) {
            subtypeParam += ` set.id:base3 OR`
        }
        if (cardSet.includes('base4')) {
            subtypeParam += ` set.id:base4 OR`
        }
        if (cardSet.includes('base5')) {
            subtypeParam += ` set.id:base5 OR`
        }
        if (cardSet.includes('gym1')) {
            subtypeParam += ` set.id:gym1 OR`
        }
        if (cardSet.includes('gym2')) {
            subtypeParam += ` set.id:gym2 OR`
        }
        if (cardSet.includes('neo1')) {
            subtypeParam += ` set.id:neo1 OR`
        }
        if (cardSet.includes('neo2')) {
            subtypeParam += ` set.id:neo2 OR`
        }
        if (cardSet.includes('neo3')) {
            subtypeParam += ` set.id:neo3 OR`
        }
        if (cardSet.includes('neo4')) {
            subtypeParam += ` set.id:neo4 OR`
        }
        if (cardSet.includes('basep')) {
            subtypeParam += ` set.id:basep OR`
        }
        if (subtypeParam === '') {
            subtypeParam = ` (set.id:base1 OR set.id:base2 OR set.id:base3 OR set.id:base4 OR set.id:base5 OR set.id:gym1 OR set.id:gym2 OR set.id:neo1 OR set.id:neo2 OR set.id:neo3 OR set.id:neo4 OR set.id:basep)`
        } else {
            subtypeParam = subtypeParam.slice(0, -2)
        }

        fetchURLText = url + `page=${pageNumber}&orderBy=set&q=`
        if (nameInput !== '') {
            fetchURLText += ` name:${nameInput}`
        }
        if (cardElement !== '') {
            fetchURLText += ` types:${cardElement}`
        }
        if (cardType !== '') {
            fetchURLText += ` supertype:${cardType}`
        }
        if (subtypeParam !== '') {
            fetchURLText += subtypeParam
        }
        console.log(subtypeParam)
        fetch(fetchURLText, {
            headers: {
                "X-Api-Key": "9aac7fc4-dfb9-41eb-ab2f-f30e2976bd08"
            }
        })
            .then(res => res.json())
            .then(response => {
                // document.getElementById("tab-two-button").click()
                changeCards(response.data)
                toggleShow(false)
                onSearch(response.totalCount)
            }, []);
    }

    function cardSetToggle(event) {
        const target = event.target
        // All changes to state variables need to be passed through their state function
        // Never edit state variables directly
        const cardSetArr = [...cardSet]

        // Click once
        if (target.checked) {
            cardSetArr.push(target.value)
            // Click twice
        } else {
            cardSetArr.splice(cardSetArr.indexOf(target.value), 1)
        }
        changeCardSet(cardSetArr)
    }


    function cardRarityToggle(event) {

    }

    const submitClick = event => {
        toggleShow(true)
        // document.getElementById('searchResultsLoading').scrollIntoView()
        getCards()

    }

    return (
        <>
            <div class="searchFilterMaster">
                <section class="row mx-0">
                    <div className="col-lg-5 mb-3 p-0">
                        <h4 class="text-light px-1 textWhiteShadow">Search by Card Name</h4>
                        <input type="text" id="name-search" className="searchFilterSearchBar m-1 p-3 w-100 border border-dark" placeholder="Search for cards..." />

                        <div class="button-box searchFilterBottomPanel">
                            <section class="button-input">
                                <ul class="row p-0 m-0">
                                    <li class="col px-2">
                                        <Button type="submit" id="search-button" onClick={submitClick}>
                                            Search
                                            <BiSearchAlt className='searchFilterIcon' size={24} />
                                        </Button>
                                    </li>
                                    <li class="col px-0">
                                        <Button type="reset" id="reset-button">Reset</Button>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-6 mb-3 px-0">
                        <section class="supertype-input-sec search-input">
                            <h4 class="text-light px-1 textWhiteShadow">Card Type</h4>
                            <ul class="type-input-div row p-0 mx-0">
                                <li class="text-left bg-light col-lg-5 col-md-5 m-1 pt-1 border rounded border-dark">
                                    <img class="pkmn-icon" src="https://i.imgur.com/0n7qI08.png" alt="" />
                                    <input class="type-input" type="radio" id="card-type-pokemon" name="supertype"
                                        checked={cardType === 'Pokémon'} onChange={() => changeCardType('Pokémon')} />
                                    <label for="card-type-pokemon" class="mx-2"> Pokémon</label>
                                </li>
                                <li class="text-left bg-light col-lg-5 col-md-5 m-1 pt-1 border rounded border-dark">
                                    <img src="https://i.imgur.com/N3AkovO.png" alt="" />
                                    <input class="type-input" type="radio" id="card-type-trainer" name="supertype"
                                        checked={cardType === 'Trainer'} onChange={() => changeCardType('Trainer')} />
                                    <label for="card-type-trainer" class="mx-2"> Trainer</label>
                                </li>
                                <li class="text-left bg-light col-lg-5 col-md-5 m-1 pt-1 border rounded border-dark">
                                    <img src="https://media.discordapp.net/attachments/625333124808572932/1046148951826501712/30px-Rainbow-attack.png" alt="" />
                                    <input class="type-input" type="radio" id="card-type-energy" name="supertype"
                                        checked={cardType === 'Energy'} onChange={() => changeCardType('Energy')} />
                                    <label for="card-type-energy" class="mx-2"> Energy</label>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>



                <div class="searchFilterContainer">
                    <div class="row mx-0">
                        <div class="col-lg-6 mb-3 px-0">
                            <section class="type-input-sec search-input">
                            <h4 class="text-light px-1 textWhiteShadow">Energy Type</h4>
                                <ul class="type-input-div row p-0 mx-0">
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Grass" alt="" />
                                        <label for="type-grass" class="col"> Grass</label>
                                        <input class="type-input" type="radio" id="type-grass" name="type" checked={cardElement.includes('grass')} onChange={() => changeCardElement('grass')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Fire" alt="" />
                                        <label for="type-fire" class="col"> Fire</label>
                                        <input class="type-input" type="radio" id="type-fire" name="type" checked={cardElement.includes('fire')} onChange={() => changeCardElement('fire')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Water" alt="" />
                                        <label for="type-water" class="col"> Water</label>
                                        <input class="type-input" type="radio" id="type-water" name="type" checked={cardElement.includes('water')} onChange={() => changeCardElement('water')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Lightning" alt="" />
                                        <label for="type-lightning" class="col"> Lightning</label>
                                        <input class="type-input" type="radio" id="type-lightning" name="type" checked={cardElement.includes('lightning')} onChange={() => changeCardElement('lightning')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Psychic" alt="" />
                                        <label for="type-psychic" class="col"> Psychic</label>
                                        <input class="type-input" type="radio" id="type-psychic" name="type" checked={cardElement.includes('psychic')} onChange={() => changeCardElement('psychic')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Fighting" alt="" />
                                        <label for="type-fighting" class="col"> Fighting</label>
                                        <input class="type-input" type="radio" id="type-fighting" name="type" checked={cardElement.includes('fighting')} onChange={() => changeCardElement('fighting')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Colorless" alt="" />
                                        <label for="type-colorless" class="col"> Colorless</label>
                                        <input class="type-input" type="radio" id="type-colorless" name="type" checked={cardElement.includes('colorless')} onChange={() => changeCardElement('colorless')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Darkness" alt="" />
                                        <label for="type-darkness" class="col"> Darkness</label>
                                        <input class="type-input" type="radio" id="type-darkness" name="type" checked={cardElement.includes('darkness')} onChange={() => changeCardElement('darkness')} />
                                    </li>
                                    <li class="text-left bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <div class="icon-Metal" alt="" />
                                        <label for="type-metal" class="col"> Metal</label>
                                        <input class="type-input" type="radio" id="type-metal" name="type" checked={cardElement.includes('metal')} onChange={() => changeCardElement('metal')} />
                                    </li>
                                </ul>
                            </section>
                            <section class="rarity-input-sec search-input">
                                <h4 class="text-light px-1 textWhiteShadow">Rarity</h4>
                                <ul class="type-input-div row p-0 mx-0">
                                    <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <img src="https://i.imgur.com/zI5tHNt.png" class="pb-1" alt="" />
                                        <input class="type-input mb-1" type="checkbox" id="rarity-common" name="rarity" value="Common" checked={cardSet.includes('rarity')} onChange={cardRarityToggle} />
                                        <label for="rarity-common" class="mx-2"> Common</label>
                                    </li>
                                    <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <img src="https://i.imgur.com/TQbnt7r.png" class="pb-1" alt="" />
                                        <input class="type-input mb-1" type="checkbox" id="rarity-uncommon" name="rarity" value="Uncommon" checked={cardSet.includes('rarity')} onChange={cardRarityToggle} />
                                        <label for="rarity-uncommon" class="mx-2"> Uncommon</label>
                                    </li>
                                    <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <img src="https://i.imgur.com/tyMN1Lv.png" class="pb-1" alt="" />
                                        <input class="type-input mb-1" type="checkbox" id="rarity-rare" name="rarity" value="Rare" checked={cardSet.includes('rarity')} onChange={cardRarityToggle} />
                                        <label for="rarity-rare" class="mx-2"> Rare</label>
                                    </li>
                                    <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <img src="https://i.imgur.com/Jk6IpPt.png" alt="" class="iconEnlarge" />
                                        <input class="type-input mb-1" type="checkbox" id="rarity-rareHolo" name="rarity" value="Rare Holo" checked={cardSet.includes('rarity')} onChange={cardRarityToggle} />
                                        <label for="rarity-rareHolo" class="mx-1"> Rare Holo</label>
                                    </li>
                                    <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                        <img src="https://i.imgur.com/8E4WHGL.png" alt="" class="iconEnlarge" />
                                        <input class="type-input mb-1" type="checkbox" id="rarity-rareShining" name="rarity" value="Rare Shining" checked={cardSet.includes('rarity')} onChange={cardRarityToggle} />
                                        <label for="rarity-rareShining" class="mx-1"> Rare Shining</label>
                                    </li>
                                </ul>
                            </section>
                        </div>

                        <div class="col-lg-6 mb-3 px-0">
                            <section class="subtype-input-sec search-input">
                                <h4 class="text-light px-1 textWhiteShadow">Expansion</h4>
                                <div class="searchFilterAdvExpansion">
                                    <h6 class="text-light px-1 textWhiteShadow">Generation I</h6>
                                    <ul class="type-input-div row p-0 mx-0">
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/yATpJei.png" alt="" />
                                            <input class="type-input" type="checkbox" id="base" name="subtype" value="base1" checked={cardSet.includes('base1')} onChange={cardSetToggle} />
                                            <label for="base" class="mx-2"> Base</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/Yr63AuT.png" alt="" />
                                            <input class="type-input" type="checkbox" id="jungle" name="subtype" value="base2" checked={cardSet.includes('base2')} onChange={cardSetToggle} />
                                            <label for="jungle" class="mx-2"> Jungle</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/E5Axps4.png" alt="" />
                                            <input class="type-input" type="checkbox" id="fossil" name="subtype" value="base3" checked={cardSet.includes('base3')} onChange={cardSetToggle} />
                                            <label for="fossil" class="mx-2"> Fossil</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/ljLojgC.png" alt="" />
                                            <input class="type-input" type="checkbox" id="base-two" name="subtype" value="base4" checked={cardSet.includes('base4')} onChange={cardSetToggle} />
                                            <label for="base-two" class="mx-2"> Base 2</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/NeziRcu.png" alt="" />
                                            <input class="type-input" type="checkbox" id="team-rocket" name="subtype" value="base5" checked={cardSet.includes('base5')} onChange={cardSetToggle} />
                                            <label for="team-rocket" class="mx-2"> Team Rocket</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/J8aFjHw.png" alt="" />
                                            <input class="type-input" type="checkbox" id="gym-heroes" name="subtype" value="gym1" checked={cardSet.includes('gym1')} onChange={cardSetToggle} />
                                            <label for="gym-heroes" class="mx-2"> Gym Heroes</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/jKAre0A.png" alt="" />
                                            <input class="type-input" type="checkbox" id="gym-challenge" name="subtype" value="gym2" checked={cardSet.includes('gym2')} onChange={cardSetToggle} />
                                            <label for="gym-challenge" class="mx-2"> Gym Challenge</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="searchFilterAdvExpansion">
                                    <h6 class="text-light px-1 textWhiteShadow">Generation II</h6>
                                    <ul class="type-input-div row p-0 mx-0">
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/zvHyF9a.png" alt="" />
                                            <input class="type-input" type="checkbox" id="neo-genesis" name="subtype" value="neo1" checked={cardSet.includes('neo1')} onChange={cardSetToggle} />
                                            <label for="neo-genesis" class="mx-2"> Neo Genesis</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/7edrYfb.png" alt="" />
                                            <input class="type-input" type="checkbox" id="neo-discovery" name="subtype" value="neo2" checked={cardSet.includes('neo2')} onChange={cardSetToggle} />
                                            <label for="neo-discovery" class="mx-2"> Neo Discovery</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/rZWqc8M.png" alt="" />
                                            <input class="type-input" type="checkbox" id="neo-revelation" name="subtype" value="neo3" checked={cardSet.includes('neo3')} onChange={cardSetToggle} />
                                            <label for="neo-revelation" class="mx-2"> Neo Revelation</label>
                                        </li>
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/O7ybLL9.png" alt="" />
                                            <input class="type-input" type="checkbox" id="neo-destiny" name="subtype" value="neo4" checked={cardSet.includes('neo4')} onChange={cardSetToggle} />
                                            <label for="neo-destiny" class="mx-2"> Neo Destiny</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="searchFilterAdvExpansion">
                                    <h6 class="text-light px-1 textWhiteShadow">Promotional</h6>
                                    <ul class="type-input-div row p-0 mx-0">
                                        <li class="text-left bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/YaxCMXG.png" alt="" />
                                            <input class="type-input" type="checkbox" id="bs-promo" name="subtype" value="basep" checked={cardSet.includes('basep')} onChange={cardSetToggle} />
                                            <label for="bs-promo" class="mx-2"> Black Star Promos</label>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {show && <div className="searchResultsDoor">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" alt="" /> */}
                </div>}
            </div>
        </>
    )
}