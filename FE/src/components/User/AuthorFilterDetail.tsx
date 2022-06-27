import { Text } from '../common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import { ListModal } from '../common/ListModal';
import { AssigneeFilterItem } from './AssigneeFilterItem';
import { SortDetails } from '../common/SortDetails';

type AuthorFilterDetailProps = {
  userData: { name: string; imgUrl?: string }[];
};

export function AuthorFilterDetail({ userData }: AuthorFilterDetailProps) {
  return (
    <SortDetails>
      <summary>
        <Text text="작성자" fontWeight="bold" color="label" />
        <UNDER_ARROW />
      </summary>
      <ListModal listTitle="작성자 필터">
        {userData.map(({ name, imgUrl }) => (
          <AssigneeFilterItem name={name} key={`${name}${Date.now()}`} />
        ))}
      </ListModal>
    </SortDetails>
  );
}
