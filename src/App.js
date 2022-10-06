import { useState } from "react";
import "./App.scss";
import Notification from "./components/notification/Notification";
import notificationsMock from "./mockData.json";

function App() {
  const [notifications, setNotifications] = useState(notificationsMock);

  function handleOnMarkAllRead() {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  }

  function handleOnRead(_notification) {
    setNotifications(
      notifications.map((n) => {
        if (n.id === _notification.id) {
          return { ...n, read: true };
        }
        return n;
      })
    );
  }

  function getUnreadCount() {
    return notifications.reduce((prev, curr) => {
      if (!curr.read) return prev + 1;
      return prev;
    }, 0);
  }

  return (
    <div className="app">
      <main className="main-content">
        <div className="notification-header">
          <h1>
            Notifications{" "}
            <span className="notification-unread-count">
              {getUnreadCount()}
            </span>
          </h1>
          <span className="mark-all-read" onClick={handleOnMarkAllRead}>
            Mark all as read
          </span>
        </div>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            onRead={handleOnRead}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
