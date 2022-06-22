import { Text } from '@/components/common/Text';

type IssueNumberTextProps = {
  IssueNumber: string;
};

export function IssueNumberText({ IssueNumber }: IssueNumberTextProps) {
  return <Text text={`#${IssueNumber}`} color="label" />;
}
