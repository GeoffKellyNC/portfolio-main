import React from 'react'
import styled from 'styled-components'

import ContactForm from './ContactForm'
import SpaceManType from '../../../../components/animations/SpaceManType'

import Email from '../../../../components/animations/Email'

const Contact = ({ contactRef }) => {
  return (
    <ContactSection>
        <div className="ref-top" ref={contactRef}></div>
        <div className="contact-title">
            <span className = 'contact-title-text'> 03 CONTACT </span>
        </div>
        <div className="contact-container">
            <div className="contact-left">
                <SpaceManType />
            </div>
            <div className="contact-right">
                <Email />
                <span className = 'contact-text'> CONTACT ME </span>
                <ContactForm />
            </div>
        </div>
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.div`
    width: 100%;

    .contact-title {
        text-align: center;
        width: 100%;
        font-family: ${pr => pr.theme.fonts.secondary};
        font-size: ${pr => pr.theme.fontSizes.xl};
        margin: 4rem 0;
        color: ${pr => pr.theme.colors.primary};
    }

    .contact-container {
        display: flex;
        width: 100%; // Added to ensure container takes up full width
    }

    .contact-left, .contact-right {
        flex: 1; // Makes both divs take equal space
        height: 1000px;
    }

    .contact-left {
        background: transparent; // Optional since by default, it's transparent
    }

    .contact-text{
        font-family: ${pr => pr.theme.fonts.primary};
        margin: 20px;
        font-size: ${pr => pr.theme.fontSizes.medium};
        color: white;
    }

    .contact-right {
        background: ${pr => pr.theme.colors.purple};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`
