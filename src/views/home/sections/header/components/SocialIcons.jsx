import React from "react";

import styled from "styled-components";


import { v4 as uuid } from 'uuid';

//!-- Importing React Icons Components --//
import { FaGithubAlt, FaTwitter } from 'react-icons/fa'; //! Github Icon / Twitter Icon
import { AiOutlineLinkedin } from 'react-icons/ai'; //! Linkedin Icon
import { ImInstagram } from 'react-icons/im'; //! Instagram Icon
import { MdEmail } from 'react-icons/md'; //! Email Icon



const iconData = [
    {
        id: uuid(),
        name: 'Github',
        icon: <FaGithubAlt />,
        link: 'https://github.com/GeoffKellyNC',
        alt: 'Github Icon'
    },
    {
        id: uuid(),
        name: 'LinkedIn',
        icon: <AiOutlineLinkedin />,
        link: 'https://www.linkedin.com/in/geoffkelly/',
        alt: 'LinkedIn Icon'
    },
    {
        id: uuid(),
        name: 'Twitter',
        icon: <FaTwitter />,
        link: 'https://twitter.com',
        alt: 'Twitter Icon'
    },
    {
        id: uuid(),
        name: 'Instagram',
        icon: <ImInstagram />,
        link: 'https://www.instagram.com',
        alt: 'Instagram Icon'
    },
    {
        id: uuid(),
        name: 'Email',
        icon: <MdEmail />,
        link: '#',
        alt: 'Email Icon'
    }
]

const SocialIcons = () => {
  return (
    <StyledIcons className="social-icons-container">
      <ul>
        {iconData.map((icon) => {
          return (
            <li key={icon.id}>
              <a
                href={icon.link}
                className={`${icon.name}-icon icon`}
                target="_blank"
                rel="noreferrer"
              >
                {icon.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledIcons>
  );
};

export default SocialIcons;

const StyledIcons = styled.div`
    width: -1px;
    position: absolute;
    bottom: 0;
    left: 40px;
    right: auto;
    z-index: 0;

  ul {
    list-style: none;
    height: 23em;
  }

  svg {
    margin: 0.5em 0;
  }

  svg:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform: scale(3);
  }

  .Email-icon::after {
    content: "";
    display: block;
    width: 2px;
    height: 6em;
    margin: 0px auto;
    background-color: #0599ff;
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: moveGradient 4s alternate infinite;
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }

  .Email-icon::after:hover {
    background-color: ${(pr) => pr.theme.colors.primary};
  }

  .icon {
    font-size: 1.3rem;
    margin: 0.5rem;
    color: #0599ff;
  }

  .icon:hover {
    color: ${(pr) => pr.theme.colors.secondary};
  }

  @media ${pr => pr.theme.devices.tablet} {
    display: none;
  }
`;
