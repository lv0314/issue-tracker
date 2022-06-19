import * as S from './style';
import { Text } from '@/components/common/Text';

export function NavigationTab() {
  return (
    <S.LayOut>
      <S.NavigationItem>
        <Text text="이미지" color="placeholder" fontSize="small" />
        <Text text="레이블" color="placeholder" fontSize="small" />
        <Text text="(2)" color="placeholder" fontSize="small" />
      </S.NavigationItem>
      <S.NavigationItem>
        <Text text="이미지" color="placeholder" fontSize="small" />
        <Text text="레이블" color="placeholder" fontSize="small" />
        <Text text="(2)" color="placeholder" fontSize="small" />
      </S.NavigationItem>
    </S.LayOut>
  );
}
