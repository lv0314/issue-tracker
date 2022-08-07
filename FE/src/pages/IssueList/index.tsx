import styled from 'styled-components';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ControlPanel } from '@/templates/ControlPanel';
import { Header } from '@/templates/Header';
import { IssueListNavigationTab } from '@/templates/IssueListNavigationTab';
import * as S from './style';
import { IssueList } from '@/templates/IssueList';

const Test = styled.div`
  display: flex;
`;

export function IssueListPage() {
  return (
    <S.IssueList>
      <Header />
      <Suspense fallback={<div>로딩 </div>}>
        <Test>
          <ControlPanel />
          <IssueListNavigationTab />
        </Test>
        <Routes>
          <Route path="/open" element={<IssueList />} />
          <Route path="/close" element={<IssueList />} />
        </Routes>
      </Suspense>
    </S.IssueList>
  );
}
