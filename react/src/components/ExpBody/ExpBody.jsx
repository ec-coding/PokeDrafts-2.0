import React, { useEffect, useState, useContext } from "react";
import Icon from '../Icon/Icon';
import ExpImages from '../ExpImages/ExpImages';
import ExpInfo from "../ExpInfo/ExpInfo";
import { Flipper, Flipped } from 'react-flip-toolkit';
import './expBody.scss'


const ExpBody = ({ expansion, navSlide }) => {

    const expOuter = `outer-${expansion}`
    const expInner = `inner-${expansion}`

    return (
        <>
            <main id={expOuter} class="expansion-body row col-lg-8 col-sm-12 m-0 p-4 bs-lift">
                <section id={expInner} class="row p-4 mx-0 bs-lift justify-content-center">
                    <div class="content row">
                        <ExpImages cardSet={expansion} navSlide={navSlide} />
                        <div class="right bg-light col-xl-5 col-lg-5 col-sm-8 text-start my-5 px-3 d-block justify-content-center">
                            <div class="row pt-4 d-flex justify-content-center">
                                <ExpInfo expLogo={expansion} />
                            </div>

                            <div class="bg-light border border-dark bs-lift my-3">
                                <h3 class="bg-warning border border-dark bs-lift px-2">Cards in Set</h3>
                                <ExpInfo expQuantity={expansion} />
                            </div>

                            <div class="bg-light border border-dark bs-lift my-3">
                                <h3 class="bg-warning border border-dark bs-lift px-2">Set Number</h3>
                                <ExpInfo expNumber={expansion} />
                            </div>

                            <div class="bg-light border border-dark bs-lift my-3">
                                <h3 class="bg-warning border border-dark bs-lift px-2">Release Date</h3>
                                <ExpInfo expRelease={expansion} />
                                <h5 class="px-2">English: Jan 9, 1999</h5>
                                <h5 class="px-2">Japanese: Oct 20, 1996</h5>
                            </div>

                            <div class="bg-light border border-dark bs-lift my-3">
                                <h3 class="bg-warning border border-dark bs-lift px-2">Theme Decks</h3>
                                <ExpInfo expDecks={expansion} />
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
                </section>
            </main>
        </>
    )
}

export default ExpBody