import { Badge } from '@/components/common/Badge';
import { Text } from '@/components/common/Text';

type AssigneeListItemProps = {
  assignee: string;
  assigneeProfileImg: string;
};

export function AssigneeListItem({
  assignee,
  assigneeProfileImg,
}: AssigneeListItemProps) {
  return (
    <li>
      <Badge
        imgSRC={assigneeProfileImg}
        alt={`${assignee}프로필`}
        styles="small"
      />
      {assingnee}
    </li>
  );
}
