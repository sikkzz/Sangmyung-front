import {
  Layout,
  Col,
  Box,
  HeadBox,
  LogoBox,
  Logo,
  ContentBox,
  Content,
  Title,
  Text,
  LinkBox,
  Link,
} from "./NotFoundElements";

import logo from "../../assets/logo1.png";

const NotFound = () => {
  return (
    <>
      <Layout>
        <Col>
          <Box>
            <HeadBox>
              <LogoBox>
                <Logo src={logo} alt="logo" />
              </LogoBox>
            </HeadBox>
            <ContentBox>
              <Content>
                <Title>404 ERROR</Title>
                <Text>죄송합니다. 페이지를 찾을 수 없습니다.</Text>
                <Text>존재하지 않는 주소를 입력하셨거나</Text>
                <Text>
                  요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
                </Text>
                <LinkBox>
                  <Link href="/">홈으로</Link>
                </LinkBox>
              </Content>
            </ContentBox>
          </Box>
        </Col>
      </Layout>
    </>
  );
};

export default NotFound;
