import { AddIssueHeader } from '@/templates/AddIssueHeader';
import { AddIssueSideBar } from '@/templates/AddIssueSideBar';
import { AddIssueSubmit } from '@/templates/AddIssueSubmit';
import { AddIssueWrite } from '@/templates/AddIssueWrite';
import { Header } from '@/templates/Header';
import * as S from './style';

export function AddIssuePage() {
  return (
    <S.AddIssuePage>
      <Header />
      <AddIssueHeader />
      <S.TypeSection>
        <AddIssueWrite />
        <AddIssueSideBar />
      </S.TypeSection>
      <AddIssueSubmit />
    </S.AddIssuePage>
  );
}
