import styled from 'styled-components';
import * as Issue from '@/components/Issue';
import { LabelBadge } from '../Label';

export const IssueItemInfoLayout = styled.div`
  display: flex;
  gap: 32px;
`;

export const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IssueTitle = styled.div`
  display: flex;
`;

export const IssueDescription = styled.div`
  display: flex;
  gap: 16px;
`;

type Label = {
  name: string;
  color?: string;
  textColor?: string;
};

type Milestone = {
  title: string;
};

type Issue = {
  issueTitle: string;
  issueNumber: number;
  issueWriter: string;
  timestamp: Date;
  milestone?: Milestone;
  label?: Label[];
};

export function IssueItemInfo({
  issueTitle,
  issueNumber,
  issueWriter,
  timestamp,
  milestone,
  label,
}: Issue) {
  return (
    <IssueItemInfoLayout>
      <input type="checkbox" />
      <IssueInfo>
        <IssueTitle>
          <Issue.IssueTitleText IssueTitle={issueTitle} />
          {label &&
            label.map(el => (
              <LabelBadge
                name={el.name}
                color=""
                key={`${el.name}${Date.now()}`}
              />
            ))}
        </IssueTitle>

        <IssueDescription>
          <Issue.IssueNumberText IssueNumber={`#${issueNumber}`} />
          <Issue.IssueWriterTimestampText
            IssueTimestamp={timestamp}
            IssueWriter={issueWriter}
          />
          {milestone && (
            <Issue.IssueMilestoneText IssueMilestone={milestone.title} />
          )}
        </IssueDescription>
      </IssueInfo>
    </IssueItemInfoLayout>
  );
}
