import * as S from './style';
import ISSUETRACKER_IMG from '@/assets/LogoIMG.svg';
import { Logo } from '@/components/common/Logo';
import { LoginSection } from '@/templates/LoginSection';

export function LoginPage() {
  return (
    <S.LoginLayOut>
      <Logo size="large" src={ISSUETRACKER_IMG} />
      <LoginSection />
    </S.LoginLayOut>
  );
}
