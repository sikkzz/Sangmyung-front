import {
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Text,
} from "./BioElements";
import { Box, InnerBox } from "../Tab/TabElements";

import Tab from "../Tab/Tab";

import { useParams, useLocation } from "react-router-dom";

import Img from "../../assets/test3.webp";

export default function Bio() {
  const param = useParams()
  // console.log(param.param)

  const location = useLocation()
  // console.log(location.pathname.split('/')[1])

  return (
    <>
      <ImageContainer>
        <Image src={Img} alt="Bio" />
        <TextContainer>
          <Title>총학생회 소개</Title>
          <Text>상명대학교 제57대 총학생회 선</Text>
          <Text>항상 학생들을 위해 먼저 나서는 총학생회가 되겠습니다.</Text>
        </TextContainer>
      </ImageContainer>
      <Box>
        <InnerBox>
          <Tab state={location.pathname.split('/')[1]} />
        </InnerBox>
      </Box>
    </>
  );
}
