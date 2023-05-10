import React from "react";

import {
  Layout,
  Col,
  Box,
  Title,
  ProfileBox,
  ProfileItemBox,
  ImgBox,
  ImgOutBox,
  Img,
  InfoBox,
  Position,
  Name,
  Major,
  TextBox,
} from "./DepartChartElements";

import { Props } from "./DepartContent";

import { DepartPlanningData } from "../../constants/data/DepartData";

const DepartChart: React.FC<Props> = ({ state }) => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>국원 소개</Title>
          <ProfileBox>
            {DepartPlanningData.map((item, index) => (
              <ProfileItemBox key={index}>
                <ImgBox>
                  <ImgOutBox>
                    <Img
                      src={item.img}
                      alt={item.alt}
                      width={item?.size === "squ" ? "160px" : "128px"}
                      height={item?.size === "squ" ? "160px" : "164px"}
                      radius={item?.size === "squ" ? "50%" : "50px"}
                    />
                  </ImgOutBox>
                </ImgBox>
                <InfoBox>
                  <Position>{item.position}</Position>
                  <Name>{item.name}</Name>
                  <Major>{item.major}</Major>
                </InfoBox>
                <TextBox>
                  안녕하십니까, 총학생회 선[先]의 기획국 국장을 맡은 화학에너지공학전공 18학번 박주현입니다.<br/>상명대학교 학우분들이 즐길 수 있는 이벤트와 행사를 기획하며 행복이 가득한 상명대학교를 만들기 위하여 노력하겠습니다. 감사합니다
                </TextBox>
              </ProfileItemBox>
            ))}
          </ProfileBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default DepartChart;
