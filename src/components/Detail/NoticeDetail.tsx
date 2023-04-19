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
  ContentTextStrong,
  PageBox,
  PageCol,
  PageIconBox,
  PagePrev,
  PagePrevText,
  PagePrevTextLink,
  ListBox,
  ListButton,
} from "./NoticeDetailElements";

import Icons from "../../constants/icon";

import { useParams } from "react-router-dom";

import { NoticeData } from "../../constants/data/NoticeData";

import { useEffect, useState } from "react";

import Img from "../../assets/notice/notice1.jpeg";
import Img2 from "../../assets/notice/notice2.jpeg";
import Img3 from "../../assets/notice/notice3.jpeg";

const NoticeDetail = () => {
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
    NoticeData.map((item, index) => (
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
        {NoticeData.map((item, index) => (
          <Box key={index}>
            {Number(param.id) === item.id ? (
              <>
                <Title>공지사항</Title>
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
                      <ViewBox>조회수 : {item.view}</ViewBox>
                    </InfoRight>
                  </InfoInnerBox>
                </InfoBox>
                <ContentBox>
                  <ContentTextBox>
                    <ContentTitle>[{item.title}]</ContentTitle>
                    <ContentTextParagraph>
                      <ContentText>
                        상명대학교 서울캠퍼스 학우 여러분들, 안녕하십니까.
                      </ContentText>
                      <ContentText>
                        금일부터 당선자 확정 공고 아래 임기를 시작하는 첫 출발을
                        알리게 된 2023학년도 제46대 총학생회 선[先]의 대표자
                        총학생회장 이진, 부총학생회장 이사랑입니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        지난 3월 22일부터 24일까지 시행되었던 2023학년도
                        상명대학교 서울캠퍼스 총학생회 및 단과대 학생회 재선거
                        투표 기간에 제46대 총학생회 선거운동본부 ‘선[先]’은,
                        재학생 전체 유권자인 6,185명 중, 2,855개의 득표를
                        기록했습니다.
                      </ContentText>
                      <ContentText>
                        이때, 46.16%라는 투표율 아래 2,721개의 찬성 집계, 그리고
                        75개의 반대와 59개의 기권 집계 결과로 당선이
                        확정되었습니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        그리고 동월 27일인 바로 오늘 중앙선거관리위원회로부터
                        당선자 확정이 공고되었습니다.
                      </ContentText>
                      <ContentText>
                        그렇게 지난 중앙운영위원회의 위원장, 부위원장 혹은
                        선거운동본부의 정, 부후보가 아닌 총학생회의 회장,
                        부회장으로 처음 인사드리게 되었습니다.
                      </ContentText>
                      <ContentText>
                        본 재선거 전 과정에 많은 관심을 가지고 참여해주신 학우
                        여러분께 진심 어린 감사의 인사를 전해드립니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        지난 몇 해의 시간 동안 발족되지 않았던 총학생회 조직을
                        새롭게 발족한 만큼, 막중한 책임감을 항상 상기하며
                        누구보다 근면 성실하게 노력하는 학생 대표자가
                        되겠습니다.
                      </ContentText>
                      <ContentText>
                        2023년은 코로나-19로 그동안 침체되었던 모든 사회 전반이
                        다시금 활기를 찾을 것이 예상되는 만큼, 우리 학내에도
                        새로운 시작을 알리는 온화한 바람을 불어일으킬 수 있도록
                        열정적이고 진취적으로 도전하는 학생회를 만들어나갈 것을
                        약속드립니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        누구나, 열심히 할 것이라고, 노력하겠다고 말할 수는
                        있습니다. 다만, 단순히 말 혹은 글로서 의지를 드러내는
                        것에 그치지 않고, 올 한 해, 정말 잘해보겠습니다.
                      </ContentText>
                      <ContentText>
                        그리고 동시에, '기본'의 가치를 인식하고 학생사회의
                        활성화를 위해 총학생회가 해야 할 기본적이자 중추적인
                        역할에 충실하게 임하는 대표자가 되어 조직을 만들고
                        이끌어 나가겠습니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        다시 한 번, 저희의 뜻과 의지를 관철할 수 있도록, 그리고
                        학생사회를 긍정적인 방향으로 재활성화할 수 있도록,
                        마음을 다잡고자 합니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentTextStrong>
                        하나. 제46대 총학생회 선[先]은, 육천 상명인의 권익 보장
                        및 실현을 위하여 한 걸음 앞에 먼저 서 있겠습니다.
                      </ContentTextStrong>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentTextStrong>
                        둘. 제46대 총학생회 선[先]은, 육천 상명인의 학교생활
                        전반을 책임지고 우리의 청춘의 순간이자 녹음의 계절이
                        조명받을 수 있도록 한 걸음 앞에 먼저 서 있겠습니다.
                      </ContentTextStrong>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentTextStrong>
                        셋. 제46대 총학생회 선[先]은, 육천 상명인의 목소리가
                        울림이 되어 메아리칠 때까지, 한 걸음 앞에 먼저 서
                        있겠습니다.
                      </ContentTextStrong>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        학생에 의한, 학생을 위한 학교를 만들어나가는 모든 과정에
                        많은 관심을 부탁드립니다.
                      </ContentText>
                      <ContentText>
                        본 제46대 총학생회 선[先]이 걸어가는 모든 순간을, 학우
                        여러분들과 함께하겠습니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        그리고, 때로는 따뜻한 칭찬으로, 때로는 엄중한 비판으로
                        저희가 함께 만들어 갈 한 해의 방향을 잡아주시길
                        부탁드립니다.
                      </ContentText>
                      <ContentText>
                        총학생회가 나아가야 할 방향성을 대표자들이 명확히 인식할
                        수 있도록, 그리고 저희가 나아가는 과정에서 자주 뒤돌아볼
                        수 있도록 함께 손잡고 지켜봐 주십시오.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        이는 우리 상명대학교의 학우분들께서만 해주실 수 있는
                        가장 중요한 일이라고 생각합니다.
                      </ContentText>
                      <ContentText>
                        총학생회의 대표자들은, 학우분들을 위해 할 수 있는 일을
                        수행하기 위해 당면한 현안을 명확히 짚어가며 다양한
                        사업을 추진할 수 있도록 하겠습니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>
                        상명대학교 학우 여러분들, 한 해 동안 잘 부탁드립니다.
                        다시 한번 진심으로 감사하다는 인사 올립니다.
                      </ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentText>감사합니다.</ContentText>
                    </ContentTextParagraph>
                    <ContentTextParagraph>
                      <ContentTitle>
                        - 제46대 총학생회 선[先] 대표자 총학생회장 이진,
                        부총학생회장 이사랑 배상 -
                      </ContentTitle>
                    </ContentTextParagraph>
                  </ContentTextBox>
                  <ContentImgBox>
                    <ContentImg src={Img} alt="img1" />
                    <ContentImg src={Img2} alt="img2" />
                    <ContentImg src={Img3} alt="img3" />
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

export default NoticeDetail;
