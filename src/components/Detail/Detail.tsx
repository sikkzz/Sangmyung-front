import {
  Layout,
  Col,
  Box,
  Title,
  DetailBox,
  TitleBox,
  BoardTitle,
  InfoBox,
  InfoLeft,
  DownloadBox,
  IconBox,
  InfoRight,
  PeopleBox,
  DateBox,
  ViewBox,
} from "./DetailElements";

import Icons from "../../constants/icon";

const Detail = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>총학생회 회칙 및 세칙</Title>
          <DetailBox>
            <TitleBox>
              <BoardTitle>총학생회 공지사항입니다.</BoardTitle>
            </TitleBox>
            <InfoBox>
              <InfoLeft>
                <DownloadBox href="https://www.smu.ac.kr/cms/fileDownload.do?path=%2F_res%2Fko%2Fetc%2FRule(2022.09.28.).pdf">
                  총학생회 공지사항
                </DownloadBox>
                <IconBox href="https://www.smu.ac.kr/cms/fileDownload.do?path=%2F_res%2Fko%2Fetc%2FRule(2022.09.28.).pdf">
                  <Icons.BiDownload size={20} color="#000" />
                </IconBox>
              </InfoLeft>
              <InfoRight>
                <PeopleBox>작성자 : 관리자</PeopleBox>
                <DateBox>작성일 : 2023-04-15</DateBox>
                <ViewBox>조회수 : 160</ViewBox>
              </InfoRight>
            </InfoBox>
          </DetailBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Detail;
