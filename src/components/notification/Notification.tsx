import styled, { keyframes } from 'styled-components';
import React from 'react';

interface NotificationProps {
  notifications: {
    id: string;
    content: string | React.ReactNode;
  }[];
}

const NotificationContainer: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <Container>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id}>
          {typeof notification.content === 'string' ? (
            <span>{notification.content}</span>
          ) : (
            notification.content
          )}
        </NotificationItem>
      ))}
    </Container>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: sticky;
  bottom: 70px;
  z-index: 1000;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
`;

const NotificationItem = styled.div`
  padding: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.3s ease-out;
  width: 100%;
`;

export default NotificationContainer;
