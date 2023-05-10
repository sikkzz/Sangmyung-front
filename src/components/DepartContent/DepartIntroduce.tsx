import React from "react";
import {
  Layout,
  Col,
  Box,
  BoxLeft,
  BoxRight,
  ImageBox,
  Image,
  TextBox,
} from "./DepartIntroduceElements";

import { DepartIntroData } from "../../constants/data/DepartData";

import { Props } from "./DepartContent";

const DepartIntroduce: React.FC<Props> = ({ state }) => {
  return (
    <Layout>
      <Col>
        <Box>
          <BoxLeft>
            {DepartIntroData.map((item, index) => (
              <div key={index}>
                {item.id === state ? (
                  <>
                    <ImageBox>
                      <Image src={item.img} alt={item.alt} />
                    </ImageBox>

                    <TextBox
                      fontSize="26px"
                      lineHeight="initial"
                      textAlign="center"
                    >
                      {item.title}
                    </TextBox>
                    <TextBox
                      fontSize="18px"
                      lineHeight="initial"
                      textAlign="center"
                    >
                      {item.sub}
                    </TextBox>
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
          </BoxLeft>
          <BoxRight>
            {DepartIntroData.map((item, index) => (
              <div key={index}>
                {item.id === state ? (
                  <TextBox
                    fontSize="18px"
                    lineHeight="36px"
                    textAlign="initial"
                  >
                    {item.contents}
                  </TextBox>
                ) : (
                  ""
                )}
              </div>
            ))}
          </BoxRight>
        </Box>
      </Col>
    </Layout>
  );
};

export default DepartIntroduce;
