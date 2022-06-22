import { Text } from '@/components/common/Text';

type IssueTitleTextProps = {
  IssueTitle: string;
};

export function IssueTitleText({ IssueTitle }: IssueTitleTextProps) {
  return (
    <Text
      text={`${IssueTitle}`}
      fontSize="large"
      fontWeight="bold"
      color="titleArchieve"
    />
  );
}
