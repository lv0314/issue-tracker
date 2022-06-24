import * as S from './style';

export function Button({
  size,
  color,
  fontSize,
  children,
  onClick,
  disabled,
}: S.StyledButtonProps) {
  return (
    <S.Button
      size={size}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
}
