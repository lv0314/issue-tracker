import { Badge } from '@/components/common/Badge';
import * as S from './style';
import { Text } from '@/components/common/Text';

export function AddIssueWrite() {
  return (
    <S.AddIssueWrite>
      <Badge
        imgSRC="https://ca.slack-edge.com/T74H5245A-U02RA7K501L-3c55992367ca-512"
        alt="profile image"
      />
      <S.IssueType>
        <S.IssueTypeTitle placeholder="제목" />
        <S.IssueTypeContents>
          <S.IssueTextArea placeholder="코멘트를 입력하세요" />
          <S.AttachFile>
            <S.AttachFileLabel>
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
  );
}
