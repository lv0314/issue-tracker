import * as S from './style';
import { Button } from '@/components/common/Button';

const GITHUB_CLIENT_ID = 'e491cb1179a89880960b';
const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=read:user user:email`;

export function Login() {
  function clickHandler() {
    window.location.href = GITHUB_LOGIN_URL;
  }

  return (
    <S.LoginLayOut>
      <Button
        size="large"
        color="black"
        fontSize="large"
        // eslint-disable-next-line react/jsx-no-bind
        onClick={clickHandler}
      >
        Github 계정으로 로그인
      </Button>
      <Button size="large" color="blue" fontSize="large">
        아이디 로그인
      </Button>
    </S.LoginLayOut>
  );
}
