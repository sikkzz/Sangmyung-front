import React from "react";
import {
  Layout,
  Col,
  Box,
  Title,
  WorkBox,
  WorkInnerBox,
  ItemBox,
  IconBox,
  WorkTitle,
  WorkContent,
} from "./DepartWorkElements";

import Icons from "../../constants/icon";

const DepartWork = () => {
  const count = [1, 2, 3, 4];
  return (
    <Layout>
      <Col>
        <Box>
          <Title>주요업무</Title>
          <WorkBox>
            {count.map((index) => (
              <WorkInnerBox key={index}>
                <ItemBox>
                  <IconBox>
                    <Icons.MdWorkOutline size={48} color="#fff" />
                  </IconBox>
                </ItemBox>
                <WorkTitle>행사 기획</WorkTitle>
                <WorkContent>
                  학생들이 즐길 수 있는 콘텐츠들을 기획하고 집행하는 업무를
                  맡아서 합니다.
                </WorkContent>
              </WorkInnerBox>
            ))}
          </WorkBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default DepartWork;
