import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

import emailAnime from '../../assets/animation/email.json'

const Email = () => {
  return (
    <EmailAnimation>
        <Player 
            loop
            autoplay
            src={emailAnime}
        />
    </EmailAnimation>
  )
}

export default Email

const EmailAnimation = styled.div`
    height: 300px;
    width: 300px;
    margin-top: -100px;
`