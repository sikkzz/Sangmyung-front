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

const Box = styled.div``;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
  ${media.mobile`font-size: 24px;margin-top: 20px;`};
`;

const InfoBox = styled.div`
  margin-top: 50px;
  ${media.mobile`margin-top: 30px;`}
`;

const TitleBox = styled.div`
  border-top: 1px solid #333;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
  background-color: #f6f9ef;
  ${media.mobile`padding: 10px;`}
`;

const BoardTitle = styled.div`
  font-size: 18px;
  line-height: 25px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: #f6f9ef;
  font-weight: 600;
  ${media.mobile`font-size: 14px;`}
`;

const InfoInnerBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  display: inline-block;
  padding: 20px;
  ${media.mobile`padding: 10px;font-size: 12px;`}
`;

const InfoLeft = styled.div`
  float: left;
  display: flex;
`;

const DownloadBox = styled.a``;

const IconBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const InfoRight = styled.div`
  float: right;
`;

const PeopleBox = styled.div`
  display: inline-block;
`;

const DateBox = styled.div`
  display: inline-block;
  margin-left: 20px;
`; 

export {
  Layout,
  Col,
  Box,
  Title,
  InfoBox,
  TitleBox,
  BoardTitle,
  InfoInnerBox,
  InfoLeft,
  DownloadBox,
  IconBox,
  InfoRight,
  PeopleBox,
  DateBox,
};
