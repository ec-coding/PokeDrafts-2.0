import React from "react";
import './flipCardBanner.css';

const FlipCardBanner = () => {
    return (
        <>
            <div class="flip-card-container row">
                <section class="flip-card col">
                    <div class="flip-card-inner">
                        <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/WlnkkQ7.png" alt="" /></div>
                        <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/zev5vMv.png" alt="" /></div>
                    </div>
                </section>
                <section class="flip-card col">
                    <div class="flip-card-inner">
                        <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/7tpsOrb.png" alt="" /></div>
                        <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/MfrWEXq.png" alt="" /></div>
                    </div>
                </section>
                <section class="flip-card col">
                    <div class="flip-card-inner">
                        <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/Wo1I3kR.png" alt="" /></div>
                        <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/TLIixxK.png" alt="" /></div>
                    </div>
                </section>
                <section class="flip-card col">
                    <div class="flip-card-inner">
                        <div class="flip-card-front"><img class="img-main" src="https://i.imgur.com/0UluGjx.png" alt="" /></div>
                        <div class="flip-card-back"><img class="img-alt" src="https://i.imgur.com/sfgVYuN.png" alt="" /></div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FlipCardBanner