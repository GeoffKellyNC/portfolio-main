import * as dataTypes from './data.types'
import berrySiteImg from '../../assets/berrysite.png'
import portfolioSiteImg from '../../assets/portfolio.png'


const sampleProjectData = [
    {
        id: '2390394jf0jf029j0jf20jf-23-g-jg24n-gj2nge-bndlskn',
        title: 'Berry Twitch Bot',
        description: 'Berry Bot is a full Stack Twitch Bot / API built to assist streamers make their streaming experience more streamlined. There are many features such as, a chat bot that moderates your chat, responds to users requests and commands. The ability to control ads on channel. Point tracking system for misbehaving users. Full Authentication system through twitch. Ability to start polls, see moderation stats, channel stats and more. Work in progress with many more features to come.',
        imageSrc: berrySiteImg ,
        technologies:  ['ReactJS', 'Redux', 'Node.JS', 'Express','TWITCH API','SQL', 'MongoDb', 'Git'],
        githubLink: 'https://github.com/GeoffKellyNC',
        liveLink: 'https://berrytwitchbot.netlify.app/'

    },
    {
        id: '2390394jf0jf3429j0jf20jf-23-g-jg2234-gj2nge-bndlskn',
        title: 'Portfolio Site',
        description: 'This is my portfolio site. It is a full stack application built with ReactJS, Redux, Node.JS, Express, and MongoDB. It is a work in progress and will be updated as I learn more and build more projects.',
        imageSrc: portfolioSiteImg ,
        technologies:  ['ReactJS', 'Redux', 'Node.JS', 'Express', 'MongoDb', 'Git'],
        githubLink: 'https://github.com/GeoffKellyNC/portfolio-main',
        liveLink: 'https://geoffkelly.dev/'
    }
  
]

export function projectsData(state = sampleProjectData, action){
    switch(action.type){
        case dataTypes.GET_PROJECT_DATA:
            return action.payload
        default:
            return state
    }
}