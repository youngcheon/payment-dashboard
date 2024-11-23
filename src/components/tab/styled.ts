import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 24px;
  width: fit-content;
  justify-content: center;
  align-items: center;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  min-width: 86px;
  height: 34px;
  padding: 5px 17px;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  font-family: Poppins;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : 'transparent')};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.darkGray)};
`;

export const TabContent = styled.div`
  margin-top: 20px;
`;
