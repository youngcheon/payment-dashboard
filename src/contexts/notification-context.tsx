import NotificationContainer from '@/components/notification';
import React, { createContext, useState, useCallback } from 'react';

interface Notification {
  id: string;
  content: string | React.ReactNode;
  duration?: number;
}

interface NotificationContextType {
  showNotification: (notification: Omit<Notification, 'id'>) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = useCallback(({ content, duration = 3000 }: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();

    setNotifications((prev) => [...prev, { id, content, duration }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, duration);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotificationContainer notifications={notifications} />
    </NotificationContext.Provider>
  );
};
