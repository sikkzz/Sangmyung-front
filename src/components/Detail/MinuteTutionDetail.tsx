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
  ContentBox,
  ContentImgBox,
  ContentImg,
  ContentTextBox,
  ContentTitle,
  ContentTextParagraph,
  ContentText,
  ContentTextIndent,
  PageBox,
  PageCol,
  PageIconBox,
  PagePrev,
  PagePrevText,
  PagePrevTextLink,
  ListBox,
  ListButton,
} from "./NoticeDetailElements";

import { useState, useEffect } from "react";

import { TutionData } from "../../constants/data/MinuteData";

import { useParams } from "react-router-dom";

import Icons from "../../constants/icon";

import Img from "../../assets/minute/center/1-1.jpg";
import Img2 from "../../assets/minute/center/1-2.jpg";
import Img3 from "../../assets/minute/center/1-3.jpg";
import Img4 from "../../assets/minute/center/1-4.jpg";
import Img5 from "../../assets/minute/center/1-5.jpg";
import Img6 from "../../assets/minute/center/1-6.jpg";
import Img7 from "../../assets/minute/center/1-7.jpg";

const MinuteTutionDetail = () => {
  const param = useParams();

  const [prevNum, setPrevNum] = useState(0);
  const [nextNum, setNextNum] = useState(0);
  const [nextTitle, setNextTitle] = useState("");
  const [prevTitle, setPrevTitle] = useState("");
  const [prevLink, setPrevLink] = useState("");
  const [nextLink, setNextLink] = useState("");

  useEffect(() => {
    setPrevNum(Number(param.id) - 1);
    setNextNum(Number(param.id) + 1);
    TutionData.map((item, index) => (
      <>
        {prevNum === item.id ? setPrevTitle(item.title) : ""}
        {prevNum === item.id ? setPrevLink(item.link) : ""}
        {nextNum === item.id ? setNextTitle(item.title) : ""}
        {nextNum === item.id ? setNextLink(item.link) : ""}
      </>
    ));
  }, [nextNum, param.id, prevNum]);

  return (
    <Layout>
      <Col>
        {TutionData.map((item, index) => (
          <Box key={index}>
            {Number(param.id) === item.id ? (
              <>
                <Title>등록금심의위원회 회의록</Title>
                <InfoBox>
                  <TitleBox>
                    <BoardTitle>{item.title}</BoardTitle>
                  </TitleBox>
                  <InfoInnerBox>
                    <InfoLeft>
                      <DownloadBox href={item.downloadLink}>
                        {item.title}
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
                  </InfoInnerBox>
                </InfoBox>
                <ContentBox>
                  <ContentTextBox>
                    <ContentTitle>[{item.title}]</ContentTitle>
                    <ContentTextParagraph>
                      <ContentText>
                        일시: 2023.04.10.(월) 18:30 ~ 19:30
                      </ContentText>
                      <ContentText>장소: 미래백년관 R103</ContentText>
                      <ContentText>
                        참석자: 학생 대표자(총학생회, 단과대학생회, 학과별
                        학생회) 34인
                      </ContentText>
                      <ContentText>안건: 1) 총학생회 집행부 소개</ContentText>
                      <ContentTextIndent>
                        2) 총학생회 연간 계획 브리핑
                      </ContentTextIndent>
                      <ContentTextIndent>
                        3) 총학생회 교원 간담회 안건 브리핑
                      </ContentTextIndent>
                      <ContentTextIndent>
                        4) 대동제(학생축제) 시행 관련 초안 안내
                      </ContentTextIndent>
                      <ContentTextIndent>5) 대표자 질의</ContentTextIndent>
                    </ContentTextParagraph>
                  </ContentTextBox>
                  <ContentImgBox>
                    <ContentImg src={Img} alt="img1" />
                    <ContentImg src={Img2} alt="img2" />
                    <ContentImg src={Img3} alt="img3" />
                    <ContentImg src={Img4} alt="img4" />
                    <ContentImg src={Img5} alt="img5" />
                    <ContentImg src={Img6} alt="img6" />
                    <ContentImg src={Img7} alt="img7" />
                  </ContentImgBox>
                </ContentBox>
                <PageBox>
                  <PageCol>
                    <PageIconBox>
                      <Icons.IoChevronUp size={16} color="#000" />
                    </PageIconBox>
                    <PagePrev>이전글</PagePrev>
                    <PagePrevText>
                      {item.id === 1 ? (
                        <PagePrevTextLink>이전글이 없습니다.</PagePrevTextLink>
                      ) : (
                        <PagePrevTextLink href={prevLink}>
                          {prevTitle}
                        </PagePrevTextLink>
                      )}
                    </PagePrevText>
                  </PageCol>
                  <PageCol>
                    <PageIconBox>
                      <Icons.IoChevronDown size={16} color="#000" />
                    </PageIconBox>
                    <PagePrev>다음글</PagePrev>
                    <PagePrevText>
                      {item.id !== 2 ? (
                        <PagePrevTextLink href={nextLink}>
                          {nextTitle}
                        </PagePrevTextLink>
                      ) : (
                        <PagePrevTextLink>다음글이 없습니다.</PagePrevTextLink>
                      )}
                    </PagePrevText>
                  </PageCol>
                </PageBox>
                <ListBox>
                  <ListButton href="/minute/center">목록</ListButton>
                </ListBox>
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

export default MinuteTutionDetail;
