import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.8);
`;

const RuleBox = styled.div`
  width: 1000px;
  background-color: #fff;
  margin: 100px auto;
  ${media.labtop`width: 100%;`}
  ${media.tabletLarge`width: 100%;`}
  ${media.tablet`width: 100%;`}
  ${media.mobile`width: 100%;`}
`;

const Inner = styled.div`
    
`

const RuleHeader = styled.div`
  padding: 40px 60px 40px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.mobile`padding: 20px;`}
`;

const RuleTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #000;
`;

const IconBox = styled.div`
  cursor: pointer;
`;

const RuleContent = styled.div`
  padding: 0 60px 60px 60px;
  ${media.mobile`padding: 20px;`}
`;

const RuleContentText = styled.p`
  line-height: 28px;
  white-space: pre-line;
`;

export {
  Background,
  Content,
  RuleBox,
  Inner,
  RuleHeader,
  RuleTitle,
  IconBox,
  RuleContent,
  RuleContentText,
};
