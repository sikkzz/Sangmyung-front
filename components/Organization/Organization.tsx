import Image from "next/image";

import {
  Container,
  OrganiContainer,
  ChartContainer,
  TextContainer,
  Title,
  Line,
  ImageContainer,
  ProfileContainer,
  ProfileInner,
  Profile,
  ProfileTextBox,
  Group,
  Position,
  Name,
  Major,
  SubProfileContainer,
  SubProfileInner,
  SubProfile,
  SubProfileTextBox,
  SubGroup,
  SubPosition,
  SubName,
  SubMajor,
} from "./OrganiElements";

import Img from "@/assets/chart.jpeg";
import Img2 from "@/assets/test.jpg";

export default function Organization() {
  return (
    <Container>
      <OrganiContainer>
        <Image src={Img} alt="chart" width={1250} height={850} />
      </OrganiContainer>
      <ChartContainer>
        <TextContainer>
          <Title>총학생회 조직도</Title>
          <Line>ㅣ</Line>
        </TextContainer>
        <ImageContainer>
          <Title>총학생회 선</Title>
          <ProfileContainer>
            <ProfileInner>
              <Profile>
                <Image
                  src={Img2}
                  alt="Img"
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                />
              </Profile>
              <ProfileTextBox>
                <Group>회장단</Group>
                <Position>학생회장</Position>
                <Name>이&nbsp;&nbsp;&nbsp;진</Name>
                <Major>지적재산권전공 20</Major>
              </ProfileTextBox>
            </ProfileInner>
            <ProfileInner>
              <Profile>
                <Image
                  src={Img2}
                  alt="Img"
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                />
              </Profile>
              <ProfileTextBox>
                <Group>회장단</Group>
                <Position>부학생회장</Position>
                <Name>이사랑</Name>
                <Major>국어교육과 20</Major>
              </ProfileTextBox>
            </ProfileInner>
          </ProfileContainer>

          <ProfileContainer>
            <ProfileInner>
              <Profile style={{ margin: "0 250px" }}>
                <Image
                  src={Img2}
                  alt="Img"
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                />
              </Profile>
              <ProfileTextBox>
                <Group>기획국</Group>
                <Position>국장</Position>
                <Name>김준식</Name>
                <Major>컴퓨터과학전공 17</Major>
              </ProfileTextBox>

              <SubProfileContainer>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
              </SubProfileContainer>
              <SubProfileContainer>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
              </SubProfileContainer>
            </ProfileInner>

            <ProfileInner>
              <Profile style={{ margin: "0 250px" }}>
                <Image
                  src={Img2}
                  alt="Img"
                  width={120}
                  height={120}
                  style={{ borderRadius: "50%" }}
                />
              </Profile>
              <ProfileTextBox>
                <Group>재정사무국</Group>
                <Position>국장</Position>
                <Name>우윤기</Name>
                <Major>휴먼지능정보공학전공 20</Major>
              </ProfileTextBox>
              <SubProfileContainer>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
              </SubProfileContainer>
              <SubProfileContainer>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
                <SubProfileInner>
                  <SubProfile>
                    <Image
                      src={Img2}
                      alt="Img"
                      width={70}
                      height={70}
                      style={{ borderRadius: "50%" }}
                    />
                  </SubProfile>
                  <SubProfileTextBox>
                    <SubGroup>기획국</SubGroup>
                    <SubPosition>국원 박주현</SubPosition>
                    <SubMajor>컴퓨터과학전공 17</SubMajor>
                  </SubProfileTextBox>
                </SubProfileInner>
              </SubProfileContainer>
            </ProfileInner>
          </ProfileContainer>
        </ImageContainer>
      </ChartContainer>
    </Container>
  );
}
