import * as S from './style';
import { Text } from '@/components/common/Text';
import { LabelNavItem } from '@/components/Label/LabelNavItem';
import { MilestonNavItem } from '@/components/Milestone/MilestoneNavItem';

export function NavigationTab() {
  return (
    <S.LayOut>
      <LabelNavItem labelLength={5} />
      <MilestonNavItem milestoneLength={99} />
    </S.LayOut>
  );
}
