import {
	Layout,
	Col,
	Box,
	ImgBox,
	Image,
	GreetingBox,
	LogoBox,
	LogoInnerBox,
	Logo,
	TextBox,
	TitleWrapper,
	Title,
	TextWrapper,
	SubWrapper,
	Sub,
	Text,
} from "./GreetingElements";
import Img2 from "../../assets/logo1.png";
import Abc from "../../assets/profile3.png";

function Greeting() {
	return (
		<Layout>
			<Col>
				<Box>
					<ImgBox>
						<Image src={Abc} alt="profile" />
					</ImgBox>
					<GreetingBox>
						<LogoBox>
							<LogoInnerBox>
								<Logo src={Img2} alt="Logo" />
							</LogoInnerBox>
						</LogoBox>
						<TextBox>
							<TitleWrapper>
								<Title>제46대 상명대학교 총학생회 '선[先]'</Title>
							</TitleWrapper>
							<TextWrapper>
								<Text>
									제46대 총학생회 '선[先]'은 온전한 학생 사회의 실현을 위해 그
									누구보다 먼저 나서 노력하고, 학생자치의 재활성화를 통해
									학우분들의 목소리가 명확히 반영될 수 있도록 가장 최전선에서
									주체적으로 활동 및 봉사하는 학생회를 만들어 나가겠습니다.
								</Text>
							</TextWrapper>
							<SubWrapper>
								<Sub weight="500">- 총학생회장 : 이진(010-6577-5177)</Sub>
								<Sub weight="500">- 부학생회장 : 이사랑(010-8762-3370)</Sub>
								<Sub weight="500">- 홈페이지담당 : 김준식(010-3341-2053)</Sub>
							</SubWrapper>
							<SubWrapper>
								<Sub weight="500">- 장소 : 학생회관 H212호 총학생회실</Sub>
							</SubWrapper>
							<SubWrapper>
								<Sub weight="700">
									"그대 외침 닿을 때까지, 한 걸음 앞에 먼저 선[先]"
								</Sub>
							</SubWrapper>
						</TextBox>
					</GreetingBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Greeting;
