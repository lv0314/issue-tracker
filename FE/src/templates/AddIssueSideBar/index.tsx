import * as S from './style';
import { Text } from '@/components/common/Text';

export function AddIssueSideBar() {
  return (
    <S.OptionSideBar>
      <S.OptionDetail>
        <summary>
          <Text text="담당자" />
          <Text text="아이콘" />
        </summary>
        <S.OptionMenu>
          <S.OptionHeader>담당자 추가</S.OptionHeader>
          <S.OptionList>
            <S.OptionItem>테스트</S.OptionItem>
            <S.OptionItem>테스트</S.OptionItem>
            <S.OptionItem>테스트</S.OptionItem>
            <S.OptionItem>테스트</S.OptionItem>
          </S.OptionList>
        </S.OptionMenu>
      </S.OptionDetail>
      <S.OptionDetail>
        <summary>
          <Text text="담당자" />
          <Text text="아이콘" />
        </summary>
      </S.OptionDetail>
      <S.OptionDetail>
        <summary>
          <Text text="담당자" />
          <Text text="아이콘" />
        </summary>
      </S.OptionDetail>
    </S.OptionSideBar>
  );
}
