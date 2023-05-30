import React from 'react';
import Icon from '../Icon/Icon';
import './expInfo.scss'

const ExpInfo = (props) => {

    // Expansion Logos
    if (props.expLogo === 'base') {
        return (
            <>
                <img src="https://i.imgur.com/fo3Kkih.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'jungle') {
        return (
            <>
                <img src="https://i.imgur.com/xmPlqiQ.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'fossil') {
        return (
            <>
                <img src="https://i.imgur.com/lUWtBZg.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'base-2') {
        return (
            <>
                <img src="https://i.imgur.com/Qfrs8CH.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'team-rocket') {
        return (
            <>
                <img src="https://i.imgur.com/epGU1NQ.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'gym-heroes') {
        return (
            <>
                <img src="https://i.imgur.com/DuIoggo.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'gym-challenge') {
        return (
            <>
                <img src="https://i.imgur.com/rXUrwPg.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'neo-genesis') {
        return (
            <>
                <img src="https://i.imgur.com/X1EY0Wm.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'neo-discovery') {
        return (
            <>
                <img src="https://i.imgur.com/8iSa8GY.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'neo-revelation') {
        return (
            <>
                <img src="https://i.imgur.com/Xtu8mkm.png" alt="" class="" />
            </>
        )
    } else if (props.expLogo === 'neo-destiny') {
        return (
            <>
                <img src="https://i.imgur.com/EzkRJkj.png" alt="" class="" />
            </>
        )
    }

    // Cards in Set
    if (props.expQuantity === 'base') {
        return (
            <>
                <h5 class="px-2">English: 102</h5>
                <h5 class="px-2">Japanese: 102</h5>
            </>
        )
    } else if (props.expQuantity === 'jungle') {
        return (
            <>
                <h5 class="px-2">English: 64</h5>
                <h5 class="px-2">Japanese: 48</h5>
            </>
        )
    } else if (props.expQuantity === 'fossil') {
        return (
            <>
                <h5 class="px-2">English: 62</h5>
                <h5 class="px-2">Japanese: 48</h5>
            </>
        )
    } else if (props.expQuantity === 'base-2') {
        return (
            <>
                <h5 class="px-2">English: 130</h5>
                <h5 class="px-2">Japanese: N/A</h5>
            </>
        )
    } else if (props.expQuantity === 'team-rocket') {
        return (
            <>
                <h5 class="px-2">English: 83</h5>
                <h5 class="px-2">Japanese: 65</h5>
            </>
        )
    } else if (props.expQuantity === 'gym-heroes') {
        return (
            <>
                <h5 class="px-2">English: 132</h5>
                <h5 class="px-2">Japanese: 96</h5>
            </>
        )
    } else if (props.expQuantity === 'gym-challenge') {
        return (
            <>
                <h5 class="px-2">English: 132</h5>
                <h5 class="px-2">Japanese: 98</h5>
            </>
        )
    } else if (props.expQuantity === 'neo-genesis') {
        return (
            <>
                <h5 class="px-2">English: 111</h5>
                <h5 class="px-2">Japanese: 96</h5>
            </>
        )
    } else if (props.expQuantity === 'neo-discovery') {
        return (
            <>
                <h5 class="px-2">English: 75</h5>
                <h5 class="px-2">Japanese: 56</h5>
            </>
        )
    } else if (props.expQuantity === 'neo-revelation') {
        return (
            <>
                <h5 class="px-2">English: 66</h5>
                <h5 class="px-2">Japanese: 57</h5>
            </>
        )
    } else if (props.expQuantity === 'neo-destiny') {
        return (
            <>
                <h5 class="px-2">English: 113</h5>
                <h5 class="px-2">Japanese: 113</h5>
            </>
        )
    }

    // Set Number
    if (props.expNumber === 'base') {
        return (
            <>
                <h5 class="px-2">English: 1</h5>
                <h5 class="px-2">Japanese: 1</h5>
            </>
        )
    } else if (props.expNumber === 'jungle') {
        return (
            <>
                <h5 class="px-2">English: 2</h5>
                <h5 class="px-2">Japanese: 2</h5>
            </>
        )
    } else if (props.expNumber === 'fossil') {
        return (
            <>
                <h5 class="px-2">English: 3</h5>
                <h5 class="px-2">Japanese: 3</h5>
            </>
        )
    } else if (props.expNumber === 'base-2') {
        return (
            <>
                <h5 class="px-2">English: 4</h5>
                <h5 class="px-2">Japanese: N/A</h5>
            </>
        )
    } else if (props.expNumber === 'team-rocket') {
        return (
            <>
                <h5 class="px-2">English: 5</h5>
                <h5 class="px-2">Japanese: 4</h5>
            </>
        )
    } else if (props.expNumber === 'gym-heroes') {
        return (
            <>
                <h5 class="px-2">English: 6</h5>
                <h5 class="px-2">Japanese: 5</h5>
            </>
        )
    } else if (props.expNumber === 'gym-challenge') {
        return (
            <>
                <h5 class="px-2">English: 7</h5>
                <h5 class="px-2">Japanese: 6</h5>
            </>
        )
    } else if (props.expNumber === 'neo-genesis') {
        return (
            <>
                <h5 class="px-2">English: 8</h5>
                <h5 class="px-2">Japanese: 7</h5>
            </>
        )
    } else if (props.expNumber === 'neo-discovery') {
        return (
            <>
                <h5 class="px-2">English: 9</h5>
                <h5 class="px-2">Japanese: 8</h5>
            </>
        )
    } else if (props.expNumber === 'neo-revelation') {
        return (
            <>
                <h5 class="px-2">English: 10</h5>
                <h5 class="px-2">Japanese: 9</h5>
            </>
        )
    } else if (props.expNumber === 'neo-destiny') {
        return (
            <>
                <h5 class="px-2">English: 11</h5>
                <h5 class="px-2">Japanese: 10</h5>
            </>
        )
    }

    // Release Date
    if (props.expRelease === 'base') {
        return (
            <>
                <h5 class="px-2">English: Jan 9, 1999</h5>
                <h5 class="px-2">Japanese: Oct 20, 1996</h5>
            </>
        )
    } else if (props.expRelease === 'jungle') {
        return (
            <>
                <h5 class="px-2">English: Jun 16, 1999</h5>
                <h5 class="px-2">Japanese: Mar 5, 1997</h5>
            </>
        )
    } else if (props.expRelease === 'fossil') {
        return (
            <>
                <h5 class="px-2">English: Oct 10, 1999</h5>
                <h5 class="px-2">Japanese: Jun 21, 1997</h5>
            </>
        )
    } else if (props.expRelease === 'base-2') {
        return (
            <>
                <h5 class="px-2">English: Feb 24, 2000</h5>
                <h5 class="px-2">Japanese: N/A</h5>
            </>
        )
    } else if (props.expRelease === 'team-rocket') {
        return (
            <>
                <h5 class="px-2">English: Apr 24, 2000</h5>
                <h5 class="px-2">Japanese: Nov 21, 1997</h5>
            </>
        )
    } else if (props.expRelease === 'gym-heroes') {
        return (
            <>
                <h5 class="px-2">English: Aug 14, 2000</h5>
                <h5 class="px-2">Japanese: Oct 24, 1998</h5>
            </>
        )
    } else if (props.expRelease === 'gym-challenge') {
        return (
            <>
                <h5 class="px-2">English: Oct 16, 2000</h5>
                <h5 class="px-2">Japanese: Jun 25, 1999</h5>
            </>
        )
    } else if (props.expRelease === 'neo-genesis') {
        return (
            <>
                <h5 class="px-2">English: Dec 16, 2000</h5>
                <h5 class="px-2">Japanese: Feb 4, 2000</h5>
            </>
        )
    } else if (props.expRelease === 'neo-discovery') {
        return (
            <>
                <h5 class="px-2">English: Jun 1, 2001</h5>
                <h5 class="px-2">Japanese: Jul 7, 2000</h5>
            </>
        )
    } else if (props.expRelease === 'neo-revelation') {
        return (
            <>
                <h5 class="px-2">English: Sep 21, 2001</h5>
                <h5 class="px-2">Japanese: Nov 23, 2000</h5>
            </>
        )
    } else if (props.expRelease === 'neo-destiny') {
        return (
            <>
                <h5 class="px-2">English: Feb 28, 2002</h5>
                <h5 class="px-2">Japanese: Apr 20, 2001</h5>
            </>
        )
    }

    // Theme Decks
    if (props.expDecks === 'base') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Water'} />
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                        <a href="https://bulbapedia.bulbagarden.net/wiki/Overgrowth_(TCG)" target="_blank" rel="noreferrer">Overgrowth</a>
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Lightning'} />
                    <Icon textSwitch={'Psychic'} />
                    <h5 class="col px-2">
                        <a href="https://bulbapedia.bulbagarden.net/wiki/Zap!_(TCG)" target="_blank" rel="noreferrer">Zap!</a>         
                        </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fire'} />
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Brushfire_(TCG)" target="_blank" rel="noreferrer">Brushfire</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Water'} />
                    <Icon textSwitch={'Fighting'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Blackout_(TCG)" target="_blank" rel="noreferrer">Blackout!</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'jungle') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Psychic'} />
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Power_Reserve_(TCG)" target="_blank" rel="noreferrer">Power Reserve</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Water'} />
                    <Icon textSwitch={'Fighting'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Water_Blast_(TCG)" target="_blank" rel="noreferrer">Water Blast</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'fossil') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Grass'} />
                    <Icon textSwitch={'Fighting'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/BodyGuard_(TCG)" target="_blank" rel="noreferrer">BodyGuard</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fire'} />
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/LockDown_(TCG)" target="_blank" rel="noreferrer">LockDown</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'base-2') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fighting'} />
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Grass_Chopper_(TCG)" target="_blank" rel="noreferrer">Grass Chopper</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fire'} />
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Hot_Water_(TCG)" target="_blank" rel="noreferrer">Hot Water</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Lightning'} />
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Lightning_Bug_(TCG)" target="_blank" rel="noreferrer">Lightning Bug</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Psychic'} />
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Psych_Out_(TCG)" target="_blank" rel="noreferrer">Psych Out</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'team-rocket') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Grass'} />
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Devastation_(TCG)" target="_blank" rel="noreferrer">Devastation</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Psychic'} />
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Trouble_(TCG)" target="_blank" rel="noreferrer">Trouble</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'gym-heroes') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fighting'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Brock_(TCG)" target="_blank" rel="noreferrer">Brock</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Misty_(TCG)" target="_blank" rel="noreferrer">Misty</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Lightning'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Lt._Surge_(TCG)" target="_blank" rel="noreferrer">Lt. Surge</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Erika_(TCG)" target="_blank" rel="noreferrer">Erika</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'gym-challenge') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Psychic'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Sabrina_(TCG)" target="_blank" rel="noreferrer">Sabrina</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Grass'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Koga_(TCG)" target="_blank" rel="noreferrer">Koga</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fire'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Blaine_(TCG)" target="_blank" rel="noreferrer">Blaine</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fighting'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Giovanni_(TCG)" target="_blank" rel="noreferrer">Giovanni</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'neo-genesis') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Grass'} />
                    <Icon textSwitch={'Fire'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Hotfoot_(TCG)" target="_blank" rel="noreferrer">Hotfoot</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Lightning'} />
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/col px-2d_Fusion_(TCG)" target="_blank" rel="noreferrer">Cold Fusion</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'neo-discovery') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Psychic'} />
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Brain_Wave_(TCG)" target="_blank" rel="noreferrer">Brain Wave</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Grass'} />
                    <Icon textSwitch={'Fighting'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Wallop_(TCG)" target="_blank" rel="noreferrer">Wallop</a>  
                    </h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'neo-revelation') {
        return (
            <>
                <div class="row mx-0 px-0">
                    <h5 class="col px-2">N/A</h5>
                </div>
            </>
        )
    } else if (props.expDecks === 'neo-destiny') {
        return (
            <>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fire'} />
                    <Icon textSwitch={'Psychic'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Dark_(TCG)" target="_blank" rel="noreferrer">Dark</a>  
                    </h5>
                </div>
                <div class="row mx-0 px-2">
                    <Icon textSwitch={'Fighting'} />
                    <Icon textSwitch={'Water'} />
                    <h5 class="col px-2">
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Light_(TCG)" target="_blank" rel="noreferrer">Light</a>  
                    </h5>
                </div>
            </>
        )
    }
}

export default ExpInfo
