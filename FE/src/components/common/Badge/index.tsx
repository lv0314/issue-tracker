import * as S from './style';

type BadgeProps = {
  imgSRC: string;
  alt: string;
} & S.BadgeStyledProps;

export function Badge({ imgSRC, alt, styles }: BadgeProps) {
  return (
    <S.Badge styles={styles}>
      <img src={imgSRC} alt={alt} />
    </S.Badge>
  );
}
