import {
  Layout,
  Container,
  OrganiContainer,
  OrganiImage,
  ChartContainer,
  TextContainer,
  Title,
  Line,
  ImageContainer,
  Image,
  ProfileContainer,
  ProfileInner,
  Profile,
  ProfileTextBox,
  Group,
  Position,
  Name,
  Major,
} from "./OrganiElements";

import Img from "../../assets/chart.png";
import Img2 from "../../assets/test.jpg";
import Img3 from "../../assets/political.jpeg";
import Img4 from "../../assets/deputy.jpeg";

export default function Organization() {
  const count3 = [1, 2];
  const count = [1, 2, 3];
  const count2 = [1, 2, 3, 4];
  return (
    <Layout>
      <Container>
        <OrganiContainer>
          <OrganiImage src={Img} alt="chart" />
        </OrganiContainer>
        <ChartContainer>
          <TextContainer>
            <Title>총학생회 조직도</Title>
            <Line>ㅣ</Line>
          </TextContainer>
          <ImageContainer>
            <Title>총학생회 선</Title>

            <ProfileContainer marginTop="50px">
              {count3.map((index) => (
                <ProfileInner key={index}>
                  <Profile width="160px" height="160px">
                    <Image src={Img3} alt="Img" width="110px" height="140px" />
                  </Profile>
                  <ProfileTextBox>
                    <Group fontSize="24px">회장단</Group>
                    <Position fontSize="30px">학생회장</Position>
                    <Name>이&nbsp;&nbsp;&nbsp;진</Name>
                    <Major fontSize="24px">지적재산권전공 20</Major>
                  </ProfileTextBox>
                </ProfileInner>
              ))}
            </ProfileContainer>

            <ProfileContainer marginTop="50px">
              {count3.map((index) => (
                <ProfileInner key={index}>
                  <Profile
                    width="160px"
                    height="160px"
                    style={{ margin: "0 250px" }}
                  >
                    <Image src={Img4} alt="Img" width="120px" height="120px" />
                  </Profile>
                  <ProfileTextBox>
                    <Group fontSize="24px">기획국</Group>
                    <Position fontSize="30px">국장</Position>
                    <Name>김준식</Name>
                    <Major fontSize="24px">컴퓨터과학전공 17</Major>
                  </ProfileTextBox>

                  <ProfileContainer marginTop="30px">
                    {count.map((index) => (
                      <ProfileInner key={index}>
                        <Profile width="100px" height="100px">
                          <Image
                            src={Img2}
                            alt="Img"
                            width="70px"
                            height="70px"
                          />
                        </Profile>
                        <ProfileTextBox>
                          <Group fontSize="16px">기획국</Group>
                          <Position fontSize="22px">국원 박주현</Position>
                          <Major fontSize="16px">컴퓨터과학전공 17</Major>
                        </ProfileTextBox>
                      </ProfileInner>
                    ))}
                  </ProfileContainer>

                  <ProfileContainer marginTop="30px">
                    {count2.map((index) => (
                      <ProfileInner key={index}>
                        <Profile width="100px" height="100px">
                          <Image
                            src={Img2}
                            alt="Img"
                            width="70px"
                            height="70px"
                          />
                        </Profile>
                        <ProfileTextBox>
                          <Group fontSize="16px">기획국</Group>
                          <Position fontSize="22px">국원 박주현</Position>
                          <Major fontSize="16px">컴퓨터과학전공 17</Major>
                        </ProfileTextBox>
                      </ProfileInner>
                    ))}
                  </ProfileContainer>
                </ProfileInner>
              ))}
            </ProfileContainer>
          </ImageContainer>
        </ChartContainer>
      </Container>
    </Layout>
  );
}
