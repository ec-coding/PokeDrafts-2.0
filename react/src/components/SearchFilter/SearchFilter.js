import React, { useState, useContext } from 'react';
import CardContext from '../../CardContext';
import Icon from '../Icon';
import { Panel, Button } from 'rsuite';
import { BiSearchAlt } from 'react-icons/bi'
import './SearchFilter.css'

// LOOK UP LOADING STRATEGIES ie lazy loading of images
// using logic to make first load good
// load the 1st page, once the first page has loaded, load the subsequent next 2 pages in order

// fill the buttons with an up and down arrow

export default function SearchFilter() {
    const [cardType, changeCardType] = useState('Pokémon')
    const [cardSet, changeCardSet] = useState([])
    const [cardElement, changeCardElement] = useState('')
    // Contexts are states that multiple components can share
    // External card context - We are using that card context
    const [cards, changeCards] = useContext(CardContext)

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

        fetchURLText = url + `page=1&pageSize=60&orderBy=set&q=`
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
                changeCards(response.data)
                console.log(response)
                // document.getElementById("tab-two-button").click()
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

    const submitClick = event => {
        getCards()
    }

    return (
        <>


            <section class="searchFilterSearchBarContainer">
                <input type="text" id="name-search" className="searchFilterSearchBar" placeholder="Search for cards..." />
                <BiSearchAlt className='searchFilterIcon' size={24} />
            </section>

            <div class="button-box searchFilterBottomPanel">

                <section class="button-input">
                    <ul class="row">
                        <li class="col">
                            <Button type="submit" id="search-button" onClick={submitClick}>Search</Button>
                        </li>
                        <li class="col">
                            <Button type="reset" id="reset-button">Reset</Button>
                        </li>
                    </ul>
                </section>
            </div>


            <Panel header="Advanced Search" className="searchFilterAdvSearchContainer searchFilterBottomPanel" collapsible bordered>

                <div class="searchFilterContainer">

                    <div class="basic-search">

                        <Panel header="Card Type" className="searchFilterAdvSearchPanelHeader" collapsible bordered>
                            <section class="supertype-input-sec search-input">
                                <ul class="type-input-div">
                                    <li class="list-one-third">
                                        <img class="pkmn-icon" src="https://i.imgur.com/0n7qI08.png" alt="" />
                                        <input class="type-input" type="radio" id="card-type-pokemon" name="supertype"
                                            checked={cardType === 'Pokémon'} onChange={() => changeCardType('Pokémon')} />
                                        <label for="card-type-pokemon"> Pokémon</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/N3AkovO.png" alt="" />
                                        <input class="type-input" type="radio" id="card-type-trainer" name="supertype"
                                            checked={cardType === 'Trainer'} onChange={() => changeCardType('Trainer')} />
                                        <label for="card-type-trainer"> Trainer</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://media.discordapp.net/attachments/625333124808572932/1046148951826501712/30px-Rainbow-attack.png" alt="" />
                                        <input class="type-input" type="radio" id="card-type-energy" name="supertype"
                                            checked={cardType === 'Energy'} onChange={() => changeCardType('Energy')} />
                                        <label for="card-type-energy"> Energy</label>
                                    </li>
                                </ul>
                            </section>
                        </Panel>

                        <Panel header="Energy Type" className="searchFilterAdvSearchPanelHeader" collapsible bordered>
                            <section class="type-input-sec search-input">
                                <ul class="type-input-div">
                                    <li class="list-one-third">
                                        <div class="icon-Grass" />
                                        <input class="type-input" type="radio" id="type-grass" name="type" checked={cardElement.includes('grass')} onChange={() => changeCardElement('grass')} />
                                        <label for="type-grass"> Grass</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Fire" alt="" />
                                        <input class="type-input" type="radio" id="type-fire" name="type" checked={cardElement.includes('fire')} onChange={() => changeCardElement('fire')} />
                                        <label for="type-fire"> Fire</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Water" alt="" />
                                        <input class="type-input" type="radio" id="type-water" name="type" checked={cardElement.includes('water')} onChange={() => changeCardElement('water')} />
                                        <label for="type-water"> Water</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Lightning" alt="" />
                                        <input class="type-input" type="radio" id="type-lightning" name="type" checked={cardElement.includes('lightning')} onChange={() => changeCardElement('lightning')} />
                                        <label for="type-lightning"> Lightning</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Psychic" alt="" />
                                        <input class="type-input" type="radio" id="type-psychic" name="type" checked={cardElement.includes('psychic')} onChange={() => changeCardElement('psychic')} />
                                        <label for="type-psychic"> Psychic</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Fighting" alt="" />
                                        <input class="type-input" type="radio" id="type-fighting" name="type" checked={cardElement.includes('fighting')} onChange={() => changeCardElement('fighting')} />
                                        <label for="type-fighting"> Fighting</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Colorless" alt="" />
                                        <input class="type-input" type="radio" id="type-colorless" name="type" checked={cardElement.includes('colorless')} onChange={() => changeCardElement('colorless')} />
                                        <label for="type-colorless"> Colorless</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Darkness" alt="" />
                                        <input class="type-input" type="radio" id="type-darkness" name="type" checked={cardElement.includes('darkness')} onChange={() => changeCardElement('darkness')} />
                                        <label for="type-darkness"> Darkness</label>
                                    </li>
                                    <li class="list-one-third">
                                        <div class="icon-Metal" alt="" />
                                        <input class="type-input" type="radio" id="type-metal" name="type" checked={cardElement.includes('metal')} onChange={() => changeCardElement('metal')} />
                                        <label for="type-metal"> Metal</label>
                                    </li>
                                </ul>
                            </section>
                        </Panel>

                        <Panel header="Expansion" className="searchFilterAdvSearchPanelHeader" collapsible bordered>
                            <section class="subtype-input-sec search-input">
                                <ul class="type-input-div">
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/yATpJei.png" alt="" />
                                        <input class="type-input" type="checkbox" id="base" name="subtype" value="base1" checked={cardSet.includes('base1')} onChange={cardSetToggle} />
                                        <label for="base"> Base</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/Yr63AuT.png" alt="" />
                                        <input class="type-input" type="checkbox" id="jungle" name="subtype" value="base2" checked={cardSet.includes('base2')} onChange={cardSetToggle} />
                                        <label for="jungle"> Jungle</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/E5Axps4.png" alt="" />
                                        <input class="type-input" type="checkbox" id="fossil" name="subtype" value="base3" checked={cardSet.includes('base3')} onChange={cardSetToggle} />
                                        <label for="fossil"> Fossil</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/ljLojgC.png" alt="" />
                                        <input class="type-input" type="checkbox" id="base-two" name="subtype" value="base4" checked={cardSet.includes('base4')} onChange={cardSetToggle} />
                                        <label for="base-two"> Base 2</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/NeziRcu.png" alt="" />
                                        <input class="type-input" type="checkbox" id="team-rocket" name="subtype" value="base5" checked={cardSet.includes('base5')} onChange={cardSetToggle} />
                                        <label for="team-rocket"> Team Rocket</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/J8aFjHw.png" alt="" />
                                        <input class="type-input" type="checkbox" id="gym-heroes" name="subtype" value="gym1" checked={cardSet.includes('gym1')} onChange={cardSetToggle} />
                                        <label for="gym-heroes"> Gym Heroes</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/jKAre0A.png" alt="" />
                                        <input class="type-input" type="checkbox" id="gym-challenge" name="subtype" value="gym2" checked={cardSet.includes('gym2')} onChange={cardSetToggle} />
                                        <label for="gym-challenge"> Gym Challenge</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/zvHyF9a.png" alt="" />
                                        <input class="type-input" type="checkbox" id="neo-genesis" name="subtype" value="neo1" checked={cardSet.includes('neo1')} onChange={cardSetToggle} />
                                        <label for="neo-genesis"> Neo Genesis</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/7edrYfb.png" alt="" />
                                        <input class="type-input" type="checkbox" id="neo-discovery" name="subtype" value="neo2" checked={cardSet.includes('neo2')} onChange={cardSetToggle} />
                                        <label for="neo-discovery"> Neo Discovery</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/rZWqc8M.png" alt="" />
                                        <input class="type-input" type="checkbox" id="neo-revelation" name="subtype" value="neo3" checked={cardSet.includes('neo3')} onChange={cardSetToggle} />
                                        <label for="neo-revelation"> Neo Revelation</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/O7ybLL9.png" alt="" />
                                        <input class="type-input" type="checkbox" id="neo-destiny" name="subtype" value="neo4" checked={cardSet.includes('neo4')} onChange={cardSetToggle} />
                                        <label for="neo-destiny"> Neo Destiny</label>
                                    </li>
                                    <li class="list-one-third">
                                        <img src="https://i.imgur.com/YaxCMXG.png" alt="" />
                                        <input class="type-input" type="checkbox" id="bs-promo" name="subtype" value="basep" checked={cardSet.includes('basep')} onChange={cardSetToggle} />
                                        <label for="bs-promo"> Black Star Promos</label>
                                    </li>
                                </ul>
                            </section>
                        </Panel>

                    </div>

                </div>
                <div className="panelFooter" collapsible>
                    <h5>Close Panel</h5>
                </div>
            </Panel>


        </>
    )
}