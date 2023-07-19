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
            <main class="expansion-body row col-lg-8 col-sm-12 m-0 p-4 bs-lift bg-secondary">
                <section  class="row p-2 m-0 justify-content-center bs-lift bg-light">
                    <div class="content row">
                        <ExpImages cardSet={expansion} navSlide={navSlide} />
                        <div id={expOuter} class="right col-xl-6 col-lg-5 col-sm-8 text-start my-5 px-5 d-block justify-content-center">
                            <div class="logo row pt-4 d-flex justify-content-center">
                                <ExpInfo expLogo={expansion} />
                            </div>

                            <div class="quantity bg-light border border-dark bs-lift my-3">
                                <h3 id={expInner} class="border border-dark bs-lift px-2">Cards in Set</h3>
                                <ExpInfo expQuantity={expansion} />
                            </div>

                            <div class="number bg-light border border-dark bs-lift my-3">
                                <h3 id={expInner} class="border border-dark bs-lift px-2">Set Number</h3>
                                <ExpInfo expNumber={expansion} />
                            </div>

                            <div class="release bg-light border border-dark bs-lift my-3">
                                <h3 id={expInner} class="border border-dark bs-lift px-2">Release Date</h3>
                                <ExpInfo expRelease={expansion} />
                            </div>

                            <div class="decks bg-light border border-dark bs-lift my-3">
                                <h3 id={expInner} class="border border-dark bs-lift px-2">Theme Decks</h3>
                                <ExpInfo expDecks={expansion} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ExpBody