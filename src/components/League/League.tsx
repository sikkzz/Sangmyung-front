import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addMonths, subMonths, format } from "date-fns";

import {
	Layout,
	Col,
	Box,
	DateBox,
	Month,
	IconBox,
	ResultBox,
	Table,
	ColGroup,
	TableCol,
	THead,
	Tr,
	Th,
	TBody,
	Td,
	TdMatch,
	TdTeam,
	TdImageBox,
	TdImage,
	TdTitle,
	TdTitle2,
	ScoreBox,
	TdScore,
	TdSpan,
	TdScore2,
	TdEnd,
	TdStart,
	Detail,
	DetailBox,
} from "./LeagueElements";
import {
	GameBox,
	Content,
	Title,
	LineUpBox,
	TeamBox,
	ImgBox,
	Img,
	Text,
	MScoreBox,
	Score,
	ScoreSpan,
	StateSpan,
	StateSpan2,
	InfoBox,
	Info,
} from "./LeagueMediaElements";
import { LeagueData } from "../../constants/data/LeagueData";
import Icons from "../../constants/icon";

type Props = {
	id: number;
	date: string;
	time: string;
	img1: string;
	alt1: string;
	title1: string;
	score1: string;
	img2: string;
	alt2: string;
	title2: string;
	score2: string;
	state: string;
	score3: string;
	score4: string;
};

function League() {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [posts, setPosts] = useState([] as any);

	const LeagueDataReverse = LeagueData.reverse();

	const navigate = useNavigate();

	useEffect(() => {
		setPosts(
			LeagueDataReverse.filter((item: any) => {
				return item.month === Number(format(currentMonth, "M"));
			}),
		);
	}, [currentMonth]);

	const prevMonth = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const nextMonth = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	return (
		<Layout>
			<Col>
				<Box>
					<DateBox>
						<IconBox onClick={prevMonth}>
							<Icons.AiOutlineLeft size={24} color="#808080" />
						</IconBox>
						<Month>
							{format(currentMonth, "yyyy")}년 {format(currentMonth, "MM")}월
						</Month>
						<IconBox onClick={nextMonth}>
							<Icons.AiOutlineRight size={24} color="#808080" />
						</IconBox>
					</DateBox>
					<ResultBox>
						<Table>
							<ColGroup>
								<TableCol size="12%" />
								<TableCol size="12%" />
								<TableCol size="auto" />
								<TableCol size="12%" />
							</ColGroup>
							<THead>
								<Tr>
									<Th size="12%">날짜</Th>
									<Th size="12%">시간</Th>
									<Th size="auto">매치업</Th>
									<Th size="12%" />
								</Tr>
							</THead>
							<TBody>
								{posts.map(
									({
										id,
										date,
										time,
										img1,
										alt1,
										title1,
										score3,
										score1,
										score2,
										score4,
										title2,
										img2,
										alt2,
										state,
									}: Props) => (
										<Tr key={id}>
											<Td>{date}</Td>
											<Td>{time}</Td>
											<Td>
												<TdMatch>
													<TdTeam>
														<TdImageBox>
															<TdImage src={img1} alt={alt1} />
														</TdImageBox>
														<TdTitle>{title1}</TdTitle>
													</TdTeam>
													{score3 ? (
														<ScoreBox>
															<TdScore>
																{score1}
																<TdSpan>:</TdSpan>
																{score2}
															</TdScore>
															<TdScore2>
																{score3}
																<TdSpan>:</TdSpan>
																{score4}
															</TdScore2>
														</ScoreBox>
													) : (
														<>
															{state === "경기전" ? (
																<TdScore>
																	<TdSpan>VS</TdSpan>
																</TdScore>
															) : (
																<TdScore>
																	{score1}
																	<TdSpan>:</TdSpan>
																	{score2}
																</TdScore>
															)}
														</>
													)}
													<TdTeam>
														<TdTitle2>{title2}</TdTitle2>
														<TdImageBox>
															<TdImage src={img2} alt={alt2} />
														</TdImageBox>
													</TdTeam>
												</TdMatch>
												{state === "경기종료" ? (
													<TdEnd>{state}</TdEnd>
												) : (
													<TdStart>{state}</TdStart>
												)}
											</Td>
											<Td>
												<Detail
												// onClick={() => navigate(`/work/league/detail/${id}`)}
												>
													세부정보
													<DetailBox>
														<Icons.GiSoccerBall size={16} color="#fff" />
													</DetailBox>
												</Detail>
											</Td>
										</Tr>
									),
								)}
							</TBody>
						</Table>
						<GameBox>
							{posts.map(
								({
									id,
									date,
									time,
									img1,
									alt1,
									title1,
									score1,
									score2,
									score3,
									score4,
									title2,
									img2,
									alt2,
									state,
								}: Props) => (
									<Content key={id}>
										<Title>{date}</Title>
										<Title>{time}</Title>
										<LineUpBox>
											<TeamBox>
												<ImgBox>
													<Img src={img1} alt={alt1} />
												</ImgBox>
												<Text>{title1}</Text>
											</TeamBox>
											<MScoreBox>
												{state === "경기전" ? (
													<Score>VS</Score>
												) : (
													<Score>
														{score1}
														<ScoreSpan>:</ScoreSpan>
														{score2}
													</Score>
												)}
												{state === "경기종료" ? (
													<StateSpan>{state}</StateSpan>
												) : (
													<StateSpan2>{state}</StateSpan2>
												)}
											</MScoreBox>
											<TeamBox>
												<ImgBox>
													<Img src={img2} alt={alt2} />
												</ImgBox>
												<Text>{title2}</Text>
											</TeamBox>
										</LineUpBox>
										<InfoBox
										// onClick={() => navigate(`/work/league/detail/${id}`)}
										>
											세부정보
											<Info>
												<Icons.GiSoccerBall size={16} color="#fff" />
											</Info>
										</InfoBox>
									</Content>
								),
							)}
						</GameBox>
					</ResultBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default League;
