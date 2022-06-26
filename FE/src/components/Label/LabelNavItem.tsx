import styled from 'styled-components';
import { Text } from '../common/Text';
import LABEL_ICON from '@/assets/Icons/tag.svg';

export const NavItemWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  gap: 10px;
  padding: 6px 32.5px;
  border-right: 1px solid ${({ theme }) => theme.color.line};
`;

type LabelNavItemProps = {
  labelLength: number;
};

export function LabelNavItem({ labelLength }: LabelNavItemProps) {
  return (
    <NavItemWrapper href="/label">
      <LABEL_ICON />
      <Text text="레이블" color="label" fontSize="base" fontWeight="bold" />
      <Text text={`(${labelLength})`} color="label" fontSize="base" />
    </NavItemWrapper>
  );
}
