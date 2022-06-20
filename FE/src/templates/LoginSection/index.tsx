import { Button } from '@/components/common/Button';
import * as S from './style';

// TODO: .env로 이동
const GITHUB_CLIENT_ID = 'e491cb1179a89880960b';
const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=read:user user:email`;

export function LoginSection() {
  const onClickGitHubLogin = () => {
    window.location.href = GITHUB_LOGIN_URL;
  };

  return (
    <S.Layout>
      <Button
        size="large"
        color="titleArchieve"
        fontSize="large"
        // eslint-disable-next-line react/jsx-no-bind
        onClick={onClickGitHubLogin}
      >
        Github 계정으로 로그인
      </Button>
      <Button
        size="large"
        color="error"
        fontSize="large"
        // eslint-disable-next-line react/jsx-no-bind
      >
        Google 계정으로 로그인
      </Button>
      <Button
        size="large"
        color="success"
        fontSize="large"
        // eslint-disable-next-line react/jsx-no-bind
      >
        Naver 계정으로 로그인
      </Button>
    </S.Layout>
  );
}
