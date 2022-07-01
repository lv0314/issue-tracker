import { useRecoilValue } from 'recoil';
import {
  ListTable,
  ListTableHeader,
  ListTableItems,
} from '@/components/common/ListTable';
import { Text } from '@/components/common/Text';
import { getLabels } from '@/recoil/selectors/getLabels';
import { LabelItem, LabelItemProps } from '@/components/Label/LabelItem';

export function LabelList() {
  const { labels } = useRecoilValue(getLabels);
  const labelsItems = labels.map((label: LabelItemProps) => (
    <LabelItem
      name={label.name}
      description={label.description}
      color={label.color}
      textColor={label.textColor}
      key={`${label.name}${Date.now()}`}
    />
  ));

  return (
    <ListTable>
      <ListTableHeader>
        <Text
          text={`${labels.length}개의 레이블`}
          color="label"
          fontWeight="bold"
        />
      </ListTableHeader>
      <ListTableItems>{labelsItems}</ListTableItems>
    </ListTable>
  );
}
