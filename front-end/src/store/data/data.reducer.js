import * as dataTypes from './data.types'


const sampleProjectData = [
    {
        id: '2390394jf0jf029j0jf20jf-23-g-jg24n-gj2nge-bndlskn',
        title: 'Berry Twitch Bot',
        description: 'Berry Bot is a full Stack Twitch Bot / API built to assist streamers make their streaming experience more streamlined. There are many features such as, a chat bot that moderates your chat, responds to users requests and commands. The ability to control ads on channel. Point tracking system for misbehaving users. Full Authentication system through twitch. Ability to start polls, see moderation stats, channel stats and more. Work in progress with many more features to come.',
        imageSrc: 'https://via.placeholder.com/150',
        technologies:  ['ReactJS', 'Redux', 'Styled-Components', 'Node.JS', 'Express', 'JWT','TWITCH API', 'TWURPLE', 'React Router V6', 'SQL', 'MySQL', 'bycrypt', 'Axios', 'Git'],
        githubLink: 'https://github.com/GeoffKellyNC',
        liveLink: 'https://berrytwitchbot.netlify.app/'

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