import React from "react";

import {
  Layout,
  Col,
  Box,
  PldegeBox,
  PledgeCircle,
  SubCircle,
  Text,
  PledgeContent,
  TabBox,
  TabInnerBox,
  TabList,
  TabItem,
  ContentBox,
} from "./PledgeDetailElements";

import Icons from "../../constants/icon";

const PledgeDetail = () => {
  const count = [1, 2, 3, 4];
  return (
    <Layout>
      <Col>
        <Box>
          <TabBox>
            <TabInnerBox>
              <TabList>
                <TabItem>소통</TabItem>
                <TabItem>복지</TabItem>
                <TabItem>문화</TabItem>
                <TabItem>학사</TabItem>
              </TabList>
            </TabInnerBox>
          </TabBox>

          {count.map((index) => (
            <PldegeBox key={index}>
              <PledgeCircle>
                <Icons.MdWorkOutline size={80} color="#fff" />
              </PledgeCircle>
              <SubCircle>
                <Icons.BiLoaderCircle size={40} color="#000" />
              </SubCircle>
              <ContentBox>
                <Text fontSize="30px">교내 행정처와의 소통 창구 마련</Text>
                <PledgeContent>
                  교내 학생처와 교원들에게 의견을 제시하고 목소리를 낼 수 있는
                  주기적인 소통 창구를 마련하겠습니다. 분기별로 정기 총회를 실행하고 한따까리 해보도록 하겠습니다.
                </PledgeContent>
              </ContentBox>
            </PldegeBox>
          ))}
        </Box>
      </Col>
    </Layout>
  );
};

export default PledgeDetail;
