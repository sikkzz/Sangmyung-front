import React from "react";

import {
  Layout,
  Col,
  Box,
  Title,
  ProfileBox,
  ProfileInnerBox,
  Profile,
  Image,
  ProfileTextBox,
  Position,
  Name,
  Major,
} from "./DepartChartElements";

import Img from "../../assets/test.jpg";

import { Props } from "./DepartContent";

const DepartChart: React.FC<Props> = ({ state }) => {
  const count = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Layout>
      <Col>
        <Box>
          <Title>국원 소개</Title>
          <ProfileBox direction="column">
            <ProfileInnerBox>
              <Profile width="160px" height="160px">
                <Image src={Img} alt="profile" width="120px" height="120px" />
              </Profile>
              <ProfileTextBox>
                <Position fontSize="30px">국장</Position>
                <Name fontSize="30px">김준식</Name>
                <Major fontSize="24px">컴퓨터과학전공 17</Major>
              </ProfileTextBox>
            </ProfileInnerBox>
            <ProfileInnerBox>
              <Profile width="160px" height="160px">
                <Image src={Img} alt="profile" width="120px" height="120px" />
              </Profile>
              <ProfileTextBox>
                <Position fontSize="30px">차장</Position>
                <Name fontSize="30px">김준식</Name>
                <Major fontSize="24px">컴퓨터과학전공 17</Major>
              </ProfileTextBox>
            </ProfileInnerBox>
          </ProfileBox>
          <ProfileBox direction="row">
            {count.map((index) => (
              <ProfileInnerBox key={index}>
                <Profile width="100px" height="100px">
                  <Image src={Img} alt="profile" width="70px" height="70px" />
                </Profile>
                <ProfileTextBox>
                  <Position fontSize="20px">국원</Position>
                  <Name fontSize="20px">박주현</Name>
                  <Major fontSize="16px">조형예술학과 17</Major>
                </ProfileTextBox>
              </ProfileInnerBox>
            ))}
          </ProfileBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default DepartChart;
