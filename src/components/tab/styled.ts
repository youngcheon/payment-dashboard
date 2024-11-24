import styled, { css } from 'styled-components';

export const TabContainer = styled.div<{ variant: 'default' | 'transparent' }>`
  display: flex;
  padding: 4px;
  border-radius: 24px;
  width: fit-content;
  justify-content: center;
  align-items: center;

  ${({ theme, variant }) => css`
    background-color: ${variant === 'transparent' ? 'transparent' : theme.colors.background};
    gap: ${variant === 'transparent' ? '20px' : '0'};
  `}
`;

export const TabButton = styled.button<{ isActive: boolean; variant: 'default' | 'transparent' }>`
  font-weight: 600;
  border-radius: 20px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 24px;
  text-align: center;
  cursor: pointer;

  ${({ isActive, theme, variant }) => css`
    min-width: ${variant === 'transparent' ? 'fit-content' : '86px'};
    height: 34px;
    padding: ${variant === 'transparent' ? '0' : '5px 17px'};
    background-color: ${variant === 'transparent'
      ? 'transparent'
      : isActive
        ? theme.colors.primary
        : 'transparent'};
    color: ${variant === 'transparent'
      ? isActive
        ? theme.colors.primary
        : theme.colors.gray
      : isActive
        ? theme.colors.white
        : theme.colors.darkGray};
  `}
`;

export const TabContent = styled.div`
  margin-top: 20px;
`;
