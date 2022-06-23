import { Text } from '@/components/common/Text';

type CloseIssueTextProps = {
  closeIssueCount: number;
};

export function CloseIssueText({ closeIssueCount }: CloseIssueTextProps) {
  return <Text text={`닫힌 이슈(${closeIssueCount})`} color="titleArchieve" />;
}
