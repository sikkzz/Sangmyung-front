import { useNavigate, useLocation } from "react-router-dom";

import AdministrativeMinute from "./AdministrativeMinute";
import CenterMinute from "./CenterMinute";
import {
	Layout,
	Col,
	Box,
	Title,
	NoticeBox,
	Table,
	ColGroup,
	ColStyle,
	THead,
	Tr,
	Th,
	TBody,
	Td,
	TdTitle,
	TdLink,
	TabBox,
	TabInnerBox,
	TabList,
	TabItem,
	TabItemActive,
	MColStyle,
} from "./MinuteElements";
import RepresentativeMinute from "./RepresentativeMinute";
import TutionMinute from "./TutionMinute";
import { MinuteData } from "../../constants/data/MinuteData";
import Icons from "../../constants/icon";

type Props = {
	state: string;
};

function Minute({ state }: Props) {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Layout>
			<Col>
				<Box>
					<TabBox>
						<TabInnerBox>
							<TabList>
								{MinuteData.map((item, index) => (
									<div key={index} style={{ display: "inline-block" }}>
										{state === item.id ? (
											<TabItemActive
												onClick={() => {
													navigate(item.link);
												}}
											>
												{item.title}
											</TabItemActive>
										) : (
											<TabItem
												onClick={() => {
													navigate(item.link);
												}}
											>
												{item.title}
											</TabItem>
										)}
									</div>
								))}
							</TabList>
						</TabInnerBox>
					</TabBox>
					{MinuteData.map((item, index) => (
						<Title key={index}>
							{location.pathname.split("/")[3] === item.id ? item.title : ""}
						</Title>
					))}
					<NoticeBox>
						<Table>
							<ColGroup>
								<ColStyle size='8%' />
								<ColStyle size='auto' />
								<ColStyle size='12%' />
								<ColStyle size='12%' />
								<MColStyle />
							</ColGroup>
							<THead>
								<Tr>
									<Th size='8%'>번호</Th>
									<Th size='auto'>제목</Th>
									<Th size='12%'>작성자</Th>
									<Th size='12%'>작성일</Th>
								</Tr>
							</THead>
							<TBody>
								<Tr>
									<Td>
										<Icons.HiSpeakerphone size={20} color='#000' />
									</Td>
									<Td>
										<TdTitle>
											{MinuteData.map((item, index) => (
												<TdLink key={index}>
													{location.pathname.split("/")[3] === item.id
														? item.title
														: ""}
												</TdLink>
											))}{" "}
											게시판입니다.
										</TdTitle>
									</Td>
									<Td />
									<Td />
								</Tr>
								{
									{
										center: <CenterMinute />,
										representative: <RepresentativeMinute />,
										tution: <TutionMinute />,
										administrative: <AdministrativeMinute />,
									}[location.pathname.split("/")[3]]
								}
							</TBody>
						</Table>
					</NoticeBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Minute;
