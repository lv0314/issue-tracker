import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './style';
import { assigneeList } from '@/recoil/atoms/assigneeData';
import { labelData as LabelData } from '@/recoil/atoms/LabelData';
import { Text } from '@/components/common/Text';
import { ListModal } from '@/components/common/ListModal';
import { AssigneeListItem } from '@/components/User/AssigneeListItem';
import { LabelListItem } from '@/components/Label/LabelListItem';

export function AddIssueSideBar() {
  const assigneeData = useRecoilValue(assigneeList);
  const labelData = useRecoilValue(LabelData);
  // const issueLabelist = useRecoilValue();
  // const issueMilestoneList = useRecoilValue();
  // const [assigneeDetailSummary, setAssigneeDeatilSummary] = useState(null);
  // const [labelDetailSummary, setLabelDetailSummary] = useState(null);
  // const [MilestoneDetailSummary, setMilestoneDeatilSummary] = useState(null);

  const sideBarAssigneeList = assigneeData
    ? assigneeData.map(({ name, profileImage }) => (
        <AssigneeListItem assignee={name} assigneeProfileImg={profileImage} />
      ))
    : null;

  const sideBarLabelList = labelData
    ? labelData.map(({ color, name }) => (
        <LabelListItem color={color} name={name} />
      ))
    : null;

  return (
    <S.OptionSideBar>
      <S.OptionDetail>
        <summary>
          <Text text="담당자" />
          <Text text="아이콘" />
        </summary>
        <ListModal listTitle="담당자 추가">{sideBarAssigneeList}</ListModal>
      </S.OptionDetail>

      <S.OptionDetail>
        <summary>
          <Text text="레이블" />
          <Text text="아이콘" />
        </summary>
        <ListModal listTitle="라벨 추가">{sideBarLabelList}</ListModal>
      </S.OptionDetail>

      <S.OptionDetail>
        <summary>
          <Text text="마일스톤" />
          <Text text="아이콘" />
        </summary>
      </S.OptionDetail>
    </S.OptionSideBar>
  );
}
