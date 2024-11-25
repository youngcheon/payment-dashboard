import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './styled';

interface MenuItem {
  path: string;
  icon: ReactNode;
  label?: string;
}

interface NavigationBarProps {
  items: MenuItem[];
  defaultIndex?: number;
}

const NavigationBar = ({ items, defaultIndex = 0 }: NavigationBarProps) => {
  const location = useLocation();

  const getActiveIndex = (pathname: string) => {
    const index = items.findIndex((item) => item.path === pathname);
    return index === -1 ? defaultIndex : index;
  };

  const activeIndex = getActiveIndex(location.pathname);

  return (
    <S.Container>
      <S.MenuList>
        {items.map((item) => (
          <S.MenuItem key={item.path} $isActive={location.pathname === item.path}>
            <S.MenuLink to={item.path}>{item.icon}</S.MenuLink>
          </S.MenuItem>
        ))}
        <S.Indicator $activeIndex={activeIndex} />
      </S.MenuList>
    </S.Container>
  );
};

export default NavigationBar;
