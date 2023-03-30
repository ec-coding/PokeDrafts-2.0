import React from 'react'
import Icon from '../Icon/Icon'
import reactStringReplace from 'react-string-replace';

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
    const cardText = props.text
    const elementCheck = (/(grass|fire|water|lightning|psychic|fighting|colorless|darkness|metal)/gi)
    const iconComponent = <Icon type={elementCheck}/>
    const elementType = `icon-`

    if (props.text != undefined)  {
        return (
            <p class="attack-text mb-0">
            {reactStringReplace(cardText, elementCheck, (match) => (
                <Icon textSwitch={match} />
            ))}
            </p>     
        )
    }
}