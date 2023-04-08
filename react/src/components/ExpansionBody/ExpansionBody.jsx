import React, { useEffect, useState, useContext } from "react";
import Icon from '../../components/Icon/Icon'
import ExpansionImages from '../ExpansionImages/ExpansionImages'

const ExpansionBody = ({ expansion }) => {
    return (
        <>
            <main class="row col-8 mx-0 py-5 px-0">
                <div class="col-2"></div>
                <div class="col-5">
                    <ExpansionImages cardSet={expansion} />
                </div>
                <div class="col-4 text-start">
                    <div>
                        <h3>Cards in Set</h3>
                        <h5>English: 102</h5>
                        <h5>Japanese: 102</h5>
                    </div>
                    <br />
                    <div>
                        <h3>Set Number</h3>
                        <h5>English: 1</h5>
                        <h5>Japanese: 1</h5>
                    </div>
                    <br />
                    <div>
                        <h3>Release Date</h3>
                        <h5>English: Jan 9, 1999</h5>
                        <h5>Japanese: Oct 20, 1996</h5>
                    </div>
                    <br />
                    <div>
                        <h3>Theme Decks</h3>
                        <div class="row mx-0 px-0">
                            <Icon textSwitch={'Water'} /><Icon textSwitch={'Grass'} /><h5 class="col">Overgrowth</h5>
                        </div>
                        <div class="row mx-0 px-0">
                            <Icon textSwitch={'Lightning'} /><Icon textSwitch={'Psychic'} /><h5 class="col">Zap!</h5>
                        </div>
                        <div class="row mx-0 px-0">
                            <Icon textSwitch={'Fire'} /><Icon textSwitch={'Grass'} /><h5 class="col">Brushfire</h5>
                        </div>
                        <div class="row mx-0 px-0">
                            <Icon textSwitch={'Water'} /><Icon textSwitch={'Fighting'} /><h5 class="col">Blackout!</h5>
                        </div>
                    </div>
                </div>
                <p>Ok, that's enough fun, you can go back to <a href="./">page 1</a>, or date you carry on to <a href="./page-3">page 3</a>?</p>
            </main>
        </>
    )
}

export default ExpansionBody