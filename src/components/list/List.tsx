import { ReactNode } from 'react';
import * as S from './styled';
import { formatDate } from '@/utils';
import { Data } from '@/types';

interface ListItemProps extends Data {
  avatar?: string;
}

interface ListProps {
  children: ReactNode;
  isLoading?: boolean;
}

const List = ({ children, isLoading }: ListProps) => {
  return (
    <S.ListContainer>
      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => <ListSkeletonItem key={index} />)
        : children}
    </S.ListContainer>
  );
};

const ListSkeletonItem = () => (
  <S.SkeletonContainer>
    <S.SkeletonAvatar />
    <S.SkeletonContent>
      <S.MainContent>
        <S.SkeletonText width="120px" />
        <S.SkeletonText width="80px" />
      </S.MainContent>
      <S.SubContent>
        <S.SkeletonText width="80px" />
        <S.SkeletonText width="60px" />
      </S.SubContent>
    </S.SkeletonContent>
  </S.SkeletonContainer>
);

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
