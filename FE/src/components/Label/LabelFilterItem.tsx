import styled from 'styled-components';
import { Text } from '@/components/common/Text';

type LabelFilterItem = {
  contents: string;
  isClicked?: boolean;
};

const LabelFitlerItemWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

export function LabelFitlerItem({ contents, isClicked }: LabelFilterItem) {
  return (
    <LabelFitlerItemWrapper>
      {/* <Badge></Badge> */}
      <Text text={contents} />
      <Text text="⃝" />
    </LabelFitlerItemWrapper>
  );
}
