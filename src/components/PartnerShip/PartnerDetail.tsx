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
} from "./PartnerDetailElements";

import {
  ContentBox,
  ContentImgBox,
  ContentImg,
  ContentTextBox,
  ContentTitle,
  ContentTextParagraph,
  ContentText,
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
} from "../Detail/NoticeDetailElements";

import Icons from "../../constants/icon";

import { PartnerData } from "../../constants/data/PartnerData";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Img from "../../assets/partner/safe/1.png";
import Img2 from "../../assets/partner/safe/2.jpeg";
import Img3 from "../../assets/partner/safe/3.jpeg";
import Img4 from "../../assets/partner/safe/4.jpeg";

const PartnerDetail = () => {
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
    PartnerData.map((item, index) => (
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
        {PartnerData.map((item, index) => (
          <Box key={index}>
            {Number(param.id) === item.id ? (
              <>
                <Title>제휴처 안내</Title>
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
                    </InfoRight>
                  </InfoInnerBox>
                </InfoBox>
                <ContentBox>
                  <ContentTextBox>
                    <ContentTitle>[{item.title}]</ContentTitle>
                    <ContentTextParagraph>
                      <ContentText>첫 번째 최선(先), 세이프닥</ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        🌟더 밝게 빛날 나를 위한 선택!🌟
                        <br />
                        "안전하고 검증된 우리 학교 의료복지!“
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        ✅ 대상: 상명대학교 총학생회 학생 및 가족 (졸업생,
                        휴학생 포함)
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        ✅ 혜택 내용
                        <br />
                        1) 전국 250개 제휴 병원 비급여 항목 우대 할인(최대 49%)
                        <br />
                        2) 인기시술 : 가다실9가, 충치/임플란트, 치아교정,
                        스마일라식, 기능코, 눈매교정, 피부관리,
                        <br />
                        점제거, 리프팅, 보톡스/필러, 도수치료, 한약, 반영구,
                        모발이식, 건강검진, 심리상담
                        <br />
                        3) 기간: ~ 23.12.31
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        ✅ 상명대학교 전용 혜택 링크:
                        <ContentTextLink href="https://smu-seoul.safedoc1.com">
                          https://smu-seoul.safedoc1.com/
                        </ContentTextLink>
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        💙 제휴병원 이용 방법 및 앱 설치
                        <br />
                        1) 전화예약 : 02 - 2088 - 8677
                        <br />
                        2) 카톡채널 '세이프닥' 검색
                        <br />
                        3) 어플로 언제 어디서나!
                        <br />
                        📱구글스토어 -{" "}
                        <ContentTextLink href="https://url.kr/jv1s2f">
                          https://url.kr/jv1s2f
                        </ContentTextLink>
                        <br />
                        📱앱스토어 -{" "}
                        <ContentTextLink href="https://url.kr/kj4g7o">
                          https://url.kr/kj4g7o
                        </ContentTextLink>
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        💙예약 신청 시, 꼭 “상명대학교”를 말씀해주셔야 제휴
                        혜택이 적용됩니다.💙
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        앞으로도 지속적으로 업로드 될 💡N 번째
                        최선(先)💡콘텐츠에 많은 관심과 이용 부탁드립니다!
                        감사합니다.
                      </ContentText>
                    </ContentTextParagraph>
                  </ContentTextBox>
                  <ContentImgBox>
                    <ContentImg src={Img} alt="img1" />
                    <ContentImg src={Img2} alt="img2" />
                    <ContentImg src={Img3} alt="img3" />
                    <ContentImg src={Img4} alt="img4" />
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
                      {item.id !== 3 ? (
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
                  <ListButton href="/notice">목록</ListButton>
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

export default PartnerDetail;
