import { Button } from '@/components/common/Button';
import { NavigationTab } from '../NavigationTab';
import * as S from './style';

export function LabelsHeader() {
  return (
    <S.LabelsHeader>
      <NavigationTab />
      <Button size="small" color="primary" fontSize="base">
        추가
      </Button>
    </S.LabelsHeader>
  );
}
