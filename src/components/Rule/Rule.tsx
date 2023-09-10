import {
	Layout,
	Col,
	Box,
	Title,
	NoticeBox,
	Table,
	ColGroup,
	ColStyle,
	MColStyle,
	THead,
	Tr,
	Th,
	TBody,
	Td,
	MTd,
	TdTitle,
	TdLink,
	DownLoadBox,
	DownLoadLink,
	MTdInfoBox,
	MTdInfo,
	MTdDownload,
} from "./RuleElements";
import { RuleData } from "../../constants/data/RuleData";
import Icons from "../../constants/icon";

function Rule() {
	return (
		<Layout>
			<Col>
				<Box>
					<Title>총학생회 회칙 및 세칙</Title>
					<NoticeBox>
						<Table>
							<ColGroup>
								<ColStyle size="8%" />
								<ColStyle size="auto" />
								<ColStyle size="15%" />
								<MColStyle />
							</ColGroup>
							<THead>
								<Tr>
									<Th size="8%">번호</Th>
									<Th size="auto">제목</Th>
									<Th size="15%">다운로드</Th>
								</Tr>
							</THead>
							<TBody>
								<Tr>
									<Td>
										<Icons.HiSpeakerphone size={20} color="#000" />
									</Td>
									<Td>
										<TdTitle>
											<TdLink>회칙 및 세칙 게시판입니다.</TdLink>
										</TdTitle>
									</Td>
									<Td />
								</Tr>
								{RuleData.map((item, index) => (
									<Tr key={index}>
										<Td>{item.id}</Td>
										<Td>
											<TdTitle>
												<TdLink href={item.downloadLink}>{item.title}</TdLink>
											</TdTitle>
										</Td>
										<Td>
											<DownLoadLink href={item.downloadLink}>
												<DownLoadBox>
													<Icons.AiOutlineCloudDownload
														size={28}
														color="#000"
													/>
												</DownLoadBox>
											</DownLoadLink>
										</Td>
										<MTd>
											<TdTitle>
												<TdLink href={item.link}>{item.title}</TdLink>
												<MTdInfoBox>
													<MTdInfo>상명대학교 총학생회</MTdInfo>
													<MTdInfo>{item.date}</MTdInfo>
													<MTdDownload href={item.downloadLink}>
														다운로드
													</MTdDownload>
												</MTdInfoBox>
											</TdTitle>
										</MTd>
									</Tr>
								))}
							</TBody>
						</Table>
					</NoticeBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Rule;
