import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-top: 30px;
  margin-bottom: 50px;
  ${media.mobile`margin-top:0;margin-bottom:20px;`}
`;

const Start = styled.div``;

const Text = styled.span`
  font-size: 24px;
`;

export { Layout, Start, Text };
