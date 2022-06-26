import { Text } from '@/components/common/Text';

type IssueMilestoneTextProps = {
  IssueMilestone: string;
};

export function IssueMilestoneText({
  IssueMilestone,
}: IssueMilestoneTextProps) {
  return <Text text={`${IssueMilestone}`} color="label" />;
}
