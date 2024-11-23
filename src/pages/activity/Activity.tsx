import { Tabs } from '@/components/tab';
import * as S from './styled';
import NotificationIcon from '@/assets/icons/notification.svg?react';

const tabs = [
  { label: 'Week', value: 'weekly', content: <div>Weekly</div> },
  { label: 'Month', value: 'monthly', content: <div>Monthly</div> },
];

const Activity = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Activity</S.Title>
        <button>
          <NotificationIcon />
        </button>
      </S.TitleContainer>
      <Tabs tabs={tabs} defaultTab="weekly" />
    </S.Container>
  );
};

export default Activity;
