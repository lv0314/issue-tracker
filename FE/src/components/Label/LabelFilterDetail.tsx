import styled from 'styled-components';
import { Icon } from '../common/Icon';
import { Text } from '../common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import { ListModal } from '../common/ListModal';
import { LabelFitlerItem } from './LabelFilterItem';

type LabelFilterDetailProps = {
  labelData: { name: string; color?: string }[];
};

const SortDetail = styled.details`
  display: flex;
  justify-content: space-between;
  align-items: center;

  summary {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 80px;
  }
`;

export function LabelFilterDetail({ labelData }: LabelFilterDetailProps) {
  return (
    <SortDetail>
      <summary>
        <Text text="레이블" fontWeight="bold" color="label" />
        <Icon iconName={UNDER_ARROW} iconSize="base" />
      </summary>
      <ListModal listTitle="라벨 필터">
        {labelData.map(({ name, color }) => (
          <LabelFitlerItem contents={name} key={`${name}${Date.now()}`} />
        ))}
      </ListModal>
    </SortDetail>
  );
}
