import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import SpaceManType from '../../../../components/animations/SpaceManType'
import Email from '../../../../components/animations/Email'

const Contact = ({ contactRef }) => {
  return (
    <ContactSection>
      <div className="ref-top" ref={contactRef}></div>
      <h2 className="contact-title">03 CONTACT</h2>
      <div className="contact-container">
        <div className="contact-left">
          <SpaceManType />
        </div>
        <div className="contact-right">
          <Email />
          <h3 className="contact-text">CONTACT ME</h3>
          <ContactForm />
        </div>
      </div>
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.div`
  width: 100%;
  padding: 4rem 0;
  background-color: ${pr => pr.theme.colors.black};

  .contact-title {
    text-align: center;
    font-family: ${pr => pr.theme.fonts.secondary};
    font-size: ${pr => pr.theme.fontSizes.xl};
    margin-bottom: 4rem;
    color: ${pr => pr.theme.colors.primary};
  }

  .contact-container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }

  .contact-left, .contact-right {
    flex: 1;
  }

  .contact-right {
    background: ${pr => pr.theme.colors.purple};
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-text {
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.medium};
    color: white;
    margin-bottom: 2rem;
  }

  @media ${pr => pr.theme.devices.tablet} {
    .contact-container {
      flex-direction: column;
    }

    .contact-left, .contact-right {
      width: 100%;
    }

    .contact-left {
      margin-bottom: 2rem;
    }
  }
`