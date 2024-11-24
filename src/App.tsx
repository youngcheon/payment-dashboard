import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import MainLayout from './layout/main-layout';
import { Outlet } from 'react-router-dom';
import { NotificationProvider } from './contexts';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <NotificationProvider>
          <Outlet />
        </NotificationProvider>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
