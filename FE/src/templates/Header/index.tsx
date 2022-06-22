import * as S from './style';
import ISSUETRACKER_IMG from '@/assets/LogoIMG.svg';
import { Logo } from '@/components/common/Logo';
import { Badge } from '@/components/common/Badge';

export function Header() {
  return (
    <S.Header>
      <Logo src={ISSUETRACKER_IMG} size="medium" />
      <Badge imgSRC={ISSUETRACKER_IMG} alt="profile image" />
    </S.Header>
  );
}
