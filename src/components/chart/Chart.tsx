import { Data } from '@/types';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from 'styled-components';
import * as S from './styled';
import { formatDate } from '@/utils';

interface ChartProps {
  data: Data[];
  period?: {
    startDate: Date;
    endDate: Date;
  };
  isLoading?: boolean;
}

const compressData = (data: Data[], maxPoints: number = 50) => {
  if (data.length <= maxPoints) return data;

  const groupSize = Math.ceil(data.length / maxPoints);
  const compressed = [];

  for (let i = 0; i < data.length; i += groupSize) {
    const group = data.slice(i, i + groupSize);
    const avgAmount = group.reduce((sum, item) => sum + item.amount, 0) / group.length;

    compressed.push({
      ...group[0],
      amount: avgAmount,
      income: avgAmount > 0 ? avgAmount : null,
      expense: avgAmount < 0 ? Math.abs(avgAmount) : null,
      timestamp: new Date(group[0].timestamp).toLocaleDateString(),
    });
  }

  return compressed;
};

const Chart = ({ data, period, isLoading }: ChartProps) => {
  const theme = useTheme();

  const formattedData = compressData(
    data
      .filter((item) => {
        if (!period) return true;
        const itemDate = new Date(item.timestamp);
        return itemDate >= period.startDate && itemDate <= period.endDate;
      })
      .map((item) => ({
        ...item,
        date: new Date(item.timestamp).toLocaleDateString(),
        fullDateTime: formatDate(item.timestamp, { format: 'MM.DD HH:mm' }),
        amount: Number(item.amount),
        income: Number(item.amount) > 0 ? Number(item.amount) : null,
        expense: Number(item.amount) < 0 ? Math.abs(Number(item.amount)) : null,
      })),
  );

  if (isLoading) return <S.SkeletonBox />;

  return (
    <S.ChartContainer>
      <S.LegendContainer>
        <S.LegendItem>
          <S.LegendColor color={theme.colors.primary} />
          <span>income</span>
        </S.LegendItem>
        <S.LegendItem>
          <S.LegendColor color={theme.colors.secondary} />
          <span>expense</span>
        </S.LegendItem>
      </S.LegendContainer>
      <ResponsiveContainer width="100%" height={161}>
        <AreaChart data={formattedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor={theme.colors.primary} stopOpacity={0.2} />
              <stop offset="100%" stopColor={theme.colors.primary} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor={theme.colors.secondary} stopOpacity={0.2} />
              <stop offset="100%" stopColor={theme.colors.secondary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            ticks={[formattedData[0].timestamp, formattedData[formattedData.length - 1].timestamp]}
            tick={{ fill: theme.colors.gray }}
          />
          <Tooltip
            position={{ y: 0 }}
            offset={10}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const isIncome = payload[0]?.dataKey === 'income';
                return (
                  <S.TooltipBox $isIncome={isIncome}>
                    {payload.map(
                      (entry, index) =>
                        entry.value && (
                          <S.TooltipPrice
                            key={index}
                          >{`$${entry.value.toLocaleString()}`}</S.TooltipPrice>
                        ),
                    )}
                    <S.TooltipDate>{payload[0]?.payload.fullDateTime}</S.TooltipDate>
                  </S.TooltipBox>
                );
              }
              return null;
            }}
          />
          <Area
            type="basis"
            dataKey="income"
            stroke={theme.colors.primary}
            fill="url(#incomeGradient)"
            fillOpacity={1}
            connectNulls
            strokeWidth={2}
            activeDot={{ r: 6, strokeWidth: 1 }}
            animationDuration={1000}
            isAnimationActive={true}
            dot={false}
          />
          <Area
            type="basis"
            dataKey="expense"
            stroke={theme.colors.secondary}
            fill="url(#expenseGradient)"
            fillOpacity={1}
            connectNulls
            strokeWidth={2}
            activeDot={{ r: 6, strokeWidth: 1 }}
            animationDuration={1000}
            isAnimationActive={true}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
};

export default Chart;
