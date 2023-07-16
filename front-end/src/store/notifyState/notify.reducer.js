import * as notifyTypes from './notify.types'


export function appNotifications(state = {active: false, message: ''}, action){
    switch(action.type){
        case notifyTypes.SET_APP_NOTIFICATION:
            return {active: true, message: action.payload}
        default:
            return state
    }
}

export function errorNotifications(state = {active: false, message: ''}, action){
    switch(action.type){
        case notifyTypes.SET_ERROR_NOTIFICATION:
            return {active: true, message: action.payload}
        default:
            return state
    }
}