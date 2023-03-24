import React from 'react'
import './Icon.css'

export default function Icon(props) {
    //TYPE
    const elementType = `icon-large icon-${props.type}`

    if (props.type !== undefined) {
        return (
            <>
                <div className={elementType}></div>
            </>
        )
    }

    //ATTACK COSTS
    const attackCostElement = `icon-sm icon-${props.attackCost}`

    if (props.attackCost !== undefined) {
        return (
            <>
                <div className={attackCostElement}></div>
            </>
        )
    }

    //WEAKNESSES
    const weaknessIcon = `icon-${props.weakness}`

    if (props.weakness !== undefined) {
        return (
            <>
                <div class="mt-1 d-flex justify-content-center mx-auto row icon-text-box">
                    <div className={weaknessIcon}></div>
                    <h6 class="col-1">x2</h6>
                </div>
            </>
        )
    } 

    //RESISTANCES
    const resistIcon = `icon-${props.resistance}`

    if (props.resistance !== undefined) {
        return (
            <>
                <div class="mt-1 d-flex justify-content-center mx-auto row icon-text-box">
                    <div className={resistIcon}></div>
                    <h6 class="col-2">-30</h6>
                </div>
            </>
        )
    }

    //RETREAT COST
    if (props.retreat === 1) {
        return (
            <>
                <div class="container">
                    <div class="mt-1 d-flex justify-content-center mx-auto row">
                        <div class="icon-Colorless"></div>
                    </div>
                </div>
            </>
        )
    } else if (props.retreat === 2) {
        return (
            <>
                <div class="container">
                    <div class="mt-1 d-flex justify-content-center mx-auto row">
                        <div class="icon-Colorless"></div>
                        <div class="icon-Colorless"></div>
                    </div>
                </div>
            </>
        )
    } else if (props.retreat === 3) {
        return (
            <>
                <div class="container">
                    <div class="mt-1 d-flex justify-content-center mx-auto row">
                        <div class="icon-Colorless"></div>
                        <div class="icon-Colorless"></div>
                        <div class="icon-Colorless"></div>
                    </div>
                </div>
            </>
        )
    } else if (props.retreat === 4) {
        return (
            <>
                <div class="container">
                    <div class="mt-1 d-flex justify-content-center mx-auto row">
                        <div class="icon-Colorless"></div>
                        <div class="icon-Colorless"></div>
                        <div class="icon-Colorless"></div>
                        <div class="icon-Colorless"></div>
                    </div>
                </div>
            </>
        )
    }
}