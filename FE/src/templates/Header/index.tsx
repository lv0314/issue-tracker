import * as S from './style';
import ISSUETRACKER_IMG from '@/assets/LogoIMG.svg';
import { Logo } from '@/components/common/Logo';
import { Badge } from '@/components/common/Badge';

export function Header() {
  return (
    <S.Header>
      <Logo src={ISSUETRACKER_IMG} size="medium" />
      <Badge
        imgSRC="https://ca.slack-edge.com/T74H5245A-U02RA7K501L-3c55992367ca-512"
        alt="profile image"
      />
    </S.Header>
  );
}
