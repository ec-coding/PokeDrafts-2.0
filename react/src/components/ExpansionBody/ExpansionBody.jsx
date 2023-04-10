import React, { useEffect, useState, useContext } from "react";
import Icon from '../../components/Icon/Icon'
import ExpansionImages from '../ExpansionImages/ExpansionImages'

const ExpansionBody = ({ expansion }) => {

    return (
        <>
            <main class="expansion-body-container row bg-secondary col-8 mx-0 p-4 px-4 border border-dark bs-lift">
                <div class="row bg-light pt-1 mx-0 border border-dark bs-lift">
                    <div class="col-1 mx-4"></div>
                    <div class="expansion-image-container col-4 mt-4">
                            <ExpansionImages cardSet={expansion} />
                    </div>
                    <div class="col-5 text-start my-5 ms-3 px-3">
                        <div class="pt-4 d-flex justify-content-center">
                            <img src="https://i.imgur.com/fo3Kkih.png" alt="" class="w-50" />
                        </div>

                        <div class="bg-light border border-dark bs-lift my-3">
                            <h3 class="bg-warning border border-dark bs-lift px-2">Cards in Set</h3>
                            <h5 class="px-2">English: 102</h5>
                            <h5 class="px-2">Japanese: 102</h5>
                        </div>

                        <div class="bg-light border border-dark bs-lift my-3">
                            <h3 class="bg-warning border border-dark bs-lift px-2">Set Number</h3>
                            <h5 class="px-2">English: 1</h5>
                            <h5 class="px-2">Japanese: 1</h5>
                        </div>

                        <div class="bg-light border border-dark bs-lift my-3">
                            <h3 class="bg-warning border border-dark bs-lift px-2">Release Date</h3>
                            <h5 class="px-2">English: Jan 9, 1999</h5>
                            <h5 class="px-2">Japanese: Oct 20, 1996</h5>
                        </div>

                        <div class="bg-light border border-dark bs-lift my-3">
                            <h3 class="bg-warning border border-dark bs-lift px-2">Theme Decks</h3>
                            <div class="row mx-0 px-2">
                                <Icon textSwitch={'Water'} />
                                <Icon textSwitch={'Grass'} />
                                <h5 class="col">Overgrowth</h5>
                            </div>
                            <div class="row mx-0 px-2">
                                <Icon textSwitch={'Lightning'} />
                                <Icon textSwitch={'Psychic'} />
                                <h5 class="col">Zap!</h5>
                            </div>
                            <div class="row mx-0 px-2">
                                <Icon textSwitch={'Fire'} />
                                <Icon textSwitch={'Grass'} />
                                <h5 class="col">Brushfire</h5>
                            </div>
                            <div class="row mx-0 px-2">
                                <Icon textSwitch={'Water'} />
                                <Icon textSwitch={'Fighting'} />
                                <h5 class="col">Blackout!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ExpansionBody