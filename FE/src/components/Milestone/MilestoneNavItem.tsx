import styled from 'styled-components';
import { Text } from '../common/Text';

export const NavItemWrapper = styled.a`
  display: flex;
  justify-content: center;
  width: 200px;
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
      <Text text="아이콘" color="placeholder" fontSize="small" />
      <Text text="마일스톤" color="placeholder" fontSize="small" />
      <Text text={`${milestoneLength}`} color="placeholder" fontSize="small" />
    </NavItemWrapper>
  );
}
