import React, { useEffect, useState, useContext } from "react";
import Icon from '../Icon/Icon'
import ExpImages from '../ExpImages/ExpImages'
import { Flipper, Flipped } from 'react-flip-toolkit';

const ExpBody = ({ expansion }) => {

    return (
        <>
            <main class="expansion-body row bg-secondary col-lg-8 col-sm-12 m-0 p-4 border border-dark bs-lift">
                <section class="row bg-light p-0 mx-0 border border-dark bs-lift justify-content-center">
                        <ExpImages cardSet={expansion} />
                    <div class="col-xl-5 col-lg-5 col-sm-8 text-start my-5 px-3 d-block justify-content-center">
                        <div class="row pt-4 d-flex justify-content-center">
                            <img src="https://i.imgur.com/fo3Kkih.png" alt="" class="col-lg-6 col-sm-8" />
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
                </section>
            </main>
        </>
    )
}

export default ExpBody