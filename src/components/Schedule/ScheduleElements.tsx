import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
`;

const MBox = styled.div`
display: none;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${media.mobile`display:flex;`}
  ${media.tablet`display:flex;`}
`

const MBoxImg = styled.img`
  width:100%;
`

const Box = styled.div`
  ${media.mobile`display:none;`}
  ${media.tablet`display:none;`}
`;

export { Layout, Col, Box, MBox, MBoxImg };
