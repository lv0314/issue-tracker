import styled from 'styled-components';
import { Icon } from '../common/Icon';
import { Text } from '../common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import { ListModal } from '../common/ListModal';
import { AssigneeFilterItem } from './AssigneeFilterItem';

type AuthorFilterDetailProps = {
  userData: { name: string; imgUrl?: string }[];
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

export function AuthorFilterDetail({ userData }: AuthorFilterDetailProps) {
  return (
    <SortDetail>
      <summary>
        <Text text="작성자" fontWeight="bold" color="label" />
        <UNDER_ARROW />
      </summary>
      <ListModal listTitle="작성자 필터">
        {userData.map(({ name, imgUrl }) => (
          <AssigneeFilterItem name={name} key={`${name}${Date.now()}`} />
        ))}
      </ListModal>
    </SortDetail>
  );
}
