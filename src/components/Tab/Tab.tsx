import { Container, InnerContainer, Wrapper, Item } from "./TabElements";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { headerTabData } from "../../constants/data/headerTabData";
import { TabData } from "../../constants/data/TabData";

type Props = {
  state: string | undefined;
};

const Tab: React.FC<Props> = ({ state }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [active, setActive] = useState<String>();

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          {state === "introduce" ? (
            <>
              <Item href="/introduce/greeting">회장단 인사말</Item>
              <Item href="/introduce/organizationchart">조직도</Item>
            </>
          ) : state === "department" ? (
            <>
              <Item href="/department/planning">기획국</Item>
              <Item href="/department/financialofficework">재정사무국</Item>
              <Item href="/department/foreigncooperation">대외협력국</Item>
              <Item href="/department/internalcommunication">대내교류국</Item>
              <Item href="/department/welfarework">복지사업국</Item>
              <Item href="/department/educationsupporting">교육지원국</Item>
              <Item href="/department/promotion">홍보국</Item>
            </>
          ) : (
            ""
          )}
        </Wrapper>
      </InnerContainer>
    </Container>
  );
};

export default Tab;
