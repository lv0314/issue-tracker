import { ControlPanel } from '@/templates/ControlPanel';
import { Header } from '@/templates/Header';
import * as S from './style';

export function IssueListPage() {
  return (
    <S.IssueList>
      <Header />
      <ControlPanel />
      {/* <IssueList /> */}
    </S.IssueList>
  );
}
