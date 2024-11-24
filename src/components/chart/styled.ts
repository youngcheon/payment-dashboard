import styled from 'styled-components';

export const ChartContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 20px 0;
`;

export const LegendContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;
  margin-bottom: 20px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const LegendColor = styled.div<{ color: string }>`
  width: 32px;
  height: 4px;
  background-color: ${(props) => props.color};
  border-radius: 1px;
`;

export const TooltipBox = styled.div<{ $isIncome: boolean }>`
  background-color: ${(props) =>
    props.$isIncome ? props.theme.colors.primary : props.theme.colors.secondary};
  padding: 10px;
  border-radius: 8px;
  color: white;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid
      ${(props) => (props.$isIncome ? props.theme.colors.primary : props.theme.colors.secondary)};
  }
`;

export const TooltipPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;
`;

export const TooltipDate = styled.p`
  font-size: 0.8em;
  margin-top: 4px;
`;
