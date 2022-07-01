import { Link } from 'react-router-dom';
import * as S from './style';
import { Button } from '@/components/common/Button';
import { NavigationTab } from '../NavigationTab';

export function IssueListNavigationTab() {
  return (
    <S.Layout>
      <NavigationTab />
      <Link to="/issueAdd">
        <Button size="small" color="primary" fontSize="base">
          이슈 작성
        </Button>
      </Link>
    </S.Layout>
  );
}
