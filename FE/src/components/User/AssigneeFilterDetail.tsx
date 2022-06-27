import { Text } from '../common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import { ListModal } from '../common/ListModal';
import { AssigneeFilterItem } from './AssigneeFilterItem';
import { SortDetails } from '../common/SortDetails';

type AssigneeFilterDetailProps = {
  userData: { name: string; imgUrl?: string }[];
};

export function AssigneeFilterDetail({ userData }: AssigneeFilterDetailProps) {
  return (
    <SortDetails>
      <summary>
        <Text text="담당자" fontWeight="bold" color="label" />
        <UNDER_ARROW />
      </summary>
      <ListModal listTitle="담당자 필터">
        {userData.map(({ name, imgUrl }) => (
          <AssigneeFilterItem name={name} key={`${name}${Date.now()}`} />
        ))}
      </ListModal>
    </SortDetails>
  );
}
