import Image from "next/image";
import {
  Container,
  InnerContainer,
  GreetingContainer,
  ImgContainer,
  ImgWrapper,
} from "./ContentElements";

import Img from "@/assets/test.jpg";

export default function Content() {
  return (
    <Container>
      <InnerContainer>
        <GreetingContainer>
          <ImgContainer>
            <ImgWrapper>
              <Image src={Img} alt="profile" width={500} height={700} style={{paddingLeft: "100px"}}/>
            </ImgWrapper>
            <ImgWrapper>
              <Image src={Img} alt="profile" width={500} height={700} style={{paddingRight: "100px"}}/>
            </ImgWrapper>
          </ImgContainer>
        </GreetingContainer>
      </InnerContainer>
    </Container>
  );
}
