import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import * as S from './style';
import { assigneeList } from '@/recoil/atoms/assigneeData';
// import { labelData as LabelData } from '@/recoil/atoms/LabelData';
import { milestoneData as MilestoneData } from '@/recoil/atoms/MilestoneData';
import { Text } from '@/components/common/Text';
import { ListModal } from '@/components/common/ListModal';
import { AssigneeListItem } from '@/components/User/AssigneeListItem';
import { LabelListItem } from '@/components/Label/LabelListItem';
import { MilestoneSideBarDetailListItem } from '@/components/Milestone/MilestoneSideBarDetailListItem';
import { addIssue } from '@/recoil/atoms/addIssue';
import { SideBarAssigneeItem } from '@/components/User/SideBarAssigneeItem';
import PLUS_IMOG from '@/assets/Icons/plus.svg';
import { getLabels } from '@/recoil/selectors/getLabels';
import { LabelItemProps } from '@/components/Label/LabelItem';

type AssigneeHandler = React.MouseEvent<HTMLElement>;

export function AddIssueSideBar() {
  const assigneeData = useRecoilValue(assigneeList);
  const { labels } = useRecoilValue(getLabels);
  const milestoneData = useRecoilValue(MilestoneData);
  const [assigneeDetailSummary, setAssigneeDeatilSummary] = useState<
    {
      name: string;
      profileImage: string;
    }[]
  >([]);
  const [issueState, setIssueState] = useRecoilState(addIssue);

  const handleAssigneeDetails = (e: AssigneeHandler) => {
    const clickedAssigneeName = (e.currentTarget as HTMLElement).dataset.id;

    if (assigneeDetailSummary.find(data => data.name === clickedAssigneeName)) {
      const newAssigneeDetailSummary = assigneeDetailSummary.filter(
        assignee => assignee.name !== clickedAssigneeName,
      );
      setIssueState({ ...issueState, assignee: newAssigneeDetailSummary });
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
    setIssueState({
      ...issueState,
      assignee: [...issueState.assignee, targetAssignee],
    });
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

  const sideBarLabelList = labels
    ? labels.map(({ color, name }: LabelItemProps) => (
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
          {sideBarAssigneeSummaryList}
        </summary>
        <ListModal listTitle="담당자 추가" rightGap="10%">
          {sideBarAssigneeList}
        </ListModal>
      </S.OptionDetail>

      <S.OptionDetail>
        <summary>
          <S.titleSummary>
            <Text text="레이블" />
            <PLUS_IMOG />
          </S.titleSummary>
        </summary>
        <ListModal listTitle="라벨 추가" rightGap="10%">
          {sideBarLabelList}
        </ListModal>
      </S.OptionDetail>

      <S.OptionDetail>
        <summary>
          <S.titleSummary>
            <Text text="마일스톤" />
            <PLUS_IMOG />
          </S.titleSummary>
        </summary>
        <ListModal listTitle="마일스톤 추가" rightGap="10%">
          {sideBarMilestoneList}
        </ListModal>
      </S.OptionDetail>
    </S.OptionSideBar>
  );
}
