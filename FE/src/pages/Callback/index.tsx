import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export function Callback() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  // 백엔드에 보내고 access token발급 받아서 로그인이 된 걸 확인하면 issueList 페이지로 리다이렉트
  useEffect(() => {
    setTimeout(() => {
      navigate('/issueList');
    }, 2000);
  }, []);

  return <S.Callback />;
}
