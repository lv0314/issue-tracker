import { useRecoilValue } from 'recoil';
import * as S from './style';
import { LabelNavItem } from '@/components/Label/LabelNavItem';
import { MilestonNavItem } from '@/components/Milestone/MilestoneNavItem';
import { getLabels } from '@/recoil/selectors/getLabels';
import { getMilestones } from '@/recoil/selectors/getMilestones';

export function NavigationTab() {
  const { labels } = useRecoilValue(getLabels);
  const { milestones } = useRecoilValue(getMilestones);

  return (
    <S.NavigationTab>
      <LabelNavItem labelLength={labels.length} />
      <MilestonNavItem milestoneLength={milestones.length} />
    </S.NavigationTab>
  );
}
