import * as S from './styled';
import NavigationBar from '@/components/navigation-bar';
import DashboardIcon from '@/assets/icons/dashboard.svg?react';
import ActivityIcon from '@/assets/icons/activity.svg?react';
import CardIcon from '@/assets/icons/card.svg?react';
import UserIcon from '@/assets/icons/user.svg?react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { path: '/dashboard', icon: <DashboardIcon /> },
  { path: '/card', icon: <CardIcon /> },
  { path: '/activity', icon: <ActivityIcon /> },
  { path: '/profile', icon: <UserIcon /> },
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <S.Container>
      <S.MobileWrapper>
        <S.Content>{children}</S.Content>
        <NavigationBar items={navigationItems} />
      </S.MobileWrapper>
    </S.Container>
  );
};

export default MainLayout;
