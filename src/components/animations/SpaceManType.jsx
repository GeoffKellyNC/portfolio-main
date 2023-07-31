import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

import spaceManTypeFile from '../../assets/animation/spaceman-typing.json'

const SpaceManType = () => {
  return (
    <SpaceManTypeAnime>
        <Player 
            loop
            autoplay
            src={ spaceManTypeFile }
        />
    </SpaceManTypeAnime>
  )
}

export default SpaceManType

const SpaceManTypeAnime = styled.div`
    height: 800px;
    width: 800px;
    margin: 0;
    padding: 0;
`