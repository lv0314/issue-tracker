import styled from 'styled-components';
import { Badge } from '@/components/common/Badge';
import { Text } from '@/components/common/Text';
import CHECK_OFF_CIRCLE from '@/assets/Icons/checkOffCircle.svg';

type AssigneeListItemProps = {
  assignee: string;
  assigneeProfileImg: string;
};

const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`;

export function AssigneeListItem({
  assignee,
  assigneeProfileImg,
}: AssigneeListItemProps) {
  return (
    <StyledListItem>
      <Badge
        imgSRC={assigneeProfileImg}
        alt={`${assignee}프로필`}
        badgeSize="small"
      />
      <Text text={assignee} styles="width: 100px" />
      <CHECK_OFF_CIRCLE />
    </StyledListItem>
  );
}
