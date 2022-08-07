import {
  useResetRecoilState,
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
} from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { addIssue } from '@/recoil/atoms/addIssue';
import { getIssue } from '@/recoil/selectors/getIssue';
import { Button } from '@/components/common/Button';

export function AddIssueSubmit() {
  const resetAddIssue = useResetRecoilState(addIssue);
  const refreshWholeIssue = useRecoilRefresher_UNSTABLE(getIssue);
  const addIssueState = useRecoilValue(addIssue);
  const navigate = useNavigate();

  const handleIssueSubmit = () => {
    fetch('/newIssue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addIssueState),
    });

    refreshWholeIssue();
    console.log(addIssueState);
    resetAddIssue();
    navigate('/IssueList/open');
  };

  return (
    <S.AddIssueSubmit>
      <S.CancelButton>작성 취소</S.CancelButton>
      <Button
        color="primary"
        size="medium"
        fontSize="large"
        onClick={handleIssueSubmit}
      >
        완료
      </Button>
    </S.AddIssueSubmit>
  );
}
