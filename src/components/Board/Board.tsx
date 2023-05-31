import {
  Layout,
  Col,
  Box,
  OpenBox,
  TextBox,
  Title,
  Sub,
  ImageBox,
  Img,
} from "./BoardElements";

import constructionImg from "../../assets/construction.png";

const Board = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <OpenBox>
            <TextBox>
              <Title>홈페이지</Title>
              <Title>오픈 준비중입니다.</Title>
              <Sub>더 나은 서비스를 제공해 드리기 위해</Sub>
              <Sub>최선을 다하겠습니다.</Sub>
            </TextBox>
            <ImageBox>
              <Img src={constructionImg} alt="constructionImg" />
            </ImageBox>
          </OpenBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Board;
