import * as S from './style';

type TextProps = {
  text: string | number;
} & S.TextStyledProps;

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
