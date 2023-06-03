import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
  ${media.mobile`flex-direction: column;margin: 0;`}
`;

const TextBox = styled.div``;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
  ${media.mobile`font-size: 24px;`}
`;

const Sub = styled.h3`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 600;
  ${media.mobile`font-size: 16px;`}
`;

const ImageBox = styled.div`
  width: 500px;
  height: 290px;
  ${media.mobile`width: 300px;height: 100%;margin-top: 30px;`}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export { Layout, Col, Box, OpenBox, TextBox, Title, Sub, ImageBox, Img };
