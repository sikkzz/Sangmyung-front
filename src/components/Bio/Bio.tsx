import { useLocation, useNavigate } from "react-router-dom";

import {
	ImageContainer,
	Image,
	TextContainer,
	Title,
	Text,
	MTabBox,
	MTabList,
	MTabItem,
} from "./BioElements";
import { BioData } from "../../constants/data/BioData";
import { MTabData } from "../../constants/data/TabData";
import { Props } from "../DepartContent/DepartContent";
import Tab from "../Tab/Tab";
import { Layout, Col } from "../Tab/TabElements";

function Bio({ state }: Props) {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<>
			{BioData.map(
				(item, index) =>
					state === item.id && (
						<ImageContainer key={index}>
							<Image src={item.img} alt="Bio" />
							<TextContainer>
								<Title>{item.title}</Title>
								<Text>{item.sub}</Text>
							</TextContainer>
						</ImageContainer>
					),
			)}
			<Layout>
				<Col>
					<Tab state={location.pathname.split("/")[2]} />
				</Col>
			</Layout>

			<MTabBox>
				<MTabList>
					{MTabData.map((item) => (
						<>
							{item.id === state
								? item.sub_item.map((item, index) => (
										<MTabItem
											onClick={() => {
												navigate(item.link);
											}}
											key={index}
											style={{
												color:
													location.pathname.split("/")[2] === item.id ||
													location.pathname.split("/")[3] === item.id
														? "rgb(32,71,137)"
														: "rgb(132,134,134)",
												borderBottom:
													location.pathname.split("/")[2] === item.id ||
													location.pathname.split("/")[3] === item.id
														? "1px solid rgb(32,71,137)"
														: "none",
											}}
										>
											{item.item}
										</MTabItem>
								  ))
								: ""}
						</>
					))}
				</MTabList>
			</MTabBox>
		</>
	);
}

export default Bio;
