import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Text } from '@/components/common/Text';
import CHECK_OFF_CIRCLE from '@/assets/Icons/checkOffCircle.svg';

type MilestoneSideBarDetailListItemProps = {
  name: string;
};

const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 16px;
`;
export function MilestoneSideBarDetailListItem({
  name,
}: MilestoneSideBarDetailListItemProps) {
  return (
    <StyledListItem>
      <Text text={name} styles="width: 150px" />
      <CHECK_OFF_CIRCLE />
    </StyledListItem>
  );
}
