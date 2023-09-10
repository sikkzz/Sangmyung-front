import React from "react";

import { Props } from "./DepartContent";
import {
	Layout,
	Col,
	Box,
	Title,
	WorkBox,
	WorkInnerBox,
	ItemBox,
	IconBox,
	WorkTitle,
	WorkContent,
} from "./DepartWorkElements";
import { DepartWorkData } from "../../constants/data/DepartData";

const DepartWork: React.FC<Props> = ({ state }) => {
	return (
		<Layout>
			<Col>
				<Box>
					<Title>주요업무</Title>
					<WorkBox>
						{DepartWorkData.map((item, index) => (
							<>
								{item.id === state
									? item.work.map((item, index) => (
											<WorkInnerBox key={index}>
												<ItemBox>
													<IconBox>{item.workIcon}</IconBox>
												</ItemBox>
												<WorkTitle>{item.workTitle}</WorkTitle>
												<WorkContent>{item.workContent}</WorkContent>
											</WorkInnerBox>
									  ))
									: ""}
							</>
						))}
					</WorkBox>
				</Box>
			</Col>
		</Layout>
	);
};

export default DepartWork;
