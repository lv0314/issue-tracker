import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { Login } from '@/pages/Login';
import { theme } from '@/styles/theme';
import { Callback } from '@/pages/Callback';
import { IssueList } from '@/pages/IssueList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/issueList" element={<IssueList />} />
          <Route path="/redirect/oauth" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
