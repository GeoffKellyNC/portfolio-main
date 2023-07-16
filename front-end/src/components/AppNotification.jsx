import React from 'react'
import { connect } from 'react-redux'
import { notification } from 'antd'



const AppNotification = ({
    appNotifications
}) => { 
    const [api, contextHolder] = notification.useNotification()

    const openNofication = () => {
        api.info({
            message: 'Notification',
            description: appNotifications.message,
        })
    }

    return(
        <>
            { contextHolder }
            {
                appNotifications.active && openNofication()
            }
        </>
    )
}
    

export default connect(st => ({
    appNotifications: st.appNotifications
}),null) (AppNotification)