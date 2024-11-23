import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MobileWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.mobile.maxWidth};
  max-height: ${({ theme }) => theme.mobile.maxHeight};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  margin: 0 auto;
  position: relative;
  padding-top: 44px;
`;
