import React from 'react'

import styled from 'styled-components'

import { Tag } from 'antd';

const tagColors = ['#2db7f5', '#f50', '#87d068', '#108ee9', '#eb2f96'];

const ResumeItem = ({
    resData
}) => {
  return (
    <ResItem>
        <div className = 'res-left'>
                <span className = ' year year-start'>{ resData.year_start }</span>
                <span> - </span>
                <span className = ' year year-end'> { resData.year_end ? resData.year_end : '20XX'} </span>
        </div>
        <div className = 'res-right'>
            <span className = 'job-title'> { resData.title }</span>
            <span className = 'company'> { resData.company } </span>
            <span className = 'job-desc'> { resData.description } </span>
            <div className = 'tech-tags'>
            {
                resData.technologies.map((tech,idx) => {
                    return <Tag color = {tagColors[idx % tagColors.length]} key = {idx}>
                        {tech}
                    </Tag>
                })
            }
        </div>
        </div>
    </ResItem>
  )
}

export default ResumeItem


const ResItem = styled.div`
    display: flex;
    margin: 2rem;

    .res-left {
        display: flex;
        width: 40%;
        margin: 0 3rem;
    }


    .res-right {
        display: flex;
        flex-direction: column;
    }

    .year {
        color: ${pr => pr.theme.colors.primary};
        font-family: ${ pr => pr.theme.fonts.secondary};
        font-size: ${pr => pr.theme.fontSizes.small};
        padding: 0 5px;
    }

    .job-title{
        color: ${pr => pr.theme.colors.accent};
        font-family: ${pr => pr.theme.fonts.secondary};
        margin: 5px 0;
        font-size: ${ pr => pr.theme.fontSizes.small};
    }

    .company {
        color: ${pr => pr.theme.colors.secondary};
        font-family: ${pr => pr.theme.fonts.secondary};
        margin: 5px 0;
        font-size: ${ pr => pr.theme.fontSizes.small};
    }

    .job-desc {
        color: ${pr => pr.theme.colors.offWhite};
        font-family: ${pr => pr.theme.fonts.primary};
        margin: 5px 0;
        font-size: ${ pr => pr.theme.fontSizes.tiny};
        line-height: 20px;
    }

    .tech-tags {
        padding: 5px 0;
    }


`