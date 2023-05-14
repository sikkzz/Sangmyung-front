import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f9fafb;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 200px 0;

  ${media.labtop`padding: 100px 0;`};
  ${media.tabletLarge`padding: 60px 0;`};
  ${media.tablet`padding: 60px 0;`};
  ${media.mobile`padding: 30px 0;`};
`;

const Title = styled.div<{ fontSize: string; fontWeight: string }>`
  max-width: 1080px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: #191f28;
  text-align: center;
  margin-bottom: 30px;
  ${media.tabletLarge`font-size: 32px;`};
  ${media.tablet`font-size: 28px;`};
  ${media.mobile`font-size: 20px; margin-bottom: 20px;`};
`;

const Text = styled(Title)`
  margin-top: 30px;
  margin-bottom: 0;

  ${media.labtop`font-size: 18px; margin-bottom: 20px;color:#000;`};
  ${media.tabletLarge`font-size: 18px; margin-bottom: 20px;color:#000;`};
  ${media.tablet`font-size: 16px; margin-bottom: 20px;color:#000;`};
  ${media.mobile`font-size: 10px; margin: 0 0 10px 0; color:#000;`};
`;

export { Layout, Col, Box, Title, Text };
