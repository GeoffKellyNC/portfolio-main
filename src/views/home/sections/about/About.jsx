import React, { useState } from 'react'
import styled from 'styled-components'


import ResumeItem from './ResumeItem'
import aboutTitle from '../../../../assets/titles/about.png'

const resumeData = [
    {
        title: 'Software Support Engineer',
        company: 'Nicus Software',
        description: "In my role, I acted as the primary liaison for customers, delivering timely and effective software solutions and updates. I efficiently managed and promptly responded to all customer support requests, ensuring speedy problem resolution. Through collaborative efforts with customers via email and phone communication, I drove issue resolution to completion. I consistently met or exceeded established timeframes for resolving support requests, and when encountering complex issues, I escalated them to the appropriate teams. Additionally, I participated in an on-call rotation to provide vital business support outside of regular working hours. My strong communication skills were instrumental in troubleshooting intricate data flows, leading to improved system efficiency and user experience. I maintained an extensive knowledge base, accurately recording detailed information on technical work and support cases. Moreover, I contributed to the development and updating of low complexity functionalities in the Nicustool, including configuring processes and tables.",
        year_start: '2022',
        year_end: null,
        technologies: ['SQL', 'Javascript', 'Python', 'Salesforce', 'Jira']
    },
    {
        title: 'Trust and Saftey Engineer',
        company: 'Epic Games',
        description: "In my position, I was responsible for analyzing and reviewing user-created content using internally developed applications and client tools, ensuring compliance with client policies. With exceptional attention to detail, I consistently delivered optimal quality and productivity, ranking in the top 5% of my cohort and maintaining an accuracy rate of 99% through data analysis. I collaborated with platform engineers and developers to enhance processes and workflows. Efficient time management was crucial as I met turnaround times for clients. Additionally, I gathered and analyzed technical literature to contribute to policy updates. I handled inquiries of an urgent or sensitive nature, ensuring online safety, and corresponded with law enforcement agencies when necessary. Moreover, I served as a point of contact during the training process while being shadowed by new agents and the development team. I also actively participated in the beta testing of new tools.",
        year_start: '2021',
        year_end: '2022',
        technologies: ['Jira', 'Javascript', 'Slack', 'API', 'REST API']
    },
    {
        title: 'Apple Master/Geek Squad Advanced Repair Agent',
        company: 'Best Buy',
        description: 'With over five years of expertise, I excelled in providing unparalleled technical support and repair services at Best Buy. I showcased exceptional interpersonal skills, managing an average of 40 client calls daily and overseeing software/hardware diagnostics for up to 20 units during peak periods. My commitment to data security ensured meticulous backup and restoration processes, and my leadership contributed to optimizing turnaround times and elevating overall client satisfaction.',
        year_start: '2016',
        year_end: '2021',
        technologies: ['Apple', 'Windows', 'Linux', 'Android', 'iOS', 'MacOS' ]
    },
    {
        title: 'Juvinile Mental Health Technician',
        company: 'Southwood Psychiatric Hospital',
        description: 'In my role at Southwood Psychiatric Hospital, I was deeply invested in monitoring the physical and emotional well-being of juvenile patients. I was proactive in observing, influencing, and establishing a rapport with patients, guiding them towards therapeutic activities to bolster interpersonal skills. Regularly documenting vital statistics, I was a vital collaborator with medical professionals to ensure effective treatment and rehabilitation for individuals with mental, emotional, and developmental challenges. Furthermore, I was instrumental in crafting strategies for patient wellness and independence, managing medication dispensing while maintaining accurate records, and facilitating essential family conferences. My dedication to the role ensured a safe environment, even during challenging situations requiring restraint or crisis management.',
        year_start: '2014',
        year_end: '2016',
        technologies: ['Crisis Management', 'Medication Dispensing', 'Patient Care', 'Patient Safety', 'Juvenile Mental Health']
    }
]



const About = ({
    aboutRef
}) => {
    // eslint-disable-next-line no-unused-vars
    const [ selection, setSelection ] = useState('resume')


  return (
    <AboutSection>
        <div className = 'ref-top' ref = {aboutRef}></div>
        <div className = 'about-title'>
            <img src = {aboutTitle} alt = 'about title' />
        </div>
        <div className = 'about-section'>
            <div className = 'about-left'>
                <div className = 'about-left-title'>
                    <span className = 'about-left-title-text'> MY STORY </span>
                </div>
                <div className = 'about-p'>
                <p>
                        My journey hasn't been a typical one. I grew up bouncing from one foster home to another, often facing challenging circumstances. During this time, I found solace in technology. This interest initially was an escape, but over time, it blossomed into a passion. I'm not a traditionally trained developer, but I am a self-taught coder who learned the craft out of sheer curiosity and necessity.
                        Despite the difficulties I encountered in my early life, I've cultivated an analytical mindset and a tenacious spirit. I'm not afraid of obstacles or failure because I've learned that they're often stepping stones to success. It might take me a little more time to understand a new concept, but once I get it, I really get it.
                        My experience has also taught me the value of perseverance and grit. I've built complex applications from scratch and have mastered technologies that were once foreign to me. I might not have a traditional background, but I have the determination, the eagerness, and the proven ability to learn and grow.
                        If you're looking for someone with a unique perspective, who brings real-world resilience to their work, I could be the right fit. I'm hoping to find a team where I can continue my journey, learning from others while also contributing my own insights and skills.
                    </p>
                </div>
            </div>
            <div className = 'about-right'>
                {
                    selection === 'resume' ? (
                        resumeData.length > 1 ? (
                            resumeData.map((item, idx) => {
                                return <ResumeItem resData = {item} key = {idx} />
                            })
                        ) : 'No ResumeData'
                    ) : null
                }
            </div>
        </div>
    </AboutSection>
  )
}

export default About


const AboutSection = styled.div`
    background: ${pr => pr.theme.colors.black};
    color: white;

    .about-title{
        font-size: ${pr => pr.theme.fontSizes.large};
        font-family: ${pr => pr.theme.fonts.secondary};
        text-align: center;
    }

    .about-section {
        display: flex;
        justify-content: center;
        align-content: center;
        aligh-items: center;
        width: 80%:
        margin: auto;
    }

    .about-left{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        font-family: ${pr => pr.theme.fonts.primary};
    }

    .about-left-title-text {
        font-family: ${pr => pr.theme.fonts.secondary};
        font-size: ${pr => pr.theme.fontSizes.large};
        color: ${pr => pr.theme.colors.purple};
    }

    .about-p {
        background: ${pr => pr.theme.colors.secondary};
        color: ${pr => pr.theme.colors.black};

        & p {
            padding: 2rem;
            width: 80%;
            margin: auto;
            font-size: ${pr => pr.theme.fontSizes.tiny};
            font-family: ${pr => pr.theme.fonts.primary};
            line-height: 1.5;

        }

    }
    
    .about-right{
        width: 40%;
        height: 800px;
        overflow: scroll;
        display: flex;
        flex-direction: column;

    }

    @media ${pr => pr.theme.devices.tablet} {
        .about-section {
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 3rem;
        }

        .about-left{
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            font-family: ${pr => pr.theme.fonts.primary};
        }
    }


`