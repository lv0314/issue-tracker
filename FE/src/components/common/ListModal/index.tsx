import * as S from './style';
import { Text } from '@/components/common/Text';

type ListModalProps = {
  listTitle: string;
  children: React.ReactNode;
};

// TODO:데이터를 받아서 title 부분과, map 돌려서 ListItem 생성
export function ListModal({ listTitle, children }: ListModalProps) {
  return (
    <S.ListModal>
      <S.ListTitle>
        <Text text={`${listTitle}`} fontSize="large" />
      </S.ListTitle>
      {children}
    </S.ListModal>
  );
}
