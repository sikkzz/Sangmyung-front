import React from "react";

import { Layout, Col, Box, Text } from "./LandingElements";

const Landing = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Text fontSize="48px">총학생회 선</Text>
          <Text fontSize="18px">
            학생회가 ‘그들만의 리그’가 아닌, 학우 여러분들의 실질적인 목소리를
            대변하고 학우 여러분들을 위해 일하는 모습을 보여드리겠습니다.
            지금까지 멈춰있던 우리의 일상이 다시 시작되고 있습니다. 우리
            건국대학교도 새로운 국면을 맞이하고 있습니다. 우리가 꾸려가는
            건국대학교의 모습이 새로운 시작이자 새로운 출발이 될 것입니다.
            다양한 소통 창구를 통해 여러분들에게 먼저 다가가겠습니다. 저희가
            잘한다면 함께 해주시고, 못한다면 비판해주시고 조언해주십시오. 과거에
            얽매이지 않고, 변화에 두려워하지 않겠습니다. 항상 저희 REBOOT와
            건국대학교의 학생 자치에 많은 관심 부탁드립니다. 감사합니다.
          </Text>
        </Box>
      </Col>
    </Layout>
  );
};

export default Landing;
