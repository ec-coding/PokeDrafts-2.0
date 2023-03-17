import React from 'react'
import './Parallax.css';

const Parallax = (props) => {


        return (
            <>
                <div className="parallaxContainer">
                    <div className={props.screen}>
                    </div>
                </div>
            </>
        )


}

export default Parallax