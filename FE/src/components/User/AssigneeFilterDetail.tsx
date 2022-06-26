import styled from 'styled-components';
import { Icon } from '../common/Icon';
import { Text } from '../common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import { ListModal } from '../common/ListModal';
import { AssigneeFilterItem } from './AssigneeFilterItem';

type AssigneeFilterDetailProps = {
  userData: { name: string; imgUrl?: string }[];
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

export function AssigneeFilterDetail({ userData }: AssigneeFilterDetailProps) {
  return (
    <SortDetail>
      <summary>
        <Text text="담당자" fontWeight="bold" color="label" />
        <Icon iconName={UNDER_ARROW} iconSize="base" />
      </summary>
      <ListModal listTitle="담당자 필터">
        {userData.map(({ name, imgUrl }) => (
          <AssigneeFilterItem name={name} key={`${name}${Date.now()}`} />
        ))}
      </ListModal>
    </SortDetail>
  );
}
