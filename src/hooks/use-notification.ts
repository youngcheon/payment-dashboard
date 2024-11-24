import { NotificationContext } from '@/contexts';
import { useContext } from 'react';

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('NotificationProvider 내부에서 사용되어야 합니다');
  }
  return context;
};
