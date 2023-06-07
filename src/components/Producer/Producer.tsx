import {
  Layout,
  Col,
  Box,
  ProfileBox,
  ProfileImgBox,
  ImgBox,
  Img,
  ProfileTextBox,
  Title,
  Text,
} from "./ProducerElements";

import Image from "../../assets/profile.jpg";

const Producer = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <ProfileBox>
            {/* <ProfileImgBox>
              <ImgBox>
                <Img src={Image} alt="profile" />
              </ImgBox>
              <Title>김준식</Title>
              <Title>SMU Computer Science </Title>
              <Title>FE Developer</Title>
            </ProfileImgBox>
            <ProfileTextBox>
              <Text>- 1998.06 서울 출생</Text>
              <Text>- 2017.02 선린인터넷고등학교 졸업</Text>
              <Text>
                - 2017.03 상명대학교 서울캠퍼스 SW융합학부 전기공학전공 입학
              </Text>
              <Text>
                - 2017.03 상명대학교 서울캠퍼스 중앙동아리 토네이도 19기
              </Text>
              <Text>- 2017.03 제1대 융합공과대학 학생회 도킹 총무부원</Text>
              <Text>- 2018.03 제2대 융합공과대학 학생회 공감 홍보부원</Text>
              <Text>
                - 2018.03 상명대학교 서울캠퍼스 중앙동아리 토네이도 부기장
              </Text>
              <Text>- 2019.03 제3대 융합공과대학 학생회 cont-act 홍보부원</Text>
              <Text>- 2020.11 제1포병여단 육군 병장 만기 전역</Text>
              <Text>- 2021.03 제5대 융합공과대학 학생회 다온 홍보부원</Text>
              <Text>- 2022.03 제6대 융합공과대학 학생회 리턴 복지협력국장</Text>
              <Text>- 2023.03 제46대 총학생회 '선[先]' 재정사무국장</Text>
            </ProfileTextBox> */}
          </ProfileBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Producer;
