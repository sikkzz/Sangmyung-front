import { Layout, Col, Box, Title, Text } from "./LandingElements";

const Landing = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title fontSize="48px" fontWeight="700">
            상명대학교 제46대 총학생회 '선[先]'
          </Title>
          <Text fontSize="20px" fontWeight="500">
            안녕하십니까, 상명대학교 학우 여러분. 제46대 총학생회
            '선[先]'입니다.
          </Text>
          <Text fontSize="20px" fontWeight="500">
            온전한 학생사회의 실현을 위해 그 누구보다 먼저 나서 노력하겠습니다.
          </Text>
          <Text fontSize="20px" fontWeight="500">
            학생자치의 재활성화를 통해 학우분들의 목소리가 명확히 변영될 수
            있도록 가장 최전선에서 주체적으로 활동하겠습니다.
          </Text>
          <Text fontSize="20px" fontWeight="500">
            학우들이 원하는, 학우들을 위한 학생회를 만들기위해 노력하겠습니다.
          </Text>
          <Text fontSize="20px" fontWeight="500">
            저희를 지켜봐 주시고 부족함이 있다면 언제든 꾸짖어 주십시오.
          </Text>
          <Text fontSize="20px" fontWeight="500">
            학우들의 목소리를 가슴 깊이 새기고 발전해나가며, 성장하는
            학생자치기구를 만들어 나가겠습니다.
          </Text>
          <Text fontSize="20px" fontWeight="500">
            희망과 행복이 가득한 청춘의 대학생활과 학우 여러분의 당연한 권리를
            위해 달려나가겠습니다.
          </Text>
          <Text fontSize="20px" fontWeight="900">
            학우분들의 외침이 큰 울림이 되어 다시 메아리칠 때까지, 항상 한 걸음
            앞에 서있겠습니다.
          </Text>
          <Text fontSize="20px" fontWeight="500">
            감사합니다.
          </Text>
        </Box>
      </Col>
    </Layout>
  );
};

export default Landing;
