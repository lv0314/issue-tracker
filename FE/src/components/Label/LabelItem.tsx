//   <LabelItem
//     name={name}
//     description={description}
//     color={color}
//     textColor={textColor}
//   />

import styled from 'styled-components';
import { Text } from '../common/Text';
import { LabelBadge } from './LabelBadge';

export type LabelItemProps = {
  name: string;
  description: string;
  color: string;
  textColor: 'offwhite' | 'titleArchieve';
};

export const LabelItemLayout = styled.li`
  display: flex;
  padding: 24px 32px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  justify-content: space-between;
`;

const LabelField = styled.div`
  display: flex;
`;

const LabelBadgeWrapper = styled.div`
  min-width: 150px;
`;

const Operations = styled.div`
  display: flex;
  gap: 24px;
`;

export function LabelItem({
  name,
  description,
  color,
  textColor,
}: LabelItemProps) {
  return (
    <LabelItemLayout>
      <LabelField>
        <LabelBadgeWrapper>
          <LabelBadge
            name={name}
            backgroundColor={color}
            textColor={textColor}
          />
        </LabelBadgeWrapper>
        <Text text={description} color="label" />
      </LabelField>

      <Operations>
        <Text text="편집" color="label" fontSize="small" />
        <Text text="삭제" color="error" fontSize="small" />
      </Operations>
      {/*
       */}
    </LabelItemLayout>
  );
}
