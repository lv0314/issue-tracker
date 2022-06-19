import { ControlPanel } from '@/templates/ControlPanel';
import { Header } from '@/templates/Header';
import { NavigationTab } from '@/templates/NavigationTab';
import * as S from './style';

export function IssueListPage() {
  return (
    <S.IssueList>
      <Header />
      <ControlPanel />
      <NavigationTab />
      {/* <IssueList /> */}
    </S.IssueList>
  );
}
