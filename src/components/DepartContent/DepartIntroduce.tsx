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

import Img from "../../assets/test.jpg";


type Props = {
  state: string | undefined
};


const DepartIntroduce: React.FC<Props> = ({state}) => {
  return (
    <Layout>
      <Col>
        <Box>
          <BoxLeft>
            <ImageBox>
              <Image src={Img} alt="img" />
            </ImageBox>
            <TextBox fontSize="26px">기획국</TextBox>
            <TextBox fontSize="18px">Planning Department</TextBox>
          </BoxLeft>
          <BoxRight>
            <TextBox fontSize="18px">
              기획국에서는 행사, 이벤트, 대동제(축제) 기획 등 학우들에게
              즐길거리 제공을 위한 기획을 집행합니다. 더 나아가서 학생들을 위한
              콘텐츠 사업들을 추진하는 업무를 맡고 있습니다. 학생회 공약 사업
              추진, 학생회 사업 계획 마련등의 업무를 추가로 이행하고 있습니다.
            </TextBox>
          </BoxRight>
        </Box>
      </Col>
    </Layout>
  );
};

export default DepartIntroduce;
