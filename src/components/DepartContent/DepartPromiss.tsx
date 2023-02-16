import React from "react";
import {
  Layout,
  Col,
  Box,
  Title,
  PromissBox,
  PromissInnerBox,
  ItemBox,
  IconBox,
  IconSubBox,
  PromissTitle,
  PromissContent,
} from "./DepartPromissElements";

import Icons from "../../constants/icon";

const DepartPromiss = () => {
  const count = [1, 2, 3, 4];
  return (
    <Layout>
      <Col>
        <Box>
          <Title>공약 이행 현황</Title>
          <PromissBox>
            {count.map((index) => (
              <PromissInnerBox key={index}>
                <ItemBox>
                  <IconBox>
                    <Icons.MdWorkOutline size={100} color="#fff" />
                  </IconBox>
                  <IconSubBox>
                    {index % 2 === 0 ? (
                      <Icons.BiLoaderCircle size={40} color="#000" />
                    ) : (
                      <Icons.BsCheckCircle size={40} color="#000" />
                    )}
                  </IconSubBox>
                </ItemBox>
                <PromissTitle>대동제 기획</PromissTitle>
                <PromissContent>
                  학생들이 즐길 수 있는 대동제 행사 기획 및 사업 집행 추진
                </PromissContent>
              </PromissInnerBox>
            ))}
          </PromissBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default DepartPromiss;
