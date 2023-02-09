import { Container, InnerContainer, Wrapper, Item } from "./TabElements";

export default function Tab() {
  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <Item>
            회장단 인사말
          </Item>
          <Item>
            조직도
          </Item>
        </Wrapper>
      </InnerContainer>
    </Container>
  );
}
