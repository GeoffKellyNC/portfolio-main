import React from 'react'

//styled imports
import styled from 'styled-components'
import { Tag } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { CgWebsite } from 'react-icons/cg'

const Project = ({ data }) => {
  const tagColors = ['#2db7f5', '#f50', '#87d068', '#108ee9', '#eb2f96'];

  return (
    <ProjectBody>
      <img
        src={data.imageSrc}
        alt={`${data.title} Source`}
        className='project-img'
      />
      <div className='project-info'>
        <span className='project-title'>{data.title}</span>
        <p className='project-desc'>{data.description}</p>
        <div className='project-tech-tags'>
          {data.technologies.length > 0 ? (
            data.technologies.map((tech, idx) => (
              <Tag color={tagColors[idx % tagColors.length]} key={idx}>
                {tech}
              </Tag>
            ))
          ) : null}
        </div>
        <div className='project-links'>
          <a href={data.githubLink} target='_blank' rel='noreferrer'>
            <GithubOutlined
              style={{
                fontSize: '2rem',
                textDecoration: 'none',
                color: '#fe5a7b',
              }}
            />
          </a>
          <a href={data.liveLink} target='_blank' rel='noreferrer'>
            <CgWebsite
              style={{
                fontSize: '2rem',
                textDecoration: 'none',
                color: '#fe5a7b',
              }}
            />
          </a>
        </div>
      </div>
    </ProjectBody>
  )
}

export default Project


const ProjectBody = styled.div`
  display: flex;
  margin: 12rem 0;
  justify-content: center;
  gap: 5%;


  .project-title{
    font-family: ${pr => pr.theme.fonts.secondary};
    color: ${pr => pr.theme.colors.purple};
    font-size: ${pr => pr.theme.fontSizes.medium};

  }

  .project-img {
    width: 30%;
    height: 20%;
    border-radius: 10px;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 5%;
  }

  .project-desc {
    font-family: ${pr => pr.theme.fonts.primary};
    font-size: ${pr => pr.theme.fontSizes.tiny};
    line-height: 2rem;
  }

  .project-tech-tags {
    display: flex;
    flex-wrap: wrap;
  }

  .project-links {
    display: flex;
    gap: 3%;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 10%;
  }
`
