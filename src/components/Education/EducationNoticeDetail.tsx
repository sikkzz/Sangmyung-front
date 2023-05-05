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
  PageBox,
  PageCol,
  PageIconBox,
  PagePrev,
  PagePrevText,
  PagePrevTextLink,
  ListBox,
  ListButton,
} from "./EducationNoticeDetailElements";

import Icons from "../../constants/icon";

import { EducationData } from "../../constants/data/EducationData";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import HTMLReactParser from "html-react-parser";

const EducationNoticeDetail = () => {
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
    EducationData.map((item, index) => (
      <>
        {prevNum === item.id ? setPrevTitle(item.title) : ""}
        {prevNum === item.id ? setPrevLink(item.link) : ""}
        {nextNum === item.id ? setNextTitle(item.title) : ""}
        {nextNum === item.id ? setNextLink(item.link) : ""}
      </>
    ));
  }, [nextNum, param.id, prevNum]);

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
                      <InfoLeft></InfoLeft>
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
                        <ContentText>
                          {HTMLReactParser(item.content)}
                        </ContentText>
                      </ContentTextParagraph>
                    </ContentTextBox>
                    <ContentImgBox>
                      {item.inImg?.map((item, index) => (
                        <ContentImg src={item.img} alt={item.alt} key={index} />
                      ))}
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
                          <PagePrevTextLink>
                            이전글이 없습니다.
                          </PagePrevTextLink>
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
                          <PagePrevTextLink>
                            다음글이 없습니다.
                          </PagePrevTextLink>
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
    </>
  );
};

export default EducationNoticeDetail;
