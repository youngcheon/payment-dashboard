import { Tabs } from '@/components/tab';
import * as S from './styled';
import NotificationIcon from '@/assets/icons/notification.svg?react';
import data from '@/mocks/data.json';
import Chart from '@/components/chart';
import { Data } from '@/types';

const Activity = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Activity</S.Title>
        <button>
          <NotificationIcon />
        </button>
      </S.TitleContainer>
      <Tabs defaultTab="weekly">
        <Tabs.Item label="Week" value="weekly">
          <Chart
            data={data as Data[]}
            period={{
              startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
              endDate: new Date(),
            }}
          />
        </Tabs.Item>
        <Tabs.Item label="Month" value="monthly">
          <Chart
            data={data as Data[]}
            period={{
              startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
              endDate: new Date(),
            }}
          />
        </Tabs.Item>
      </Tabs>
    </S.Container>
  );
};

export default Activity;
