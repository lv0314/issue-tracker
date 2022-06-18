import * as S from './style';

type LogoProps = {
  src: string;
} & S.StyledLogoProps;

// TODO: Logo a태그 사용할것 건가?
export function Logo({ size, src }: LogoProps) {
  return (
    <S.Logo href="/" size={size}>
      <img src={src} alt={src} />
    </S.Logo>
  );
}
