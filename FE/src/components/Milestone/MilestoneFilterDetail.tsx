import { Text } from '../common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import { ListModal } from '../common/ListModal';
import { MilestoneFilterItem } from './MilestoneFilterItem';
import { SortDetails } from '../common/SortDetails';

type MilestoneFilterDetailFilterDetailProps = {
  milestoneList: string[];
};

export function MilestoneFilterDetail({
  milestoneList,
}: MilestoneFilterDetailFilterDetailProps) {
  return (
    <SortDetails>
      <summary>
        <Text text="마일스톤" fontWeight="bold" color="label" />
        <UNDER_ARROW />
      </summary>
      <ListModal listTitle="마일스톤 필터">
        {milestoneList.map(milestoneTitle => (
          <MilestoneFilterItem
            milestoneTitle={milestoneTitle}
            key={`${milestoneTitle}${Date.now()}`}
          />
        ))}
      </ListModal>
    </SortDetails>
  );
}
