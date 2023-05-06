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
  /* margin-bottom: 8px; */
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

const ContentBox = styled.div``;

const ContentImgBox = styled.div`
  width: 700px;
  margin: 100px auto 0;

  ${media.mobile`width: 300px;margin-top: 60px;`};
`;

const ContentImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ContentTextBox = styled.div`
  margin-top: 50px;
  ${media.mobile`margin-top: 30px;`}
`;

const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  ${media.mobile`font-size: 14px;`}
`;

const ContentTextParagraph = styled.div`
  margin-top: 30px;
`;

const ContentText = styled.p`
  line-height: 36px;
  white-space: pre-line;
  ${media.mobile`font-size: 12px;line-height: 20px;`}
`;

const ContentTextStrong = styled.p`
  font-weight: 700;
`;

const ContentTextIndent = styled.p`
  margin-left: 36px;
  line-height: 36px;
`;

const ContentTextLink = styled.a``;

const PageBox = styled.div`
  margin-top: 100px;
  ${media.mobile`margin-top: 60px;`}
`;

const PageCol = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  padding: 16px;

  &:first-of-type {
    border-top: 1px solid #ccc;
  }

  ${media.mobile`padding: 8px;`}
`;

const PageIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PagePrev = styled.div`
  font-weight: 400;
  margin-left: 8px;
  ${media.mobile`font-size: 12px;`}
`;

const PagePrevText = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  margin-left: 24px;
  max-width: 950px;
  ${media.mobile`margin-left: 10px;font-size: 12px;max-width: 260px;`}
`;

const PagePrevTextLink = styled.a`
  font-weight: 400;
  color: #5c5c5c;
  line-height: 24px;
`;

const ListBox = styled.div`
  margin: 80px 0;
  float: right;
  ${media.mobile`margin-top: 40px;`}
`;

const ListButton = styled.a`
  width: 71px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #555;
  box-shadow: 3px 3px 0px #555;
  border-radius: 4px;
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
  ContentBox,
  ContentImgBox,
  ContentImg,
  ContentTextBox,
  ContentTitle,
  ContentTextParagraph,
  ContentText,
  ContentTextStrong,
  ContentTextIndent,
  ContentTextLink,
  PageBox,
  PageCol,
  PageIconBox,
  PagePrev,
  PagePrevText,
  PagePrevTextLink,
  ListBox,
  ListButton,
};
