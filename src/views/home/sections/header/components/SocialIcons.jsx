import React from "react";
import styled from "styled-components";
import { FaGithubAlt, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const iconData = [
  { name: 'Github', icon: <FaGithubAlt />, link: 'https://github.com/GeoffKellyNC' },
  { name: 'LinkedIn', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/geoffkelly/' },
  { name: 'Twitter', icon: <FaTwitter />, link: 'https://twitter.com' },
  { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com' },
  { name: 'Email', icon: <MdEmail />, link: '#' },
];

const SocialIcons = () => {
  return (
    <StyledIcons>
      <ul>
        {iconData.map((icon) => (
          <li key={icon.name}>
            <a
              href={icon.link}
              className={`${icon.name}-icon icon`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${icon.name} profile`}
            >
              {icon.icon}
            </a>s
          </li>
        ))}
      </ul>
    </StyledIcons>
  );
};

export default SocialIcons;

const StyledIcons = styled.div`
  position: fixed;
  bottom: 0;
  left: 40px;
  z-index: 10;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 0.5rem 0;
  }

  .icon {
    font-size: 1.5rem;
    color: ${pr => pr.theme.colors.accent};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${pr => pr.theme.colors.secondary};
      transform: translateY(-3px);
    }
  }

  li:last-child::after {
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: ${pr => pr.theme.colors.accent};
  }

  @media ${pr => pr.theme.devices.tablet} {
    display: none;
  }
`;