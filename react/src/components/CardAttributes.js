import React from 'react'
import Icon from './Icon'

export default function CardAttributes(props) {
    //CARD NAME
    if (props.cardName !== undefined) {
        return (
            <>
                <h3>{props.cardName}</h3>
            </>
        )
    }

    //TYPE CHECK
    if (props.pokemonHP !== undefined) {
        if (props.cardCheck?.supertype === "Pokémon") {
            return (
                <>
                    <h4 class="col text-right">{props.pokemonHP} HP</h4>
                </>
            )
        } else if (props.cardCheck?.supertype === "Trainer") {
            return (
                <>
                    <h4 class="col text-left">{props.pokemonHP} HP</h4>
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
                        <h5 class="text-stage">{props.cardCheck?.subtypes} Pokémon</h5>
                        <h6>Evolves from {props.cardCheck?.evolvesFrom}</h6>
                    </div>
                </>
            )
        } else if (props.cardCheck?.evolvesFrom == undefined) {
            return (
                <>
                    <div class="col">
                        <h5 class="text-stage">{props.cardCheck?.subtypes} Pokémon</h5>
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
                    <h6>{props.pokemonPower.map(x => x.text)?.join('')}</h6>
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
                        <div class="row icon-sm-row">
                            <h5 class="col text-upwards attack-name">{attack.name}</h5>
                            <div class="col row attack-icons">{attack.cost.map((x) => <Icon attackCost={x} />)}</div>
                            <h5 class="col text-right right-padding text-upwards flex-quarter attack-damage">{attack.damage}</h5>
                        </div>
                        <h6>{attack.text}</h6>
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
                    <h6 class="card-trio-col col">Weakness
                        <Icon weakness={props.statTrio.weaknesses?.map(x => x.type)?.join(', ')} />
                    </h6>
                    <h6 class="card-trio-col col">Resistance
                        <Icon resistance={props.statTrio.resistances?.map(x => x.type)?.join(', ')} />
                    </h6>
                    <h6 class="card-trio-col col">Retreat Cost
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