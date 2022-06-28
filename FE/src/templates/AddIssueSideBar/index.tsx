import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './style';
import { assigneeList } from '@/recoil/atoms/assigneeData';
import { labelData as LabelData } from '@/recoil/atoms/LabelData';
import { milestoneData as MilestoneData } from '@/recoil/atoms/MilestoneData';
import { Text } from '@/components/common/Text';
import { ListModal } from '@/components/common/ListModal';
import { AssigneeListItem } from '@/components/User/AssigneeListItem';
import { LabelListItem } from '@/components/Label/LabelListItem';
import { MilestoneSideBarDetailListItem } from '@/components/Milestone/MilestoneSideBarDetailListItem';
import { SideBarAssigneeItem } from '@/components/User/SideBarAssigneeItem';
import PLUS_IMOG from '@/assets/Icons/plus.svg';

type AssigneeHandler = React.MouseEvent<HTMLElement>;

export function AddIssueSideBar() {
  const assigneeData = useRecoilValue(assigneeList);
  const labelData = useRecoilValue(LabelData);
  const milestoneData = useRecoilValue(MilestoneData);
  // const issueLabelist = useRecoilValue();
  // const issueMilestoneList = useRecoilValue();
  // const [assigneeDetailSummary, setAssigneeDeatilSummary] = useState(null);
  // const [labelDetailSummary, setLabelDetailSummary] = useState(null);
  const [assigneeDetailSummary, setAssigneeDeatilSummary] = useState<
    {
      name: string;
      profileImage: string;
    }[]
  >([]);
  // const [labelDetailSummary, setLabelDetailSummary] = useState();
  // const [MilestoneDetailSummary, setMilestoneDeatilSummary] = useState(null);

  const handleAssigneeDetails = (e: AssigneeHandler) => {
    const clickedAssigneeName = (e.currentTarget as HTMLElement).dataset.id;

    if (assigneeDetailSummary.find(data => data.name === clickedAssigneeName)) {
      const newAssigneeDetailSummary = assigneeDetailSummary.filter(
        assignee => assignee.name !== clickedAssigneeName,
      );

      setAssigneeDeatilSummary(newAssigneeDetailSummary);
      return;
    }
    const targetAssignee = assigneeData.find(
      data => data.name === clickedAssigneeName,
    );

    if (!targetAssignee) {
      return;
    }

    const newAssigneeDetailSummary = [...assigneeDetailSummary, targetAssignee];

    setAssigneeDeatilSummary(newAssigneeDetailSummary);
  };

  const sideBarAssigneeList = assigneeData
    ? assigneeData.map(({ name, profileImage }) => (
        <AssigneeListItem
          assignee={name}
          assigneeProfileImg={profileImage}
          onClick={handleAssigneeDetails}
          userId={name}
        />
      ))
    : null;

  const sideBarLabelList = labelData
    ? labelData.map(({ color, name }) => (
        <LabelListItem color={color} name={name} />
      ))
    : null;

  const sideBarMilestoneList = milestoneData
    ? milestoneData.map(({ title }) => (
        <MilestoneSideBarDetailListItem title={title} />
      ))
    : null;

  const sideBarAssigneeSummaryList = assigneeDetailSummary
    ? assigneeDetailSummary.map(({ name, profileImage }) => (
        <SideBarAssigneeItem name={name} profileImage={profileImage} />
      ))
    : null;
  return (
    <S.OptionSideBar>
      <S.OptionDetail>
        <summary>
          <S.titleSummary>
            <Text text="담당자" />
            <PLUS_IMOG />
          </S.titleSummary>
          <ul>{sideBarAssigneeSummaryList}</ul>
        </summary>
        <ListModal listTitle="담당자 추가" rightGap="10%">
          {sideBarAssigneeList}
        </ListModal>
      </S.OptionDetail>

      <S.OptionDetail>
        <summary>
          <Text text="레이블" />
          <Text text="아이콘" />
        </summary>
        <ListModal listTitle="라벨 추가" rightGap="10%">
          {sideBarLabelList}
        </ListModal>
      </S.OptionDetail>

      <S.OptionDetail>
        <summary>
          <Text text="마일스톤" />
          <Text text="아이콘" />
        </summary>
        <ListModal listTitle="마일스톤 추가" rightGap="10%">
          {sideBarMilestoneList}
        </ListModal>
      </S.OptionDetail>
    </S.OptionSideBar>
  );
}
