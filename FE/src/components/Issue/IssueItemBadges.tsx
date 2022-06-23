import styled from 'styled-components';
import { Badge } from '../common/Badge';
import { Text } from '../common/Text';

export const IssueItemBadgesLayout = styled.div`
  display: flex;
  gap: 32px;
`;

export const BadgeField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  padding-right: 16px;
`;

type Assignee = {
  name: string;
  profileImage: string;
};

type Milestone = {
  title: string;
};

type IssueItemBadgesProps = {
  milestone?: Milestone;
  assignee?: Assignee[];
};

export function IssueItemBadges({ milestone, assignee }: IssueItemBadgesProps) {
  return (
    <IssueItemBadgesLayout>
      <BadgeField>{milestone && <Text text="마일스톤 아이콘" />}</BadgeField>

      <BadgeField>
        {assignee &&
          assignee.map(user => (
            <Badge
              imgSRC={user.profileImage}
              alt={user.name}
              key={`${user.name}${Date.now()}`}
            />
          ))}
      </BadgeField>
    </IssueItemBadgesLayout>
  );
}
