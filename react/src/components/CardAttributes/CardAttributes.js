import React from 'react'
import Icon from '../Icon/Icon'

export default function CardAttributes(props) {
    //CARD NAME
    if (props.cardName !== undefined) {
        return (
            <>
                <h3 class="mb-0">{props.cardName}</h3>
            </>
        )
    }

    //TYPE CHECK
    if (props.pokemonHP !== undefined) {
        if (props.cardCheck?.supertype === "Pokémon") {
            return (
                <>
                    <h4 class="col text-end mb-0 pe-1">{props.pokemonHP} HP</h4>
                </>
            )
        } else if (props.cardCheck?.supertype === "Trainer") {
            return (
                <>
                    <h4 class="col text-left mb-0">{props.pokemonHP} HP</h4>
                </>
            )
        }
    }

    //BASIC CHECK & EVOLVES FROM
    if (props.cardCheck?.supertype === "Pokémon") {
        if (props.cardCheck?.evolvesFrom !== undefined) {
            return (
                <>
                    <div class="col">
                        <h5>{props.cardCheck?.subtypes} Pokémon</h5>
                        <h6 class="mb-0">Evolves from {props.cardCheck?.evolvesFrom}</h6>
                    </div>
                </>
            )
        } else if (props.cardCheck?.evolvesFrom == undefined) {
            return (
                <>
                    <div class="col">
                        <h5>{props.cardCheck?.subtypes} Pokémon</h5>
                    </div>
                </>
            )
        }
    }

    //POKEMON POWER
    if (props.pokemonPower !== undefined) {
        return (
            <>
                <div class="row card-ability">
                    <h5 class="card-ability-title">Pokémon Power: {props.pokemonPower.map(x => x.name)?.join('')}</h5>
                    <h6 class="m-0 py-2">{props.pokemonPower.map(x => x.text)?.join('')}</h6>
                </div>
                <br />
            </>
        )
    }

    //ATTACKS
    if (props.pokemonAttacks !== undefined) {

        return (
            <>
                {props.pokemonAttacks.map((attack) => (
                    <div>
                        <div class="row icon-sm-row pt-0">
                            <h5 class="attack-name col text-upwards fw-bold">{attack.name}</h5>
                            <div class="attack-icons col row m-0">{attack.cost.map((x) => <Icon attackCost={x} />)}</div>
                            <h5 class="attack-damage col text-upwards text-center flex-quarter">{attack.damage}</h5>
                        </div>
                        <p class="attack-text mb-0">{attack.text}</p>
                        <hr />
                    </div>
                ))}
            </>
        )

    }

    //WEAKNESS, RESISTANCE, AND RETREAT COST
    if (props.statTrio?.supertype === "Pokémon") {
        return (
            <>
                <div class="card-trio-row row">
                    <h6 class="card-trio-col text-center col mb-0 p-0">Weakness
                        <Icon weakness={props.statTrio.weaknesses?.map(x => x.type)?.join(', ')} />
                    </h6>
                    <h6 class="card-trio-col text-center col mb-0 p-0">Resistance
                        <Icon resistance={props.statTrio.resistances?.map(x => x.type)?.join(', ')} />
                    </h6>
                    <h6 class="card-trio-col text-center col mb-0 p-0">Retreat Cost
                        <Icon retreat={props.statTrio.convertedRetreatCost} />
                    </h6>
                </div>
            </>
        )
    }

    //CARD BIO
    if (props.cardBio !== undefined) {
        return (
            <>
                <div>
                    <h6 class="card-attr-border row card-bio">{props.cardBio}</h6>
                </div>
            </>
        )
    }

    //CARD RULES
    if (props.cardRules !== undefined) {
        return (
            <>
                <div class="row">
                    <h6 class="col">{props.cardRules}</h6>
                </div>
                <hr />
            </>
        )
    }

}