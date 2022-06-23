import { Button } from '@/components/common/Button';
import * as S from './style';

export function LoginSection() {
  const onClickGitHubLogin = () => {
    window.location.href = `${process.env.GITHUB_OAUTH_AUTHORIZATION_URL}${process.env.BACK_CLIENT_ID}`;
  };

  return (
    <S.Layout>
      <Button
        size="large"
        color="titleArchieve"
        fontSize="large"
        onClick={onClickGitHubLogin}
      >
        Github 계정으로 로그인
      </Button>
      <Button size="large" color="error" fontSize="large">
        Google 계정으로 로그인
      </Button>
      <Button size="large" color="success" fontSize="large">
        Naver 계정으로 로그인
      </Button>
    </S.Layout>
  );
}
