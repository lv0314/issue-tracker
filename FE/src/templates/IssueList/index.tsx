import { useRecoilValue } from 'recoil';
import { getIssue } from '@/recoil/selectors/getIssue';
import * as S from './style';
import { LabelFilterDetail } from '@/components/Label/LabelFilterDetail';
import { MilestoneFilterDetail } from '@/components/Milestone/MilestoneFilterDetail';
import { AssigneeFilterDetail } from '@/components/User/AssigneeFilterDetail';
import { AuthorFilterDetail } from '@/components/User/AuthorFilterDetail';
import { OpenIssueText } from '@/components/Issue/OpenIssueText';
import { CloseIssueText } from '@/components/Issue/CloseIssueText';
import {
  ListTable,
  ListTableHeader,
  ListTableItems,
} from '@/components/common/ListTable';
import { IssueItem, IssueItemProps } from '@/components/Issue/IssueItem';

// TODO: service 디렉토리로 분리
type filterBooleanCountProps = {
  (array: [], target: string, boolean: boolean): number;
};

type Override<T1, T2> = Omit<T1, keyof T2> & T2;

type UserIssueProps = Override<IssueItemProps, { timestamp: Date }>;

const filterBooleanCount: filterBooleanCountProps = (
  array,
  target,
  boolean,
) => {
  const count = array.filter(value => value[target] === boolean);

  return count.length;
};

const getDiffrentMinutes = (timestamp: string): number => {
  const now = new Date();
  const copiedTimestamp = new Date(timestamp);

  const differentMinutes =
    (now.getTime() - copiedTimestamp.getTime()) / (1000 * 60);

  return Math.floor(differentMinutes);
};

const getTrimmedMessage = (minutes: number): string => {
  if (minutes < 1) {
    return '1분 전';
  }
  if (minutes < 60) {
    return `${minutes}분`;
  }
  if (minutes < 1440) {
    return `${Math.floor(minutes / 60)}시간`;
  }
  return `${Math.floor(minutes / 1440)}일`;
};

// TODO: 컴포넌트 네이밍 다시 고민
export function IssueList() {
  const userIssueData = useRecoilValue(getIssue);

  return (
    <ListTable>
      <ListTableHeader>
        <S.IssueHeaderLeft>
          <input type="checkbox" />
          <OpenIssueText
            openIssueCount={filterBooleanCount(
              userIssueData.issues,
              'open',
              true,
            )}
          />
          <CloseIssueText
            closeIssueCount={filterBooleanCount(
              userIssueData.issues,
              'open',
              false,
            )}
          />
        </S.IssueHeaderLeft>
        <S.IssueHeaderRight>
          <AuthorFilterDetail
            userData={[{ name: 'Dott' }, { name: 'ver' }, { name: '선을로' }]}
          />
          <LabelFilterDetail labelData={[{ name: '1' }, { name: '2' }]} />
          <MilestoneFilterDetail
            milestoneList={['1번 마일스톤', '2번 마일스톤', '3번 마일스톤']}
          />
          <AssigneeFilterDetail
            userData={[{ name: 'Dott' }, { name: 'ver' }, { name: '선을로' }]}
          />
        </S.IssueHeaderRight>
      </ListTableHeader>

      <ListTableItems>
        {userIssueData.issues.map((issue: IssueItemProps) => (
          <IssueItem
            issueTitle={issue.issueTitle}
            issueNumber={issue.issueNumber}
            issueWriter={issue.issueWriter}
            timestamp={getTrimmedMessage(getDiffrentMinutes(issue.timestamp))}
            milestone={issue.milestone}
            label={issue.label}
            assignee={issue.assignee}
            key={`${issue.issueTitle}${Date.now()}`}
          />
        ))}
      </ListTableItems>
    </ListTable>
  );
}
