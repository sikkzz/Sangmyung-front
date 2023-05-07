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
  DepartBox,
} from "./OrganiElements";

import Planning from "./Planning";
import Financial from "./Financial";

import Img from "../../assets/chart.png";
import Img2 from "../../assets/test.jpg";
import Img3 from "../../assets/political.jpeg";
import Img4 from "../../assets/deputy.jpeg";

import Test from "../../assets/profile/gahyun.jpeg";

import { OrganiData } from "../../constants/data/OrganiData";

export default function Organization() {
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
              <DepartBox>
                <Planning />
                <Financial />
              </DepartBox>
            </ImageBox>
          </ChartBox>
        </Box>
      </Col>
    </Layout>
  );
}
