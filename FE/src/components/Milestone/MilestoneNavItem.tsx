import styled from 'styled-components';
import { Text } from '../common/Text';
import MILESTONE_ICON from '@/assets/Icons/milestone.svg';

export const NavItemWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  gap: 10px;
  padding: 6px 32.5px;
  border-right: 1px solid ${({ theme }) => theme.color.line};
`;

type MilestoneNavItemProps = {
  milestoneLength: number;
};

export function MilestonNavItem({ milestoneLength }: MilestoneNavItemProps) {
  return (
    <NavItemWrapper href="/milestone">
      <MILESTONE_ICON />
      <Text text="마일스톤" color="label" fontSize="base" fontWeight="bold" />
      <Text text={`(${milestoneLength})`} color="label" fontSize="base" />
    </NavItemWrapper>
  );
}
