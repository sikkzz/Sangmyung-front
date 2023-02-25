import React from "react";

import {
  Layout,
  Col,
  Box,
  PledgeBox,
  PledgeCircle,
  Text,
  DetailBox,
  DetailCircle,
} from "./PledgeSimpleElements";

import { PledgeData } from "../../constants/data/PledgeData";

const PledgeSimple = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <PledgeBox>
            <PledgeCircle>
              <Text fontSize="48px">소통</Text>
            </PledgeCircle>
          </PledgeBox>

          {PledgeData.map((item, index) => (
            <DetailBox key={index}>
              <DetailCircle style={{ backgroundColor: item.color }}>
                <Text fontSize="24px">{item.text}</Text>
              </DetailCircle>
              <DetailCircle style={{ backgroundColor: item.color2 }}>
                <Text fontSize="24px">{item.text2}</Text>
              </DetailCircle>
            </DetailBox>
          ))}

          {/* <DetailBox>
            <DetailCircle>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#B5E4FD" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox>

          <DetailBox>
            <DetailCircle style={{ backgroundColor: "#A4DFFF" }}>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#8AD6FF" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox>
          <DetailBox>
            <DetailCircle style={{ backgroundColor: "#74CEFF" }}>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#5AC5FF" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox>
          <DetailBox>
            <DetailCircle style={{ backgroundColor: "#3DBAFF" }}>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#81BDDE" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox>
          <DetailBox>
            <DetailCircle style={{ backgroundColor: "#62AED7" }}>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#4BA2D2" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox>
          <DetailBox>
            <DetailCircle style={{ backgroundColor: "#248FCA" }}>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#020C5E" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox>
          <DetailBox>
            <DetailCircle style={{ backgroundColor: "#020A4E" }}>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#0517B6" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox>
          <DetailBox>
            <DetailCircle style={{ backgroundColor: "#051BD8" }}>
              <Text fontSize="24px">1. 교내 행정처와의 소통처 마련</Text>
            </DetailCircle>
            <DetailCircle style={{ backgroundColor: "#131B60" }}>
              <Text fontSize="24px">
                2. 학생 총회를 통한 학생과의 소통처 마련
              </Text>
            </DetailCircle>
          </DetailBox> */}
        </Box>
      </Col>
    </Layout>
  );
};

export default PledgeSimple;
