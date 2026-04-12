import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { notificationAtom } from '../../recoil/notificationAtom';
import './Notification.css';

const NotificationToast = () => {
  const notification = useRecoilValue(notificationAtom);
  const setNotification = useSetRecoilState(notificationAtom);

  if (!notification.isVisible) return null;

  const handleClose = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <div className={`notification-toast ${notification.type}`}>
      <div className="notification-content">
        <span>{notification.message}</span>
      </div>
      <button className="notification-close" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default NotificationToast;
