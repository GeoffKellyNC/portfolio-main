import { combineReducers } from "redux";
import { appNotifications } from "./notifyState/notify.reducer";
import { errorNotifications } from "./notifyState/notify.reducer";
import { projectsData } from "./data/data.reducer";




export default combineReducers({
    appNotifications,
    errorNotifications,
    projectsData
});