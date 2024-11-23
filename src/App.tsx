import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <div>Hello</div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
