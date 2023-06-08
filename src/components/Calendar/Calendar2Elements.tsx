import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Box = styled.div`
    margin: 100px 0;
`;

const ImgBox = styled.div`
  width: 700px;
  height: 700px;
  margin: 0 auto;
  ${media.tablet`width: 440px;height: 440px;`}
  ${media.mobile`width: 300px;height: 300px;`}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export { Layout, Col, Box, ImgBox, Img };
