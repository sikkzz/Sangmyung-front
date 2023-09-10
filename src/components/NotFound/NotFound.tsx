import { useNavigate } from "react-router-dom";

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
	ImageBox,
	Img,
} from "./NotFoundElements";
import logo from "../../assets/logo1.png";
import notFoundImg from "../../assets/notfound.png";

function NotFound() {
	const navigate = useNavigate();

	const onPrevClick = () => {
		navigate(-1);
	};

	return (
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
								<Link onClick={onPrevClick}>이전으로</Link>
								<Link href="/">홈으로</Link>
							</LinkBox>
						</Content>
						<ImageBox>
							<Img src={notFoundImg} alt="notFountImg" />
						</ImageBox>
					</ContentBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default NotFound;
