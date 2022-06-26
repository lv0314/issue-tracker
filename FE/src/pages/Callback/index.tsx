import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export function Callback() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  // TODO: 토큰 쿠키에저장
  useEffect(() => {
    fetch(`http://15.164.230.46:8080/login/oauth/github?code=${code}`)
      .then(data => data.json())
      .then(() => navigate('/issueList'));
  }, []);

  return <S.Callback />;
}
