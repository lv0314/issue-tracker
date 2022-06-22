import styled from 'styled-components';
import { Badge } from '../common/Badge';
import { Text } from '../common/Text';

const ListItem = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const ListText = styled.div`
  min-width: 184px;
`;

type AuthorFilterItemProps = {
  name: string;
  imgUrl?: string;
};

export function AuthorFilterItem({ name, imgUrl }: AuthorFilterItemProps) {
  return (
    <ListItem>
      <ListText>
        {/* <Badge imgSRC={imgUrl}></Badge> */}
        <Text text={`${name}`} />
      </ListText>
      <Text text="⃝" />
    </ListItem>
  );
}
