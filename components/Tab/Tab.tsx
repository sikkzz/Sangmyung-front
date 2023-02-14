import { Container, InnerContainer, Wrapper, Item } from "./TabElements";
import { useRouter } from "next/router";
import { useState } from "react";
import { headerTabData } from "@/constants/data/headerTabData";

export default function Tab() {
  const router = useRouter()
  const [active, setActive] = useState<String>()

  console.log(router.pathname)
  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          {/* {headerTabData.map((item ,index) => {
            return(
              <>
                {item.subItem && (
                  <Item>{item.main_item}</Item>
                )}
                <div>{item.subItemitem.subItem}</div>
              </>
            )
          })} */}
          {/* <Item href="/greeting">회장단 인사말</Item>
          <Item href="/organizationchart">조직도</Item> */}
        </Wrapper>
      </InnerContainer>
    </Container>
  );
}
