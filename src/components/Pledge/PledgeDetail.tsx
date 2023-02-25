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
} from "./PledgeDetailElements";

import Icons from "../../constants/icon";

const PledgeDetail = () => {
    const count = [1,2,3,4]
  return (
    <Layout>
      <Col>
        <Box>
            {count.map((index) => (
                <PldegeBox>
            <PledgeCircle>
              <Text fontSize="18px">교내 행정처와의 소통 창구 마련</Text>
            </PledgeCircle>
            <SubCircle>
              <Icons.BiLoaderCircle size={40} color="#000" />
            </SubCircle>
            <PledgeContent>
              교내 학생처와 교원들에게 의견을 제시하고 목소리를 낼 수 있는
              주기적인 소통 창구를 마련하겠습니다.
            </PledgeContent>
          </PldegeBox>
            ))}
          
        </Box>
      </Col>
    </Layout>
  );
};

export default PledgeDetail;
