import "./Notification.scss";

function Notification({ notification = {}, onRead = () => {} }) {
  const { profileAvatar, name, interaction, link, when, read } = notification;

  return (
    <div
      className={`notification-container ${read ? "read" : ""}`.trim()}
      onClick={() => onRead(notification)}
    >
      <img
        src={profileAvatar}
        className="notification-avatar"
        alt={`${name} avatar`}
      />
      <div className="notification-interaction-container">
        <div className="notification-title-container">
          <span className="notification--user-name">{name}</span>
          <span className="notification--interaction">{interaction}</span>
          <span className="notification--link">{link}</span>
          {!notification.read && (
            <span className="notification--not-read-symbol">&#x2022;</span>
          )}
        </div>
        <span className="notification--time">{when}</span>
        {!!notification.message && (
          <div className="notification__message-container">
            <p>{notification.message}</p>
          </div>
        )}
      </div>
      {!!notification.notificationPicture && (
        <img
          src={notification.notificationPicture}
          className="notification--picture"
          alt="Notification"
        />
      )}
    </div>
  );
}

export default Notification;
