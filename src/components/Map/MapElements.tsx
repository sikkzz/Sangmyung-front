import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const Sub = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  color: #666;
`;

const MapBox = styled.div`
  width: 800px;
  height: 800px;
  margin: 50px auto;
  ${media.mobile`width: 300px;height: 300px;`}
`;

export { Layout, Col, Box, Title, Sub, MapBox };
