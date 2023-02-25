import React from "react";

import {
  CommunicationBox,
  CommunicationItemBox,
  CommunicationItem,
  CommunicationText,
  Title,
  Content,
  Layout,
  Col,
  Box,
  PledgeBox,
  PledgeCircle,
  Text,
  DetailBox,
  DetailCircle,
  Test,
} from "./PledgeSimpleElements";

import { PledgeData } from "../../constants/data/PledgeData";

import Icons from "../../constants/icon";

const PledgeSimple = () => {
  const count = [1, 2, 3, 4];
  const count2 = [1, 2, 3];
  return (
    <Layout>
      <Col>
        <Box>
          <PledgeBox>
            <Title>소통</Title>
            <Content>학생들이 소통할 수 있는 창구를 만들겠습니다.</Content>
            <CommunicationBox>
              {count.map((index) => (
                <CommunicationItemBox key={index}>
                  <CommunicationItem>
                    <Icons.MdWorkOutline size={80} color="#000" />
                  </CommunicationItem>
                  <CommunicationText>
                    교내 행정처와의 소통 창구 마련
                  </CommunicationText>
                </CommunicationItemBox>
              ))}
            </CommunicationBox>

            <CommunicationBox style={{ padding: "0 120px" }}>
              {count2.map((index) => (
                <CommunicationItemBox key={index}>
                  <CommunicationItem>
                    <Icons.MdWorkOutline size={80} color="#000" />
                  </CommunicationItem>
                  <CommunicationText>
                    교내 행정처와의 소통 창구 마련
                  </CommunicationText>
                </CommunicationItemBox>
              ))}
            </CommunicationBox>
            <Test></Test>
            <Title>문화 행사</Title>
            <Content>학생들이 즐길 수 있는 행사들을 만들겠습니다.</Content>

            <CommunicationBox style={{ padding: "0 120px" }}>
              {count2.map((index) => (
                <CommunicationItemBox key={index}>
                  <CommunicationItem>
                    <Icons.MdWorkOutline size={80} color="#000" />
                  </CommunicationItem>
                  <CommunicationText>대동제 시행</CommunicationText>
                </CommunicationItemBox>
              ))}
            </CommunicationBox>

            <CommunicationBox>
              {count.map((index) => (
                <CommunicationItemBox key={index}>
                  <CommunicationItem>
                    <Icons.MdWorkOutline size={80} color="#000" />
                  </CommunicationItem>
                  <CommunicationText>
                    동아리 문화제 활성화
                  </CommunicationText>
                </CommunicationItemBox>
              ))}
            </CommunicationBox>
          </PledgeBox>

          {/* {PledgeData.map((item, index) => (
            <DetailBox key={index}>
              <DetailCircle style={{ backgroundColor: item.color }}>
                <Text fontSize="24px">{item.text}</Text>
              </DetailCircle>
              <DetailCircle style={{ backgroundColor: item.color2 }}>
                <Text fontSize="24px">{item.text2}</Text>
              </DetailCircle>
            </DetailBox>
          ))} */}
        </Box>
      </Col>
    </Layout>
  );
};

export default PledgeSimple;
