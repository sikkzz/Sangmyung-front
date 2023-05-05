import {
  Layout,
  Col,
  Box,
  Title,
  IntroBox,
  IntroText,
  ContentBox,
  ItemBox,
  ItemTitleBox,
  ItemIcon,
  ItemTitle,
  ItemSub,
  ItemSns,
  ItemInfoBox,
  ItemImgBox,
  ItemImg,
  ItemTextBox,
  ItemText,
} from "./CentralElements";

import Icons from "../../constants/icon";

import { CentralData1, CentralData2 } from "../../constants/data/CentralData";

const Central = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>중앙운영위원회</Title>
          <IntroBox>
            <IntroText>
              중앙운영위원회는 상명대학교 총학생회의 상설 의결 기구입니다.
              총학생회장단과 단과대학생회장단으로 구성되어 있으며, 매주 정기
              회의를 진행합니다.
            </IntroText>
            <IntroText>
              중앙운영위원회 회의에서는 총학생회의 사업 전반을 공유하며,
              학생회비 예·결산안과 학생회비 배분 비율을 심의하고 조정하는 등
              학생사회를 지탱하고 운영하기 위해 필요한 모든 안건을 다루고
              논의합니다. 학교 본부와 마주하고 대담하는 자리인 총장님과의
              간담회를 갖기도 하며, 각종 행정처와 소통 및 학생들의 의견을
              전달하고 개진하는 역할을 합니다. 또한, 모든 회의마다 회의록을
              작성하여 총학생회 홈페이지에 투명하게 공개합니다.
            </IntroText>
            <IntroText>
              중앙운영위원회는 총학생회와 기층단위 학생회를 이어주는 핵심 소통
              창구이자, 학우 여러분을 대표하고 대변하는 상설 의결 기구로서,
              상명대학교 학우여러분을 위한 학생사회를 위해 항상 노력할 것을
              약속드립니다.
            </IntroText>
          </IntroBox>
          <ContentBox padding="0">
            {CentralData1.map((item, index) => (
              <ItemBox key={index}>
                <ItemTitleBox>
                  <ItemIcon>
                    <Icons.BsCircleFill size={12} color="#000" />
                  </ItemIcon>
                  <ItemTitle>{item.title}</ItemTitle>
                </ItemTitleBox>
                <ItemSub>{item.sub}</ItemSub>
                <ItemSns>{item.sns}</ItemSns>
                <ItemInfoBox>
                  <ItemImgBox>
                    <ItemImg src={item.img} alt={item.alt} />
                  </ItemImgBox>
                  <ItemTextBox>
                    <ItemText>{item.president}</ItemText>
                    <ItemText>{item.vpresident}</ItemText>
                  </ItemTextBox>
                </ItemInfoBox>
              </ItemBox>
            ))}
          </ContentBox>
          <ContentBox padding="0 160px">
            {CentralData2.map((item, index) => (
              <ItemBox key={index}>
                <ItemTitleBox>
                  <ItemIcon>
                    <Icons.BsCircleFill size={12} color="#000" />
                  </ItemIcon>
                  <ItemTitle>{item.title}</ItemTitle>
                </ItemTitleBox>
                <ItemSub>{item.sub}</ItemSub>
                <ItemSns>{item.sns}</ItemSns>
                <ItemInfoBox>
                  <ItemImgBox>
                    <ItemImg src={item.img} alt={item.alt} />
                  </ItemImgBox>
                  <ItemTextBox>
                    <ItemText>{item.president}</ItemText>
                    <ItemText>{item.vpresident}</ItemText>
                  </ItemTextBox>
                </ItemInfoBox>
              </ItemBox>
            ))}
          </ContentBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Central;
