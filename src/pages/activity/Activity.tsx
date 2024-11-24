import { Tabs } from '@/components/tab';
import * as S from './styled';
import NotificationIcon from '@/assets/icons/notification.svg?react';
import mockData from '@/mocks/data.json';
import Chart from '@/components/chart';
import { Data } from '@/types';
import List from '@/components/list';
import { useTransactionNotification } from '@/hooks';

const Activity = () => {
  const sortedData = (mockData as Data[]).sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );

  useTransactionNotification({
    data: sortedData,
    enabled: true,
  });

  const renderTransactionList = (filter: (item: Data) => boolean) => (
    <List>
      {sortedData
        .filter((item) => new Date(item.timestamp) <= new Date() && filter(item))
        .reverse()
        .slice(0, 20)
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
            data={sortedData}
            period={{
              startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
              endDate: new Date(),
            }}
          />
        </Tabs.Item>
        <Tabs.Item label="Month" value="monthly">
          <Chart
            data={sortedData}
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
            {renderTransactionList(() => true)}
          </Tabs.Item>
          <Tabs.Item label="Expense" value="expense">
            {renderTransactionList((item) => item.amount < 0)}
          </Tabs.Item>
          <Tabs.Item label="Income" value="income">
            {renderTransactionList((item) => item.amount > 0)}
          </Tabs.Item>
        </Tabs>
      </S.RecentTransactions>
    </S.Container>
  );
};

export default Activity;
