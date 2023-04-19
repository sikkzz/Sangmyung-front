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

import { useParams, useLocation } from "react-router-dom";

import { NoticeData } from "../../constants/data/NoticeData";

const Detail = () => {
  const param = useParams();
  const location = useLocation()

  // console.log(location.pathname.split("/")[1])

  return (
    <Layout>
      <Col>
        {NoticeData.map((item, index) => (
          <Box key={index}>
            {param.id === item.id ? (
              <>
                <Title>공지사항</Title>
                <DetailBox>
                  <TitleBox>
                    <BoardTitle>{item.title}</BoardTitle>
                  </TitleBox>
                  <InfoBox>
                    <InfoLeft>
                      <DownloadBox href={item.downloadLink}>
                        {item.downloadTitle}
                      </DownloadBox>
                      <IconBox href={item.downloadLink}>
                        <Icons.BiDownload size={20} color="#000" />
                      </IconBox>
                    </InfoLeft>
                    <InfoRight>
                      <PeopleBox>작성자 : {item.owner}</PeopleBox>
                      <DateBox>작성일 : {item.date}</DateBox>
                      <ViewBox>조회수 : {item.view}</ViewBox>
                    </InfoRight>
                  </InfoBox>
                </DetailBox>
              </>
            ) : (
              ""
            )}
          </Box>
        ))}
      </Col>
    </Layout>
  );
};

export default Detail;
