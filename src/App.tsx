import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import MainLayout from './layout/main-layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
