import { useEffect, useState } from 'react';
import { useNotification } from '@/hooks/use-notification';
import { Data } from '@/types';
import { formatDate } from '@/utils';
import { useTheme } from 'styled-components';

interface UseTransactionNotificationProps {
  data: Data[];
  interval?: number;
  enabled?: boolean;
}

export const useTransactionNotification = ({
  data,
  interval = 1000,
  enabled = true,
}: UseTransactionNotificationProps) => {
  const theme = useTheme();
  const { showNotification, resetNotification } = useNotification();
  const [lastNotifiedId, setLastNotifiedId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const checkTimeInterval = setInterval(() => {
      const now = new Date();

      const matchingData = data.find((item) => {
        const itemTime = new Date(item.timestamp);
        const itemId = `${item.name}-${item.timestamp}`;

        if (lastNotifiedId === itemId) return false;

        return (
          itemTime.getHours() === now.getHours() &&
          itemTime.getMinutes() === now.getMinutes() &&
          itemTime.getSeconds() === now.getSeconds()
        );
      });

      if (matchingData) {
        setLastNotifiedId(`${matchingData.name}-${matchingData.timestamp}`);
        showNotification({
          content: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '16px',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                <span>{matchingData.name}</span>
                <span>
                  {matchingData.amount > 0 ? '+' : '-'}$
                  {Math.abs(matchingData.amount).toLocaleString()}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px',
                  color: theme.colors.darkGray,
                }}
              >
                <span>{matchingData.type}</span>
                <span>{formatDate(matchingData.timestamp, { format: 'YYYY.MM.DD HH:mm' })}</span>
              </div>
            </div>
          ),
          duration: 5000,
        });
      }
    }, interval);

    return () => {
      clearInterval(checkTimeInterval);
      resetNotification();
    };
  }, [data, interval, enabled, lastNotifiedId, showNotification]);

  return { resetNotification };
};
