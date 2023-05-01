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
  margin: 100px auto 0;
`;

const ContentImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ContentTextBox = styled.div`
  margin-top: 50px;
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
  white-space: pre-line;
`;

const ContentTextStrong = styled.p`
  font-weight: 700;
`;

const ContentTextIndent = styled.p`
  margin-left: 36px;
  line-height: 36px;
`

const ContentTextLink = styled.a`
  
`

const PageBox = styled.div`
  margin-top: 100px;
`;

const PageCol = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  padding: 16px;

  &:first-of-type {
    border-top: 1px solid #ccc;
  }
`;

const PageIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PagePrev = styled.div`
  font-weight: 400;
  margin-left: 8px;
`;

const PagePrevText = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  margin-left: 24px;
  max-width: 950px;
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
  ViewBox,
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
