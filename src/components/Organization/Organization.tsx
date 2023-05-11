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
  MImg,
  ProfileMainBox,
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
import Foreign from "./Foreign";
import Internal from "./Internal";
import Welfare from "./Welfare";
import Education from "./Education";
import Promotion from "./Promotion";

import Img from "../../assets/chart.png";

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
              <Title>총학생회 '선[先]'</Title>

              <ProfileMainBox marginTop="50px">
                {OrganiData.map((item, index) => (
                  <ProfileInnerBox key={index}>
                    <ProfileImageBox>
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width="108px"
                        height="144px"
                        radius="50px"
                      />
                      <MImg
                        src={item.img}
                        alt={item.alt}
                        width="80px"
                        height="108px"
                        radius="50px"
                      />
                    </ProfileImageBox>
                    <ProfileTextBox>
                      <Group>{item.group}</Group>
                      <Position>{item.position}</Position>
                      <Name>{item.name}</Name>
                      <Major>{item.major}</Major>
                    </ProfileTextBox>
                  </ProfileInnerBox>
                ))}
              </ProfileMainBox>
              <DepartBox>
                <Planning />
                <Financial />
              </DepartBox>
              <DepartBox>
                <Foreign />
                <Internal />
              </DepartBox>
              <DepartBox>
                <Welfare />
                <Education />
              </DepartBox>
              <DepartBox>
                <Promotion />
              </DepartBox>
            </ImageBox>
          </ChartBox>
        </Box>
      </Col>
    </Layout>
  );
}
