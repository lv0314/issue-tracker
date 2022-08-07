import { Suspense } from 'react';
import { AddLabel } from '@/templates/AddLabel';
import { Header } from '@/templates/Header';
import { LabelList } from '@/templates/LabelList';
import { LabelsHeader } from '@/templates/LabelsHeader';
import * as S from './style';

export function LabelsPage() {
  return (
    <S.Labels>
      <Header />
      <Suspense>
        <LabelsHeader />
        <AddLabel />

        <LabelList />
      </Suspense>
    </S.Labels>
  );
}
