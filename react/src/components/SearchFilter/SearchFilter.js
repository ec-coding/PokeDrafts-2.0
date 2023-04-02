import React, { useState, useEffect, useContext } from 'react';
import CardContext from '../../contexts/CardContext';
import PageCountContext from '../../contexts/PageCountContext';
import Icon from '../Icon/Icon';
import { BiSearchAlt } from 'react-icons/bi'
import './SearchFilter.css'

// LOOK UP LOADING STRATEGIES ie lazy loading of images
// using logic to make first load good
// load the 1st page, once the first page has loaded, load the subsequent next 2 pages in order

// fill the buttons with an up and down arrow

export default function SearchFilter({ pageSwitch, onSearch, currentPage }) {
    const itemsPerPage = 14

    const [cardType, changeCardType] = useState('Pokémon')
    const [cardSet, changeCardSet] = useState([])
    const [cardElement, changeCardElement] = useState('')
    const [cardRarity, setCardRarity] = useState('')
    // Contexts are states that multiple components can share
    // External card context - We are using that card context
    const [cards, changeCards] = useContext(CardContext)
    const [show, toggleShow] = useState(false)

    useEffect(() => {
        // Call this function when the state in brackets changes
        if (show == true) {
            getCards(currentPage)
        }
    }, [currentPage])

    function getCards(startingPage) {
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

        if (startingPage === 1) {
            currentPage = 1
            pageSwitch(currentPage)
        }

        fetchURLText = url + `page=${currentPage}&pageSize=14&orderBy=set,number&q=`
        if (subtypeParam !== '') {
            fetchURLText += subtypeParam
        }
        if (nameInput !== '') {
            fetchURLText += ` name:${nameInput}`
        }
        if (cardElement !== '') {
            fetchURLText += ` types:${cardElement}`
        }
        if (cardType !== '') {
            fetchURLText += ` supertype:${cardType}`
        }
        if (cardRarity !== '') {
            fetchURLText += ` rarity:${cardRarity}`
        }

        fetch(fetchURLText, {
            headers: {
                "X-Api-Key": "9aac7fc4-dfb9-41eb-ab2f-f30e2976bd08"
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.count != 0) {
                    const totalItems = response.totalCount
                    const pageCount = Math.ceil(totalItems / itemsPerPage);
                    changeCards(response.data)
                    onSearch(response.totalCount, pageCount)
                } else {
                    alert('No cards found.')
                }

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
        toggleShow(true)
        // document.getElementById('searchResultsLoading').scrollIntoView()
        getCards(1)
        // If the user selects any filters before hitting search, it still affects the current fetch response, how can I fix this?
    }

    const resetInput = event => {
        document.querySelector('#name-search').value = ''
        changeCardType('Pokémon')
        changeCardSet([])
        changeCardElement('')
        setCardRarity('')
    }

    const toggleCardElement = event => {
        if (document.getElementById('card-type-pokemon').checked) {
            document.getElementById('type-grass').style.display = 'block'
            document.getElementById('type-fire').style.display = 'block'
            document.getElementById('type-water').style.display = 'block'
            document.getElementById('type-lightning').style.display = 'block'
            document.getElementById('type-psychic').style.display = 'block'
            document.getElementById('type-fighting').style.display = 'block'
            document.getElementById('type-colorless').style.display = 'block'
            document.getElementById('type-darkness').style.display = 'block'
            document.getElementById('type-metal').style.display = 'block'
        } else {
            changeCardElement('')
            document.getElementById('type-grass').style.display = 'none'
            document.getElementById('type-fire').style.display = 'none'
            document.getElementById('type-water').style.display = 'none'
            document.getElementById('type-lightning').style.display = 'none'
            document.getElementById('type-psychic').style.display = 'none'
            document.getElementById('type-fighting').style.display = 'none'
            document.getElementById('type-colorless').style.display = 'none'
            document.getElementById('type-darkness').style.display = 'none'
            document.getElementById('type-metal').style.display = 'none'
        }
    }

    return (
        <>
            <div class="searchFilterMaster row mx-0">
                <section class="col-xl-2 col-lg-0 col-md-1 col-sm-0"></section>
                <section class="col-xl-8 col-lg-12 col-md-10 col-sm-12">
                    <section class="row mx-0">
                        <div className="col-lg-5 col-md-10 mb-3 p-0">
                            <h4 class="text-light px-1 textWhiteShadow">Search by Card Name</h4>
                            <input type="text" id="name-search" className="searchFilterSearchBar h-25 m-1 p-3 w-100 border border-dark" placeholder="Search for cards..." />
                            {/* <BiSearchAlt className='searchFilterIcon ml-1' width="16" height="16" size={24} /> */}
                            <div class="button-box">
                                <section class="button-input">
                                    <ul class="row p-0 m-0">
                                        <li class="col px-2 my-2">
                                            <button type="submit" id="search-button" class="border border-dark px-4 ts-light bg-info" onClick={submitClick}>Search</button>
                                        </li>
                                        <li class="col px-0 my-2">
                                            <button type="reset" id="reset-button" class="border border-dark px-4 ts-light bg-warning" onClick={resetInput}>Reset</button>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-2"></div>
                        <div class="col-lg-6 mb-3 px-0">
                            <section class="supertype-input-sec search-input">
                                <h4 class="text-light px-1 textWhiteShadow">Card Type</h4>
                                <ul class="type-input-div row p-0 mx-0">
                                    <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 pt-1 border rounded border-dark">
                                        <img class="mb-1" width="24" src="https://i.imgur.com/0n7qI08.png" alt="" />
                                        <input class="type-input" type="radio" id="card-type-pokemon" name="supertype"
                                            checked={cardType === 'Pokémon'} onChange={() => changeCardType('Pokémon')} onClick={toggleCardElement} />
                                        <label for="card-type-pokemon" class="mx-2 fw-bold"> Pokémon</label>
                                    </li>
                                    <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 pt-1 border rounded border-dark">
                                        <img class="mb-1" src="https://i.imgur.com/N3AkovO.png" width="24" alt="" />
                                        <input class="type-input" type="radio" id="card-type-trainer" name="supertype"
                                            checked={cardType === 'Trainer'} onChange={() => changeCardType('Trainer')} onClick={toggleCardElement} />
                                        <label for="card-type-trainer" class="mx-2 fw-bold"> Trainer</label>
                                    </li>
                                    <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 pt-1 border rounded border-dark">
                                        <img class="mb-1" src="https://media.discordapp.net/attachments/625333124808572932/1046148951826501712/30px-Rainbow-attack.png" width="24" alt="" />
                                        <input class="type-input" type="radio" id="card-type-energy" name="supertype"
                                            checked={cardType === 'Energy'} onChange={() => changeCardType('Energy')} onClick={toggleCardElement} />
                                        <label for="card-type-energy" class="mx-2 fw-bold"> Energy</label>
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
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Grass" alt="" />
                                            <label for="type-grass" class="col fw-bold"> Grass</label>
                                            <input class="type-input element-input" type="radio" id="type-grass" name="energy-type" checked={cardElement.includes('grass')} onChange={() => changeCardElement('grass')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Fire" alt="" />
                                            <label for="type-fire" class="col fw-bold"> Fire</label>
                                            <input class="type-input element-input" type="radio" id="type-fire" name="energy-type" checked={cardElement.includes('fire')} onChange={() => changeCardElement('fire')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Water" alt="" />
                                            <label for="type-water" class="col fw-bold"> Water</label>
                                            <input class="type-input element-input" type="radio" id="type-water" name="energy-type" checked={cardElement.includes('water')} onChange={() => changeCardElement('water')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Lightning" alt="" />
                                            <label for="type-lightning" class="col fw-bold"> Lightning</label>
                                            <input class="type-input element-input" type="radio" id="type-lightning" name="energy-type" checked={cardElement.includes('lightning')} onChange={() => changeCardElement('lightning')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Psychic" alt="" />
                                            <label for="type-psychic" class="col fw-bold"> Psychic</label>
                                            <input class="type-input element-input" type="radio" id="type-psychic" name="energy-type" checked={cardElement.includes('psychic')} onChange={() => changeCardElement('psychic')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Fighting" alt="" />
                                            <label for="type-fighting" class="col fw-bold"> Fighting</label>
                                            <input class="type-input element-input" type="radio" id="type-fighting" name="energy-type" checked={cardElement.includes('fighting')} onChange={() => changeCardElement('fighting')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Colorless" alt="" />
                                            <label for="type-colorless" class="col fw-bold"> Colorless</label>
                                            <input class="type-input element-input" type="radio" id="type-colorless" name="energy-type" checked={cardElement.includes('colorless')} onChange={() => changeCardElement('colorless')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Darkness" alt="" />
                                            <label for="type-darkness" class="col fw-bold"> Darkness</label>
                                            <input class="type-input element-input" type="radio" id="type-darkness" name="energy-type" checked={cardElement.includes('darkness')} onChange={() => changeCardElement('darkness')} />
                                        </li>
                                        <li class="ds-dark bg-light row col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <div class="icon-Metal" alt="" />
                                            <label for="type-metal" class="col fw-bold"> Metal</label>
                                            <input class="type-input element-input" type="radio" id="type-metal" name="energy-type" checked={cardElement.includes('metal')} onChange={() => changeCardElement('metal')} />
                                        </li>
                                    </ul>
                                </section>
                                <section class="rarity-input-sec search-input">
                                    <h4 class="text-light px-1 textWhiteShadow">Rarity</h4>
                                    <ul class="type-input-div row p-0 mx-0">
                                        <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/zI5tHNt.png" class="pb-1" alt="" />
                                            <input class="type-input mb-1" type="radio" id="rarity-common" name="rarity" value="Common" checked={cardRarity === 'Common'} onChange={() => setCardRarity('Common')} />
                                            <label for="rarity-common" class="mx-2 fw-bold"> Common</label>
                                        </li>
                                        <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/TQbnt7r.png" class="pb-1" alt="" />
                                            <input class="type-input mb-1" type="radio" id="rarity-uncommon" name="rarity" value="Uncommon" checked={cardRarity === 'Uncommon'} onChange={() => setCardRarity('Uncommon')} />
                                            <label for="rarity-uncommon" class="mx-2 fw-bold"> Uncommon</label>
                                        </li>
                                        <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/tyMN1Lv.png" class="pb-1" alt="" />
                                            <input class="type-input mb-1" type="radio" id="rarity-rare" name="rarity" value="Rare" checked={cardRarity === 'Rare'} onChange={() => setCardRarity('Rare')} />
                                            <label for="rarity-rare" class="mx-2 fw-bold"> Rare</label>
                                        </li>
                                        {/* <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/Jk6IpPt.png" alt="" class="iconEnlarge" />
                                            <input class="type-input mb-1" type="radio" id="rarity-rareHolo" name="rarity" value="Rare Holo" checked={cardRarity === 'Rare Holo'} onChange={() => setCardRarity('Rare%20Holo')} />
                                            <label for="rarity-rareHolo" class="mx-1 fw-bold"> Rare Holo</label>
                                        </li>
                                        <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                            <img src="https://i.imgur.com/8E4WHGL.png" alt="" class="iconEnlarge" />
                                            <input class="type-input mb-1" type="radio" id="rarity-rareShining" name="rarity" value="Rare Shining" checked={cardRarity === 'Rare Shining'} onChange={() => setCardRarity('Rare Shining')} />
                                            <label for="rarity-rareShining" class="mx-1 fw-bold"> Rare Shining</label>
                                        </li> */}
                                    </ul>
                                </section>
                            </div>

                            <div class="col-lg-6 mb-3 px-0">
                                <section class="subtype-input-sec search-input">
                                    <h4 class="text-light px-1 textWhiteShadow">Expansion</h4>
                                    <div class="searchFilterAdvExpansion">
                                        <h6 class="text-light px-1 textWhiteShadow">Generation I</h6>
                                        <ul class="type-input-div row p-0 mx-0">
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/yATpJei.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="base" name="subtype" value="base1" checked={cardSet.includes('base1')} onChange={cardSetToggle} />
                                                <label for="base" class="mx-2 fw-bold"> Base</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/Yr63AuT.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="jungle" name="subtype" value="base2" checked={cardSet.includes('base2')} onChange={cardSetToggle} />
                                                <label for="jungle" class="mx-2 fw-bold"> Jungle</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/E5Axps4.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="fossil" name="subtype" value="base3" checked={cardSet.includes('base3')} onChange={cardSetToggle} />
                                                <label for="fossil" class="mx-2 fw-bold"> Fossil</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/ljLojgC.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="base-two" name="subtype" value="base4" checked={cardSet.includes('base4')} onChange={cardSetToggle} />
                                                <label for="base-two" class="mx-2 fw-bold"> Base 2</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 x-0 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/NeziRcu.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="team-rocket" name="subtype" value="base5" checked={cardSet.includes('base5')} onChange={cardSetToggle} />
                                                <label for="team-rocket" class="mx-2 fw-bold"> Team Rocket</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/J8aFjHw.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="gym-heroes" name="subtype" value="gym1" checked={cardSet.includes('gym1')} onChange={cardSetToggle} />
                                                <label for="gym-heroes" class="mx-2 fw-bold"> Gym Heroes</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/jKAre0A.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="gym-challenge" name="subtype" value="gym2" checked={cardSet.includes('gym2')} onChange={cardSetToggle} />
                                                <label for="gym-challenge" class="mx-2 fw-bold"> Gym Challenge</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="searchFilterAdvExpansion">
                                        <h6 class="text-light px-1 textWhiteShadow">Generation II</h6>
                                        <ul class="type-input-div row p-0 mx-0">
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/zvHyF9a.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="neo-genesis" name="subtype" value="neo1" checked={cardSet.includes('neo1')} onChange={cardSetToggle} />
                                                <label for="neo-genesis" class="mx-2 fw-bold"> Neo Genesis</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/7edrYfb.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="neo-discovery" name="subtype" value="neo2" checked={cardSet.includes('neo2')} onChange={cardSetToggle} />
                                                <label for="neo-discovery" class="mx-2 fw-bold"> Neo Discovery</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/rZWqc8M.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="neo-revelation" name="subtype" value="neo3" checked={cardSet.includes('neo3')} onChange={cardSetToggle} />
                                                <label for="neo-revelation" class="mx-2 fw-bold"> Neo Revelation</label>
                                            </li>
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/O7ybLL9.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="neo-destiny" name="subtype" value="neo4" checked={cardSet.includes('neo4')} onChange={cardSetToggle} />
                                                <label for="neo-destiny" class="mx-2 fw-bold"> Neo Destiny</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="searchFilterAdvExpansion">
                                        <h6 class="text-light px-1 textWhiteShadow">Promotional</h6>
                                        <ul class="type-input-div row p-0 mx-0">
                                            <li class="ds-dark bg-light col-lg-5 col-md-5 m-1 px-2 py-1 border rounded border-dark">
                                                <img src="https://i.imgur.com/YaxCMXG.png" alt="" width="25" height="25" />
                                                <input class="type-input" type="checkbox" id="bs-promo" name="subtype" value="basep" checked={cardSet.includes('basep')} onChange={cardSetToggle} />
                                                <label for="bs-promo" class="mx-2 fw-bold"> Black Star Promos</label>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="col-xl-2 col-lg-0 col-md-1 col-sm-0"></section>
                {show && <div className="searchResultsDoor">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" alt="" /> */}
                </div>}
            </div>
        </>
    )
}