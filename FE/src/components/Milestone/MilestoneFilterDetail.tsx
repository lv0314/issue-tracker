import styled from 'styled-components';
import { Icon } from '../common/Icon';
import { Text } from '../common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import { ListModal } from '../common/ListModal';
import { MilestoneFilterItem } from './MilestoneFilterItem';

type MilestoneFilterDetailFilterDetailProps = {
  milestoneList: string[];
};

const SortDetail = styled.details`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 80px;
  }
`;

export function MilestoneFilterDetail({
  milestoneList,
}: MilestoneFilterDetailFilterDetailProps) {
  return (
    <SortDetail>
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
    </SortDetail>
  );
}
