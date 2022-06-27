import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './style';
import { assigneeList } from '@/recoil/atoms/addIssueAssigneeList';
import { Text } from '@/components/common/Text';
import { AssigneeListItem } from '@/components/User/AssigneeListItem';

export function AddIssueSideBar() {
  const issueAssigneeList = useRecoilValue(assigneeList);
  // const issueLabelist = useRecoilValue();
  // const issueMilestoneList = useRecoilValue();
  // const [assigneeDetailSummary, setAssigneeDeatilSummary] = useState(null);
  // const [labelDetailSummary, setLabelDetailSummary] = useState(null);
  // const [MilestoneDetailSummary, setMilestoneDeatilSummary] = useState(null);

  const sideBarAssigneeList = issueAssigneeList
    ? issueAssigneeList.map(({ name, profileImage }) => (
        <AssigneeListItem assignee={name} assigneeProfileImg={profileImage} />
      ))
    : null;

  return (
    <S.OptionSideBar>
      <S.OptionDetail>
        <summary>
          <Text text="담당자" />
          <Text text="아이콘" />
        </summary>
        <S.OptionMenu>
          <S.OptionHeader>담당자 추가</S.OptionHeader>
          <S.OptionList>{sideBarAssigneeList}</S.OptionList>
        </S.OptionMenu>
      </S.OptionDetail>
      <S.OptionDetail>
        <summary>
          <Text text="담당자" />
          <Text text="아이콘" />
        </summary>
      </S.OptionDetail>
      <S.OptionDetail>
        <summary>
          <Text text="담당자" />
          <Text text="아이콘" />
        </summary>
      </S.OptionDetail>
    </S.OptionSideBar>
  );
}
