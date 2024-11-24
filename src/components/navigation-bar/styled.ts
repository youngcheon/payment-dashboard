import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 67px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -20px 40px 0px #00000005;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  max-width: 320px;
  position: relative;
  height: 100%;
`;

export const Indicator = styled.span<{ $activeIndex: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% / 4);
  height: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px 4px 0px 0px;
  transition: transform 0.3s ease;
  transform: translateX(${({ $activeIndex }) => $activeIndex * 100}%);
`;

export const MenuItem = styled.li<{ $isActive: boolean }>`
  flex: 1;
  height: 100%;
  position: relative;

  ${({ theme, $isActive }) =>
    $isActive &&
    `
    a svg {
      transform: translateY(-5px);
      path {
        fill: ${theme.colors.primary};
      }
    }

    span {
      color: ${theme.colors.primary};
    }
  `}
`;

export const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 4px;

  svg {
    transform: translateY(0);
    transition: all 0.3s ease;
    path {
      transition: all 0.3s ease;
    }
  }
`;
