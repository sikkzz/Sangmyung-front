import {
  Layout,
  Col,
  Box,
  LeftBox,
  ProfileBox,
  ImgBox,
  Img,
  Name,
  Sub,
  IconList,
  IconListItem,
  Icon,
  Text,
  RightBox,
  IntroBox,
  Title,
  MediaTitle,
  BadgeBox,
  Badge,
  BadgeImg,
  HistoryBox,
  HistoryText,
  TechBox,
  TechText,
} from "./ProducerElements";

import Image2 from "../../assets/profile2.png";

import Icons from "../../constants/icon";

import HTMLReactParser from "html-react-parser";

const Producer = () => {
  const text =
    "상명대학교 서울캠퍼스 제46대 총학생회 선[先] 재정사무국장, FE Developer 김준식입니다. 학우분들의 불편함을 덜어드리고 소통 및 명확한 정보 전달을<br/>위해 홈페이지를 제작하게 되었습니다. 홈페이지를 이용하시면서 불편한 점이나 건의사항이 있으시면 언제든 편하신 창구를 통해 연락주시면 감사하겠습니다.";

  const text2 =
    "상명대학교 서울캠퍼스 제46대 총학생회 선[先] 재정사무국장, FE Developer 김준식입니다. 학우분들의 불편함을 덜어드리고 소통 및 명확한 정보 전달을 위해 홈페이지를 제작하게 되었습니다. 홈페이지를 이용하시면서 불편한 점이나 건의사항이 있으시면 언제든 편하신 창구를 통해 연락주시면 감사하겠습니다.";

  return (
    <Layout>
      <Col>
        <Box>
          <LeftBox>
            <ProfileBox>
              <ImgBox>
                <Img src={Image2} alt="image" />
              </ImgBox>
              <Name>KimJunSik</Name>
              <Sub>FE Developer</Sub>
              <IconList>
                <IconListItem>
                  <Icon>
                    <Icons.FaSchool size={20} color="#666" />
                  </Icon>
                  <Text>SMU Computer Science</Text>
                </IconListItem>
                <IconListItem>
                  <Icon>
                    <Icons.HiOutlineOfficeBuilding size={20} color="#666" />
                  </Icon>
                  <Text>총학생회 선[先] 재정사무국장</Text>
                </IconListItem>
                <IconListItem>
                  <Icon>
                    <Icons.AiOutlineMail size={20} color="#666" />
                  </Icon>
                  <Text>sling0623@gmail.com</Text>
                </IconListItem>
                <IconListItem>
                  <Icon>
                    <Icons.AiFillGithub size={20} color="#666" />
                  </Icon>
                  <Text>sikkzz</Text>
                </IconListItem>
              </IconList>
            </ProfileBox>
          </LeftBox>
          <RightBox>
            <IntroBox>
              <Title>{HTMLReactParser(text)}</Title>
              <MediaTitle>{HTMLReactParser(text2)}</MediaTitle>
              <BadgeBox>
                <Badge
                  href="https://www.instagram.com/sik_k_da"
                  target="_blank"
                >
                  <BadgeImg src="https://img.shields.io/badge/Insta-E4405F?style=flat-square&logo=Instagram&logoColor=white" />
                </Badge>
                <Badge href="malito:sling0623@gmail.com">
                  <BadgeImg src="https://img.shields.io/badge/sling0623@gmail.com-EA4335?style=flat-square&logo=Gmail&logoColor=white" />
                </Badge>
                <Badge href="https://github.com/sikkzz">
                  <BadgeImg src="https://img.shields.io/badge/sikkzz-000?style=flat-square&logo=Github&logoColor=white" />
                </Badge>
              </BadgeBox>
              <HistoryBox>
                <HistoryText>
                  - 2017.03 상명대학교 서울캠퍼스 중앙동아리 토네이도 19기
                </HistoryText>
                <HistoryText>
                  - 2017.03 제1대 융합공과대학 학생회 도킹 총무부원
                </HistoryText>
                <HistoryText>
                  - 2018.03 제2대 융합공과대학 학생회 공감 홍보부원
                </HistoryText>
                <HistoryText>
                  - 2018.03 상명대학교 서울캠퍼스 중앙동아리 토네이도 부기장
                </HistoryText>
                <HistoryText>
                  - 2019.03 제3대 융합공과대학 학생회 cont-act 홍보부원
                </HistoryText>
                <HistoryText>
                  - 2021.03 제5대 융합공과대학 학생회 다온 홍보부원
                </HistoryText>
                <HistoryText>
                  - 2022.03 제6대 융합공과대학 학생회 리턴 복지협력국장
                </HistoryText>
                <HistoryText>
                  - 2023.03 제46대 총학생회 선[先] 재정사무국장
                </HistoryText>
              </HistoryBox>
              <TechBox>
                <TechText>🛠 Tech Stack</TechText>
              </TechBox>
              <BadgeBox>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />
                </Badge>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />
                </Badge>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black" />
                </Badge>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" />
                </Badge>
              </BadgeBox>
              <BadgeBox>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black" />
                </Badge>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Gatsby&logoColor=white" />
                </Badge>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white" />
                </Badge>
                <Badge>
                  <BadgeImg src="https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=Gatsby&logoColor=white" />
                </Badge>
              </BadgeBox>
            </IntroBox>
          </RightBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Producer;
