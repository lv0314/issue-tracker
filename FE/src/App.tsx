import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { LoginPage } from '@/pages/Login';
import { theme } from '@/styles/theme';
import { Callback } from '@/pages/Callback';
import { IssueListPage } from '@/pages/IssueList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/issueList" element={<IssueListPage />} />
          <Route path="/redirect/oauth" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
