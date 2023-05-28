import React from 'react';
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

}

export default ExpInfo
