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
} from "./DepartPromissElements";

import Icons from "../../constants/icon";

import { Props } from "./DepartContent";

// import { DepartPromissData } from "../../constants/data/DepartData";

const DepartPromiss: React.FC<Props> = ({ state }) => {
  return (
    <Layout>
      <Col>
        {/* <Box>
          <Title>공약 이행 현황</Title>
          <PromissBox>
            {DepartPromissData.map((item, index) => (
              <>
                {item.subItem.map((item, index) => (
                  <PromissInnerBox key={index}>
                    <ItemBox>
                      <IconBox>{item.icon}</IconBox>
                      <IconSubBox>
                        {item.progress === "ing" ? (
                          <Icons.BiLoaderCircle size={40} color="#000" />
                        ) : (
                          <Icons.BsCheckCircle size={40} color="#000" />
                        )}
                      </IconSubBox>
                    </ItemBox>
                    <PromissTitle>{item.title}</PromissTitle>
                  </PromissInnerBox>
                ))}
              </>
            ))}
          </PromissBox>
        </Box> */}
      </Col>
    </Layout>
  );
};

export default DepartPromiss;
