import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

import spaceManMusic from '../../assets/animation/spacemusic.json'

const SpaceMusic = () => {
  return (
    <SpaceManMusicAnime>
        <Player 
            loop
            autoplay
            src={ spaceManMusic }
        />
    </SpaceManMusicAnime>
  )
}

export default SpaceMusic

const SpaceManMusicAnime = styled.div`
    height: 400px;
    width: 400px;
`