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

import HTMLReactParser from "html-react-parser";

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
                      {/* {item.download ? (
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
                      )} */}
                      <PeopleBox>작성자 : {item.owner}</PeopleBox>
                      <DateBox>작성일 : {item.date}</DateBox>
                    </InfoLeft>
                    <InfoRight></InfoRight>
                  </InfoInnerBox>
                </InfoBox>
                <ContentBox>
                  <ContentTextBox>
                    <ContentTitle>[{item.inTitle}]</ContentTitle>
                    <ContentTextParagraph>
                      <ContentText>{HTMLReactParser(item.content)}</ContentText>
                    </ContentTextParagraph>
                  </ContentTextBox>
                  <ContentImgBox>
                    {item.inImg.map((item, index) => (
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
                  <ListButton href="/facility/partnership/all">목록</ListButton>
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
