import { useRecoilState } from 'recoil';
import { useDeferredValue, useMemo } from 'react';
import { Badge } from '@/components/common/Badge';
import * as S from './style';
import { Text } from '@/components/common/Text';
import PAPERCLIP_ICON from '@/assets/Icons/paperclip.svg';
import { addIssue } from '@/recoil/atoms/addIssue';

export function AddIssueWrite() {
  const [issueWrite, setIssueWrite] = useRecoilState(addIssue);
  const deferredIssueData = useDeferredValue(issueWrite);

  const handleIssueWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;

    setIssueWrite({ ...deferredIssueData, issueTitle: newTitle });
  };
  const deferedIssueWrite = useMemo(
    () => (
      <S.AddIssueWrite>
        <Badge
          imgSRC="https://ca.slack-edge.com/T74H5245A-U02RA7K501L-3c55992367ca-512"
          alt="profile image"
        />
        <S.IssueType>
          <S.IssueTypeTitle placeholder="제목" onChange={handleIssueWrite} />
          <S.IssueTypeContents>
            <S.IssueTextArea placeholder="코멘트를 입력하세요" />
            <S.AttachFile>
              <S.AttachFileLabel>
                <PAPERCLIP_ICON />
                <input type="file" />
              </S.AttachFileLabel>
              <Text
                text="파일 첨부하기"
                fontSize="smaller"
                color="label"
                fontWeight="bold"
              />
            </S.AttachFile>
          </S.IssueTypeContents>
        </S.IssueType>
      </S.AddIssueWrite>
    ),
    [deferredIssueData],
  );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{deferedIssueWrite}</>;
}
