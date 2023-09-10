import { useLocation } from "react-router-dom";

import HTMLReactParser from "html-react-parser";

import {
	Layout,
	Col,
	Box,
	Title,
	ProfileBox,
	ProfileItemBox,
	ImgBox,
	ImgOutBox,
	Img,
	MImg,
	InfoBox,
	Position,
	Name,
	Major,
	TextBox,
	Text,
} from "./DepartChartElements";
import { DepartData } from "../../constants/data/DepartData";

function DepartChart() {
	const location = useLocation();

	return (
		<Layout>
			<Col>
				<Box>
					<Title>구성원 소개</Title>
					<ProfileBox>
						{DepartData.map((item, index) => (
							<>
								{item.id === location.pathname.split("/")[3]
									? item.subItem.map((item, index) => (
											<ProfileItemBox key={index}>
												<ImgBox>
													<ImgOutBox>
														<Img
															src={item.img}
															alt={item.alt}
															width={item?.size === "squ" ? "160px" : "128px"}
															height={item?.size === "squ" ? "160px" : "164px"}
															radius={item?.size === "squ" ? "50%" : "50px"}
														/>
														<MImg
															src={item.img}
															alt={item.alt}
															width={item?.size === "squ" ? "100px" : "90px"}
															height={item?.size === "squ" ? "100px" : "110px"}
															radius={item?.size === "squ" ? "50%" : "50px"}
														/>
													</ImgOutBox>
												</ImgBox>
												<InfoBox>
													<Position>{item.position}</Position>
													<Name>{item.name}</Name>
													<Major>{item.major}</Major>
												</InfoBox>
												<TextBox>
													<Text>{HTMLReactParser(item.content)}</Text>
												</TextBox>
											</ProfileItemBox>
									  ))
									: ""}
							</>
						))}
					</ProfileBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default DepartChart;
