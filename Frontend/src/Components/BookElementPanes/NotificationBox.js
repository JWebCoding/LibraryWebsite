import React, { useState } from "react";
import "./NotificationBox.css"

function NotificationBox(props) {
  const [notificationCount, setNotificationCount] = useState(1);
  // const [notifications, setNotifications] = useState([]);

  // setNotification(props.notificationList); 
  
  if(notificationCount>0){
    return(
      <div className="notification-box" id={props.id}>
        {props.notificationList.map((notification) => (
          <div>
            <h1>Testing</h1>
            <h2>{notification.id}</h2>
          </div>
        ))}
      </div>
    )
  }
};

export default NotificationBox;