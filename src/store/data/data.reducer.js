import * as dataTypes from './data.types'
import berrySiteImg from '../../assets/berrysite.png'
import portfolioSiteImg from '../../assets/portfolio.png'
import LinkdImage from '../../assets/getlinkd.png'


const sampleProjectData = [
    {
        id: '2390394jf0jf029j0jf20jf-23-g-jg24n-gj2nge-bndlskn',
        title: 'Berry Twitch Bot',
        description: 'Berry Bot is a full Stack Twitch Bot / API built to assist streamers make their streaming experience more streamlined. There are many features such as, a chat bot that moderates your chat, responds to users requests and commands. The ability to control ads on channel. Point tracking system for misbehaving users. Full Authentication system through twitch. Ability to start polls, see moderation stats, channel stats and more. See source Code on my github for more details.',
        imageSrc: berrySiteImg ,
        technologies:  ['ReactJS', 'Redux', 'Node.JS', 'GPT-4','TWITCH API','OpenAi', 'MongoDb', 'Git'],
        githubLink: 'https://github.com/GeoffKellyNC',
        liveLink: 'https://berrytwitchbot.netlify.app/'

    },
    {
        id: '239039029j0jf20jf-23-g-jg24n-gj2nge-bndlskn',
        title: 'LINKD - Tattoo Artist Social Media',
        description: 'LINKD is a full stack social media application built for tattoo artists. It is built with ReactJS, Redux, Node.JS, Express, and MongoDB. It allows clients to create an account, upload photos of their work, and connect with other artists. Artists can bid on jobs created by artists. The site also utilized custom moderation AI models to moderate the site.',
        imageSrc: LinkdImage ,
        technologies:  [ 'TypeScript', 'ReactJS', 'Redux', 'Node.JS', 'Express', 'MongoDb', 'Git', 'OpenAi'],
        githubLink: 'https://github.com/GeoffKellyNC',
        liveLink: 'https://dev.getlinkd.ink/'
    },
    
    {
        id: '2390394jf0jf3429j0jf20jf-23-g-jg2234-e-bndlskn',
        title: 'Portfolio Site',
        description: 'This is my portfolio site. It is a full stack application built with ReactJS, Redux, Node.JS, Express, and MongoDB. It is a work in progress and will be updated as I learn more and build more projects.',
        imageSrc: portfolioSiteImg ,
        technologies:  ['ReactJS', 'Redux', 'Node.JS', 'Express', 'MongoDb', 'Git'],
        githubLink: 'https://github.com/GeoffKellyNC/portfolio-main',
        liveLink: 'https://geoffkelly.dev/'
    },

  
]

export function projectsData(state = sampleProjectData, action){
    switch(action.type){
        case dataTypes.GET_PROJECT_DATA:
            return action.payload
        default:
            return state
    }
}