import Image from "next/image";
import {
  Container,
  InnerContainer,
  Wrapper,
  ImgContainer,
  ImgWrapper,
  TitleContainer,
  Title,
  GreetingContainer,
  LogoContainer,
  TextContainer,
  TextWrapper,
  Text,
} from "./ContentElements";

import Img from "@/assets/test.jpg";
import Img2 from "@/assets/logo.jpeg";

export default function Content() {
  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <ImgContainer>
            <ImgWrapper>
              <Image
                src={Img}
                alt="profile"
                width={500}
                height={700}
                // style={{ paddingLeft: "100px" }}
              />
              <TitleContainer>
                <Title>상명대학교 총학생회장</Title>
              </TitleContainer>
              <TitleContainer>
                <Title>이진</Title>
              </TitleContainer>
            </ImgWrapper>
            <ImgWrapper>
              <Image
                src={Img}
                alt="profile"
                width={500}
                height={700}
                // style={{ paddingRight: "100px" } }
              />
              <TitleContainer>
                <Title>상명대학교 부총학생회장</Title>
              </TitleContainer>
              <TitleContainer>
                <Title>이사랑</Title>
              </TitleContainer>
            </ImgWrapper>
          </ImgContainer>

          <GreetingContainer>
            <LogoContainer>
              <Image src={Img2} alt="Logo" width={500} height={500} />
            </LogoContainer>
            <TextContainer>
              <TextWrapper>
                <Text>안녕하십니까,</Text>
                <Text>
                  건국대학교 제54대 총학생회 REBOOT 총학생회장 조남철,
                  부총학생회장 김성용입니다.
                </Text>
                <Text>
                  소중한 한 표를 행사해 주신 학우 여러분께 감사의 말씀 드립니다.
                </Text>
                <Text>
                  학생 자치에 대한 관심이 낮아지고 있는 현시점에서, 총학생회의
                  책임이 큰 것이 사실입니다.
                </Text>
              </TextWrapper>
              <TextWrapper>
                <Text>
                  학우 여러분께 먼저 손 내밀고, 직접 만나 소통하며 신뢰를
                  회복하겠습니다.
                </Text>
                <Text>
                  실질적으로 어떤 부분에서 불편함을 느끼는지, 원하시는 것이
                  무엇인지 총학생회가 먼저 나서서 파악하며 ‘공감할 수 있는
                  학생회’를 만들겠습니다.
                </Text>
              </TextWrapper>
              <TextWrapper>
                <Text>
                  그리고 그 신뢰와 공감을 바탕으로 학우 여러분들과 함께 새로운
                  학생 자치를 만들어나가겠습니다.
                </Text>
              </TextWrapper>
              <TextWrapper>
                <Text>
                  학생회가 ‘그들만의 리그’가 아닌, 학우 여러분들의 실질적인
                  목소리를 대변하고 학우 여러분들을 위해 일하는 모습을
                  보여드리겠습니다.
                </Text>
              </TextWrapper>
              <TextWrapper>
                <Text>
                  지금까지 멈춰있던 우리의 일상이 다시 시작되고 있습니다.
                </Text>
                <Text>우리 건국대학교도 새로운 국면을 맞이하고 있습니다.</Text>
                <Text>
                  우리가 꾸려가는 건국대학교의 모습이 새로운 시작이자 새로운
                  출발이 될 것입니다.
                </Text>
                <Text>
                  다양한 소통 창구를 통해 여러분들에게 먼저 다가가겠습니다.
                </Text>
                <Text>
                  저희가 잘한다면 함께 해주시고, 못한다면 비판해주시고
                  조언해주십시오.
                </Text>
              </TextWrapper>
              <TextWrapper>
                <Text>과거에 얽매이지 않고, 변화에 두려워하지 않겠습니다.</Text>
              </TextWrapper>
              <TextWrapper>
                <Text>
                  항상 저희 REBOOT에게, 그리고 건국대학교의 학생 자치에게 관심을
                  주시길 부탁드립니다.
                </Text>
                <Text>감사합니다.</Text>
              </TextWrapper>
            </TextContainer>
          </GreetingContainer>
        </Wrapper>
      </InnerContainer>
    </Container>
  );
}
