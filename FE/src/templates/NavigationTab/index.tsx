import * as S from './style';
import { Text } from '@/components/common/Text';
import { LabelNavItem } from '@/components/Label/LabelNavItem';
import { MilestonNavItem } from '@/components/Milestone/MilestoneNavItem';
import { Button } from '@/components/common/Button';

export function NavigationTab() {
  return (
    <S.Layout>
      <S.NavigationTab>
        <LabelNavItem labelLength={5} />
        <MilestonNavItem milestoneLength={99} />
      </S.NavigationTab>
      <a href="/issueAdd">
        <Button size="small" color="primary" fontSize="base">
          이슈 작성
        </Button>
      </a>
    </S.Layout>
  );
}
