import styled from 'styled-components';
import { IssueItemBadges } from './IssueItemBadges';
import { IssueItemInfo } from './IssueItemInfo';

export const IssueItemLayout = styled.li`
  display: flex;
  padding: 24px 32px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  justify-content: space-between;
`;

type Label = {
  name: string;
  color?: string;
  textColor?: string;
};

type Milestone = {
  title: string;
};

type Assignee = {
  name: string;
  profileImage: string;
};

type IssueItemProps = {
  issueTitle: string;
  issueNumber: number;
  issueWriter: string;
  timestamp: Date;
  milestone?: Milestone;
  label?: Label[];
  assignee?: Assignee[];
};

export function IssueItem({
  issueTitle,
  issueNumber,
  issueWriter,
  timestamp,
  milestone,
  label,
  assignee,
}: IssueItemProps) {
  return (
    <IssueItemLayout>
      <IssueItemInfo
        issueTitle={issueTitle}
        issueNumber={issueNumber}
        issueWriter={issueWriter}
        timestamp={timestamp}
        milestone={milestone}
        label={label}
      />
      <IssueItemBadges milestone={milestone} assignee={assignee} />
    </IssueItemLayout>
  );
}
