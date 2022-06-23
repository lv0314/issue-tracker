import React from 'react';
import * as S from './style';

type ChildrenProps = {
  children: React.ReactNode;
};

export function ListTable({ children }: ChildrenProps) {
  return <S.ListTable>{children}</S.ListTable>;
}

export function ListTableHeader({ children }: ChildrenProps) {
  return <S.ListTableHeader>{children}</S.ListTableHeader>;
}

export function ListTableItems({ children }: ChildrenProps) {
  return <S.ListTableItems>{children}</S.ListTableItems>;
}
