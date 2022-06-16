import * as S from './style';
import { Button } from '@/components/common/Button';

export function Login() {
  return (
    <S.LoginLayOut>
      <Button
        text="Github 계정으로 로그인"
        size="large"
        color="black"
        fontSize="large"
      />
      <Button
        text="아이디로 로그인"
        size="large"
        color="blue"
        fontSize="large"
      />
    </S.LoginLayOut>
  );
}
