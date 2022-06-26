import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Suspense } from 'react';
import { ControlPanel } from '@/templates/ControlPanel';
import { Header } from '@/templates/Header';
import { NavigationTab } from '@/templates/NavigationTab';
import * as S from './style';
import { IssueList } from '@/templates/IssueList';
import { issueState } from '@/recoil/atoms/issue';

const Test = styled.div`
  display: flex;
`;

export function IssueListPage() {
  const [issue, setIssue] = useRecoilState(issueState);

  return (
    <Suspense fallback={<div>로딩 </div>}>
      <S.IssueList>
        <Header />
        <Test>
          <ControlPanel />
          <NavigationTab />
        </Test>

        <IssueList />
      </S.IssueList>
    </Suspense>
  );
}
