import {
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
} from "./EducationNoticeDetailElements";

import Icons from "../../constants/icon";

import { EducationData } from "../../constants/data/EducationData";

import { useParams } from "react-router-dom";

const EducationNoticeDetail = () => {
  const param = useParams();

  return (
    <>
      <Layout>
        <Col>
          {EducationData.map((item, index) => (
            <Box key={index}>
              {Number(param.id) === item.id ? (
                <>
                  <Title>선[先]견지명</Title>
                  <InfoBox>
                  <TitleBox>
                    <BoardTitle>{item.title}</BoardTitle>
                  </TitleBox>
                  <InfoInnerBox>
                    <InfoLeft>
                      {item.download ? (
                        <>
                          <DownloadBox href={item.downloadLink}>
                            {item.downloadTitle}
                          </DownloadBox>
                          <IconBox href={item.downloadLink}>
                            <Icons.BiDownload size={20} color="#000" />
                          </IconBox>
                        </>
                      ) : (
                        ""
                      )}
                    </InfoLeft>
                    <InfoRight>
                      <PeopleBox>작성자 : {item.owner}</PeopleBox>
                      <DateBox>작성일 : {item.date}</DateBox>
                      {/* <ViewBox>조회수 : {item.view}</ViewBox> */}
                    </InfoRight>
                  </InfoInnerBox>
                </InfoBox>
                </>
              ) : (
                ""
              )}
            </Box>
          ))}
        </Col>
      </Layout>
    </>
  );
};

export default EducationNoticeDetail;
