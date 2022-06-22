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

type LabelNavItemProps = {
  labelLength: number;
};

export function LabelNavItem({ labelLength }: LabelNavItemProps) {
  return (
    <NavItemWrapper href="/label">
      <Text text="아이콘" color="placeholder" fontSize="small" />
      <Text text="레이블" color="placeholder" fontSize="small" />
      <Text text={`${labelLength}`} color="placeholder" fontSize="small" />
    </NavItemWrapper>
  );
}
