import { Text } from '@/components/common/Text';

type OpenIssueTextProps = {
  openIssueCount: number;
};

export function OpenIssueText({ openIssueCount }: OpenIssueTextProps) {
  return (
    <Text
      text={`열린 이슈(${openIssueCount})`}
      fontWeight="bold"
      color="titleArchieve"
    />
  );
}
