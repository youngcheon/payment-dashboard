import { Tabs } from '@/components/tab';
import * as S from './styled';
import NotificationIcon from '@/assets/icons/notification.svg?react';
import { Data } from '@/types';
import List from '@/components/list';
import { useTransactionData, useTransactionNotification } from '@/hooks';
import Chart from '@/components/chart';

const Activity = () => {
  const { data, isLoading } = useTransactionData();

  useTransactionNotification({
    data,
    enabled: true,
  });

  const renderTransactionList = (length: number, filter: (item: Data) => boolean) => (
    <List isLoading={isLoading}>
      {data
        .filter((item) => new Date(item.timestamp) <= new Date() && filter(item))
        .reverse()
        .slice(0, length)
        .map((item) => (
          <List.Item key={`${item.name}-${item.timestamp}`} {...item} />
        ))}
    </List>
  );

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Activity</S.Title>
        <button>
          <NotificationIcon />
        </button>
      </S.TitleContainer>
      <Tabs defaultTab="weekly" variant="default">
        <Tabs.Item label="Week" value="weekly">
          <Chart
            data={data}
            isLoading={isLoading}
            period={{
              startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
              endDate: new Date(),
            }}
          />
        </Tabs.Item>
        <Tabs.Item label="Month" value="monthly">
          <Chart
            data={data}
            isLoading={isLoading}
            period={{
              startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
              endDate: new Date(),
            }}
          />
        </Tabs.Item>
      </Tabs>
      <S.RecentTransactions>
        <S.SubTitle>Recent Transactions</S.SubTitle>
        <Tabs defaultTab="all" variant="transparent">
          <Tabs.Item label="All" value="all">
            {renderTransactionList(20, () => true)}
          </Tabs.Item>
          <Tabs.Item label="Expense" value="expense">
            {renderTransactionList(10, (item) => item.amount < 0)}
          </Tabs.Item>
          <Tabs.Item label="Income" value="income">
            {renderTransactionList(10, (item) => item.amount > 0)}
          </Tabs.Item>
        </Tabs>
      </S.RecentTransactions>
    </S.Container>
  );
};

export default Activity;
