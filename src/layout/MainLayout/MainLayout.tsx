import * as S from './styled';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <S.Container>
      <S.MobileWrapper>{children}</S.MobileWrapper>
    </S.Container>
  );
};

export default MainLayout;
