import {
  Layout,
  Col,
  Box,
  OrganiBox,
  OrganiImage,
  ChartBox,
  TextBox,
  Title,
  Line,
  ImageBox,
  Image,
  ProfileBox,
  ProfileInnerBox,
  ProfileImageBox,
  ProfileTextBox,
  Group,
  Position,
  Name,
  Major,
} from "./OrganiElements";

import Planning from "./Planning";

import Img from "../../assets/chart.png";
import Img2 from "../../assets/test.jpg";
import Img3 from "../../assets/political.jpeg";
import Img4 from "../../assets/deputy.jpeg";

import Test from "../../assets/profile/gahyun.jpeg";

import { OrganiData, PlanningData } from "../../constants/data/OrganiData";

export default function Organization() {
  const count3 = [1, 2];
  const count = [1, 2, 3];
  const count2 = [1, 2, 3, 4];
  return (
    <Layout>
      <Col>
      <Box>
        <OrganiBox>
          <OrganiImage src={Img} alt="chart" />
        </OrganiBox>
        <ChartBox>
          <TextBox>
            <Title>총학생회 조직도</Title>
            <Line>ㅣ</Line>
          </TextBox>
          <ImageBox>
            <Title>총학생회 선</Title>

            <ProfileBox marginTop="50px">
              {OrganiData.map((item, index) => (
                <ProfileInnerBox key={index}>
                  <ProfileImageBox width="160px" height="160px">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width="110px"
                        height="140px"
                      />
                  </ProfileImageBox>
                  <ProfileTextBox>
                    <Group fontSize="24px">{item.group}</Group>
                    <Position fontSize="30px">{item.position}</Position>
                    <Name>{item.name}</Name>
                    <Major fontSize="24px">{item.major}</Major>
                  </ProfileTextBox>
                </ProfileInnerBox>
              ))}
            </ProfileBox>

            <Planning />

            {/* <ProfileBox marginTop="50px">
              {PlanningData.map((item, index) => (
                <ProfileInnerBox key={index}>
                  <ProfileImageBox
                    width="160px"
                    height="160px"
                    style={{ margin: "0 250px" }}
                  >
                    <Image src={item.img} alt={item.alt} width="110px" height="140px" />
                  </ProfileImageBox>
                  <ProfileTextBox>
                    <Group fontSize="24px">{item.group}</Group>
                    <Position fontSize="30px">{item.position}</Position>
                    <Name>{item.name}</Name>
                    <Major fontSize="24px">{item.major}</Major>
                  </ProfileTextBox>

                  <Planning />

                  <ProfileBox marginTop="30px">
                    {count2.map((index) => (
                      <ProfileInnerBox key={index}>
                        <ProfileImageBox width="100px" height="100px">
                          <Image
                            src={Img2}
                            alt="Img"
                            width="70px"
                            height="70px"
                          />
                        </ProfileImageBox>
                        <ProfileTextBox>
                          <Group fontSize="16px">기획국</Group>
                          <Position fontSize="22px">국원 박주현</Position>
                          <Major fontSize="16px">컴퓨터과학전공 17</Major>
                        </ProfileTextBox>
                      </ProfileInnerBox>
                    ))}
                  </ProfileBox>
                </ProfileInnerBox>
              ))}
            </ProfileBox> */}
          </ImageBox>
        </ChartBox>
        </Box>
      </Col>
    </Layout>
  );
}
