import * as S from './style';

type IconProps = {
  iconName: string;
} & S.IconStyledProps;

export function Icon({ iconName, iconSize, styles }: IconProps) {
  return (
    <S.Icon iconSize={iconSize} styles={styles}>
      <img src={iconName} alt={iconName} />
    </S.Icon>
  );
}
