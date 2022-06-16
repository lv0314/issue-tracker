import * as S from './style';

type ButtonProps = {
  text: string;
} & S.StyledButtonProps;

export function Button({ text, size, color, fontSize }: ButtonProps) {
  return (
    <S.Button size={size} color={color} fontSize={fontSize}>
      {text}
    </S.Button>
  );
}
