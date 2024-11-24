import { ReactNode } from 'react';
import * as S from './styled';
import { formatDate } from '@/utils';
import { Data } from '@/types';

interface ListItemProps extends Data {
  avatar?: string;
}

interface ListProps {
  children: ReactNode;
}

const List = ({ children }: ListProps) => {
  return <S.ListContainer>{children}</S.ListContainer>;
};

const ListItem = ({ avatar, name, amount, timestamp, type }: ListItemProps) => {
  const isPositive = amount > 0;

  return (
    <S.ListItemContainer>
      {avatar ? <S.Avatar src={avatar} alt={name} /> : <S.DefaultAvatar />}
      <S.ContentWrapper>
        <S.MainContent>
          <S.Name>{name}</S.Name>
          <S.Amount $isPositive={isPositive}>
            {isPositive ? '+' : '-'}${Math.abs(amount).toLocaleString()}
          </S.Amount>
        </S.MainContent>
        <S.SubContent>
          <S.Type>{type}</S.Type>
          <S.Date>{formatDate(timestamp, { format: 'YYYY.MM.DD HH:mm' })}</S.Date>
        </S.SubContent>
      </S.ContentWrapper>
    </S.ListItemContainer>
  );
};

List.Item = ListItem;

export default List;
