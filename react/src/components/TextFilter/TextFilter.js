import React from 'react'
import Icon from '../Icon/Icon'

export default function TextFilter(props) {
    let iconObj = {
        grass:"Grass",
        fire:"Fire",
        water:"Water",
        lightning:"Lightning",
        psychic:"Psychic",
        fighting:"Fighting",
        colorless:"Colorless",
        darkness:"Darkness",
        metal:"Metal"
    };
    const elementCheck = (/grass|fire|water|lightning|psychic|fighting|colorless|darkness|metal/gi)
    const iconComponent = <Icon type={elementCheck}/>

    if (props.text != undefined)  {
        return (
            <p class="attack-text mb-0">{props.text.replace(elementCheck, iconComponent)}</p>
        )
    }
}