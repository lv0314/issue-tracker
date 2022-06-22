import * as S from './style';

type TextProps = {
  text: string | number;
} & S.TextStyledProps;

// TODO: Text 컴포넌트 조금 더 유연하게
export function Text({ text, color, fontSize, fontWeight, styles }: TextProps) {
  return (
    <S.Text
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      styles={styles}
    >
      {text}
    </S.Text>
  );
}
