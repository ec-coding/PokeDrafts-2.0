import React, { useState, useEffect, useContext } from 'react';
import SearchParams from '../SearchFilter/SearchFilter'
import SearchResults from '../SearchResults/SearchResults'
import Deck from '../UserDeck/Deck'

const TabContainer = ({ }) => {

    const [tab, changeTab] = useState('slide1')

    return (
        <>
            {tab === 'slide1' && <div id="tab-one" class="tab-content">
                <SearchParams />
            </div>}

            {tab === 'slide2' && <div id="tab-two" class="tab-content">
                <SearchResults />
            </div>}

            {tab === 'slide3' && <div id="tab-three" class="tab-content">
                <Deck />
            </div>}
        </>
    )
}

export default TabContainer;