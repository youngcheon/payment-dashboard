import * as S from './styled';
import NotificationIcon from '@/assets/icons/notification.svg?react';

const Home = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Transactions</S.Title>
        <NotificationIcon />
      </S.TitleContainer>
    </S.Container>
  );
};

export default Home;
