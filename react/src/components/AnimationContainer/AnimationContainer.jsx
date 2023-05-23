import React, { useState } from 'react'
import Landing from '../../screens/Landing/Landing';
import Expansions from '../../screens/Expansions/Expansions';

const AnimationContainer = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
      setIsFullScreen((prevFullScreen) => !prevFullScreen);
    };
  
    return (
      <>
        <Landing toggleFullScreen={toggleFullScreen} isFullScreen={isFullScreen} />
        <Expansions toggleFullScreen={toggleFullScreen} isFullScreen={isFullScreen} />
      </>
    );
}

export default AnimationContainer
