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
import { IssueItem } from '@/components/Issue/IssueItem';

const mock = {
  issueTitle: '이슈테스트',
  issueNumber: 999,
  issueWriter: 'Dott',
  timestamp: new Date(),
  milestone: { title: '마일스톤1' },
  label: [{ name: '테스트' }],
  assignee: [
    {
      name: 'Dott',
      profileImage:
        'https://ca.slack-edge.com/T74H5245A-U02RA7K501L-3c55992367ca-512',
    },
  ],
};

// TODO: 컴포넌트 네이밍 다시 고민
export function IssueList() {
  return (
    <ListTable>
      <ListTableHeader>
        {/* TODO: 아래의 item 컴포넌트처럼 분리 후 props 내려주는 식으로 개선 예정 */}
        <S.IssueHeaderLeft>
          <input type="checkbox" />
          <OpenIssueText openIssueCount={1} />
          <CloseIssueText closeIssueCount={0} />
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
        {/* TODO: mock 하나만 받고 구조분해는 하위 컴포넌트에서 하는 식으로 변경 + map으로 처리 */}
        <IssueItem
          issueTitle={mock.issueTitle}
          issueNumber={mock.issueNumber}
          issueWriter={mock.issueWriter}
          timestamp={mock.timestamp}
          milestone={mock.milestone}
          label={mock.label}
          assignee={mock.assignee}
        />
      </ListTableItems>
    </ListTable>
  );
}
