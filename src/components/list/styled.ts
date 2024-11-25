import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DefaultAvatar = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding-block: 12px;
  gap: 12px;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 4px;
`;

export const Avatar = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 8px;
  object-fit: cover;
`;

export const Type = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Amount = styled.span<{ $isPositive: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  color: ${({ theme, $isPositive }) =>
    $isPositive ? theme.colors.primary : theme.colors.secondary};
`;

export const Date = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding-block: 12px;
  gap: 12px;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SkeletonAvatar = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const SkeletonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SkeletonText = styled.div<{ width?: string }>`
  height: 16px;
  width: ${({ width }) => width || '100%'};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
`;
