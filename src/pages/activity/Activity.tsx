import * as S from './styled';
import NotificationIcon from '@/assets/icons/notification.svg?react';

const Activity = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Transactions</S.Title>
        <button>
          <NotificationIcon />
        </button>
      </S.TitleContainer>
    </S.Container>
  );
};

export default Activity;
