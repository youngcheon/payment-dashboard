import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecentTransactions = styled.div`
  margin-top: 20px;
`;

export const SubTitle = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 36px;
  margin-bottom: 20px;
`;
