import React from "react";

import { Props } from "./DepartContent";
import {
	Layout,
	Col,
	Box,
	BoxLeft,
	BoxRight,
	ImageBox,
	Image,
	TextBox,
	Content,
} from "./DepartIntroduceElements";
import { DepartIntroData } from "../../constants/data/DepartData";

const DepartIntroduce: React.FC<Props> = ({ state }) => {
	return (
		<Layout>
			<Col>
				<Box>
					<BoxLeft>
						{DepartIntroData.map((item, index) => (
							<div key={index}>
								{item.id === state ? (
									<>
										<ImageBox>
											<Image src={item.img} alt={item.alt} />
										</ImageBox>

										<TextBox
											fontSize="26px"
											lineHeight="initial"
											textAlign="center"
										>
											{item.title}
										</TextBox>
										<TextBox
											fontSize="18px"
											lineHeight="initial"
											textAlign="center"
										>
											{item.sub}
										</TextBox>
									</>
								) : (
									""
								)}
							</div>
						))}
					</BoxLeft>
					<BoxRight>
						{DepartIntroData.map((item, index) => (
							<div key={index}>
								{item.id === state ? <Content>{item.contents}</Content> : ""}
							</div>
						))}
					</BoxRight>
				</Box>
			</Col>
		</Layout>
	);
};

export default DepartIntroduce;
