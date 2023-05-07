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
  ImgInnerBox,
  Img,
  InfoBox,
  TextBox,
  Profile,
  Image,
  ProfileTextBox,
  Position,
  Name,
  Major,
} from "./DepartChartElements";

import Abc from "../../assets/electionhead.png";

import { Props } from "./DepartContent";

const DepartChart: React.FC<Props> = ({ state }) => {
  const count = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Layout>
      <Col>
        <Box>
          <Title>국원 소개</Title>

          <ProfileBox>
            <ProfileItemBox>
              <ImgBox>
                <ImgOutBox>
                  <ImgInnerBox>
                    <Img src={Abc} alt="profileImg" />
                  </ImgInnerBox>
                </ImgOutBox>
              </ImgBox>
              <InfoBox></InfoBox>
              <TextBox></TextBox>
            </ProfileItemBox>

            {/* <Profile width="160px" height="160px">
                <Image src={Img} alt="profile" width="120px" height="120px" />
              </Profile>
              <ProfileTextBox>
                <Position fontSize="30px">국장</Position>
                <Name fontSize="30px">김준식</Name>
                <Major fontSize="24px">컴퓨터과학전공 17</Major>
              </ProfileTextBox>
            </ProfileItemBox>
            <ProfileItemBox>
              <Profile width="160px" height="160px">
                <Image src={Img} alt="profile" width="120px" height="120px" />
              </Profile>
              <ProfileTextBox>
                <Position fontSize="30px">차장</Position>
                <Name fontSize="30px">김준식</Name>
                <Major fontSize="24px">컴퓨터과학전공 17</Major>
              </ProfileTextBox>
            </ProfileItemBox>
          </ProfileBox>
          <ProfileBox> */}
            {count.map((index) => (
              <ProfileItemBox key={index}>
                <Profile width="100px" height="100px">
                  <Image src={Img} alt="profile" width="70px" height="70px" />
                </Profile>
                <ProfileTextBox>
                  <Position fontSize="20px">국원</Position>
                  <Name fontSize="20px">박주현</Name>
                  <Major fontSize="16px">조형예술학과 17</Major>
                </ProfileTextBox>
              </ProfileItemBox>
            ))}
          </ProfileBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default DepartChart;
