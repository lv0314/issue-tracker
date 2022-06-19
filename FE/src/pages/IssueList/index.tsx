import styled from 'styled-components';
import { ControlPanel } from '@/templates/ControlPanel';
import { Header } from '@/templates/Header';
import { NavigationTab } from '@/templates/NavigationTab';
import * as S from './style';

const Test = styled.div`
  display: flex;
`;

export function IssueListPage() {
  return (
    <S.IssueList>
      <Header />
      <Test>
        <ControlPanel />
        <NavigationTab />
      </Test>

      {/* <IssueList /> */}
    </S.IssueList>
  );
}
