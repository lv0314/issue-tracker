import styled from 'styled-components';
import { Text } from '@/components/common/Text';
import CHECK_OFF_CIRCLE from '@/assets/Icons/checkOffCircle.svg';

type LabelListItemProps = {
  color: string;
  name: string;
};

const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
`;

const LabelColorBadge = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export function LabelListItem({ color, name }: LabelListItemProps) {
  return (
    <StyledListItem>
      <LabelColorBadge color={color} />
      <Text text={name} styles="width: 100px" />
      <CHECK_OFF_CIRCLE />
    </StyledListItem>
  );
}
