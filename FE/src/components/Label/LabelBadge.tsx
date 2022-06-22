import styled from 'styled-components';
import { Text } from '@/components/common/Text';

type LabelBadgeProps = {
  name: string;
  color: string;
  // textColor: 'white' | 'black';
};

const BadgeWrapper = styled.div`
  padding: 4px 16px;
  border-radius: 30px;
`;

export function LabelBadge({
  name,
  color = 'blue',
}: // textColor,
LabelBadgeProps) {
  return (
    <BadgeWrapper>
      <Text text={name} />
    </BadgeWrapper>
  );
}
