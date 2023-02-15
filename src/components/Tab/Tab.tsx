import { Container, InnerContainer, Wrapper, Item } from "./TabElements";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { headerTabData } from "../../constants/data/headerTabData";
import { TabData } from "../../constants/data/TabData";

export default function Tab() {
  const navigate = useNavigate()
  const params = useParams()
  const [active, setActive] = useState<String | []>();

  // console.log(params)

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          {/* {
            {
              "/introduce/greeting": (
                <>
                  <Item href="/greeting">회장단 인사말</Item>
                  <Item href="/organizationchart">조직도</Item>
                </>
              ),
              "/department/planning": (
                <>
                  <Item href="/greeting">회장단 인사말</Item>
                  <Item href="/greeting">회장단 인사말</Item>
                  <Item href="/greeting">회장단 인사말</Item>
                  <Item href="/greeting">회장단 인사말</Item>
                  <Item href="/greeting">회장단 인사말</Item>
                </>
              ),
            }[active]
          } */}
        </Wrapper>
      </InnerContainer>
    </Container>
  );
}
