import axios from 'axios'


export const axiosAuth = () => {
    const API_KEY = process.env.REACT_APP_API_KEY


    return axios.create({
        headers: {
            authorization: API_KEY
        }
    })
}