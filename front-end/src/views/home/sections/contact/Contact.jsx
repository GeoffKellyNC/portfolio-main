import React from 'react'
import styled from 'styled-components'

import contactTitle from '../../../../assets/titles/contact.png'
import ContactForm from './ContactForm'

import Email from '../../../../components/animations/Email'

const Contact = ({ contactRef }) => {
  return (
    <ContactSection>
        <div className="ref-top" ref={contactRef}></div>
        <div className="contact-title">
            <img src={contactTitle} alt="contact-title" />
        </div>
        <div className="contact-container">
            <div className="contact-left">
                <span> Left </span>
            </div>
            <div className="contact-right">
                <Email />
                <ContactForm />
            </div>
        </div>
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.div`
    margin: 30rem 0;
    width: 100%;

    .contact-title {
        text-align: center;
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

    .contact-right {
        background: ${pr => pr.theme.colors.purple};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`
