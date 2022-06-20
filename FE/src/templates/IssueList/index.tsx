import { Icon } from '@/components/common/Icon';
import { Text } from '@/components/common/Text';
import UNDER_ARROW from '@/assets/UnderArrow.svg';
import ISSUETRACKER_IMG from '@/assets/LogoIMG.svg';

import * as S from './style';
import { Badge } from '@/components/common/Badge';

export function IssueList() {
  return (
    <S.IssueList>
      <S.IssueListHeader>
        <S.IssueHeaderLeft>
          <input type="checkbox" />
          <Text text="열린 이슈(2)" fontWeight="bold" color="titleArchieve" />
          <Text text="닫힌 이슈(0)" color="label" />
        </S.IssueHeaderLeft>
        <S.IssueHeaderRight>
          <S.SortDetail>
            <summary>
              <Text text="담당자" fontWeight="bold" color="label" />
              <Icon iconName={UNDER_ARROW} iconSize="base" />
            </summary>
          </S.SortDetail>
          <S.SortDetail>
            <summary>
              <Text text="레이블" fontWeight="bold" color="label" />
              <Icon iconName={UNDER_ARROW} iconSize="base" />
            </summary>
          </S.SortDetail>
          <S.SortDetail>
            <summary>
              <Text text="마일스톤" fontWeight="bold" color="label" />
              <Icon iconName={UNDER_ARROW} iconSize="base" />
            </summary>
          </S.SortDetail>
          <S.SortDetail>
            <summary>
              <Text text="작성자" fontWeight="bold" color="label" />
              <Icon iconName={UNDER_ARROW} iconSize="base" />
            </summary>
          </S.SortDetail>
        </S.IssueHeaderRight>
      </S.IssueListHeader>
      <S.IssueItems>
        <S.Issue>
          <S.IssueLeft>
            <input type="checkbox" />
            <S.IssueInfo>
              <S.IssueTitle>
                <Text
                  text="이슈 제목"
                  fontSize="large"
                  fontWeight="bold"
                  color="titleArchieve"
                />
              </S.IssueTitle>
              <S.IssueDescription>
                <Text text="#이슈번호" color="label" />
                <Text text="작성자 및 타임스탬프 정보" color="label" />
                <Text text="마일스톤" color="label" />
              </S.IssueDescription>
            </S.IssueInfo>
          </S.IssueLeft>
          <S.IssueRight>
            <S.IconField>
              <Badge imgSRC={ISSUETRACKER_IMG} alt="profile image" />
            </S.IconField>
            <S.IconField>
              <Badge imgSRC={ISSUETRACKER_IMG} alt="profile image" />
            </S.IconField>
            <S.IconField>
              <Badge imgSRC={ISSUETRACKER_IMG} alt="profile image" />
            </S.IconField>
            <S.IconField>
              <Badge imgSRC={ISSUETRACKER_IMG} alt="profile image" />
            </S.IconField>
            {/* 담당자
          레이블
          마일스톤
          작성자 */}
          </S.IssueRight>
        </S.Issue>
      </S.IssueItems>
    </S.IssueList>
  );
}
