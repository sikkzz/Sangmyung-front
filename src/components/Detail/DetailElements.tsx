import styled from "styled-components";

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
`;

const InfoBox = styled.div`
  margin-top: 50px;
`;

const TitleBox = styled.div`
  border-top: 1px solid #333;
  padding: 20px;
  border-bottom: 1px solid #d8d8d8;
  background-color: #f6f9ef;
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
`;

const InfoInnerBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  display: inline-block;
  padding: 20px;
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

const ViewBox = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

const ContentBox = styled.div``;

const ContentImgBox = styled.div`
  width: 700px;
  margin: 50px auto 0;
`;

const ContentImg = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
`;

const ContentTextBox = styled.div`
  margin-top: 100px;
`;

const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const ContentTextParagraph = styled.div`
  margin-top: 30px;
`;

const ContentText = styled.p`
  line-height: 36px;
`;

const ContentTextStrong = styled.p`
  font-weight: 700;
`;

const PageBox = styled.div`
  margin-top: 100px;
`;

const PageCol = styled.div`
  display: table;
  width: 100%;
  border-bottom: 1px solid #ccc;
  table-layout: fixed;

  &:first-of-type {
    border-top: 1px solid #ccc;
  }
`;

const PagePrev = styled.p`
  display: table-cell;
  padding: 11px 25px 11px 35px;
  width: 130px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
`;

const PagePrevText = styled.p`
  display: table-cell;
  padding: 11px 25px 11px 0;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  box-sizing: border-box;
  vertical-align: middle;
`;

const PagePrevTextLink = styled.a`
  font-weight: 400;
  color: #5c5c5c;
  line-height: 24px;
`;

const ListBox = styled.div`
  margin: 80px 0;
  float: right;
`;

const ListButton = styled.div`
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
  ViewBox,
  ContentBox,
  ContentImgBox,
  ContentImg,
  ContentTextBox,
  ContentTitle,
  ContentTextParagraph,
  ContentText,
  ContentTextStrong,
  PageBox,
  PageCol,
  PagePrev,
  PagePrevText,
  PagePrevTextLink,
  ListBox,
  ListButton,
};
