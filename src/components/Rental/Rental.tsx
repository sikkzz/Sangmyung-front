import {
	Layout,
	Col,
	Box,
	Title,
	Location,
	DownloadBox,
	Line,
	Link,
	IconBox,
	Table,
	ColGroup,
	ColStyle,
	THead,
	Tr,
	Th,
	TBody,
	Td,
} from "./RentalElements";
import Icons from "../../constants/icon";

function Rental() {
	return (
		<Layout>
			<Col>
				<Box>
					<Title>물품대여매뉴얼</Title>
					<Location>총학생회실: 학생회관 2층 총학생회실(H212)</Location>
					<DownloadBox>
						<Link>물품대여매뉴얼</Link>
						<IconBox>
							<Icons.FcDocument size={24} />
						</IconBox>
					</DownloadBox>
					<Line />
					<Title>물품대여현황</Title>
					<Table>
						<ColGroup>
							<ColStyle />
							<ColStyle />
						</ColGroup>
						<THead>
							<Tr>
								<Th>물품명</Th>
								<Th>물품재고</Th>
								<Th>현재재고</Th>
							</Tr>
						</THead>
						<TBody>
							<Tr>
								<Td>보조배터리</Td>
								<Td>10</Td>
								<Td>10</Td>
							</Tr>
							<Tr>
								<Td>케이블</Td>
								<Td>10</Td>
								<Td>10</Td>
							</Tr>
							<Tr>
								<Td>노트북충전기</Td>
								<Td>3</Td>
								<Td>3</Td>
							</Tr>
							<Tr>
								<Td>레이저 포인터</Td>
								<Td>3</Td>
								<Td>3</Td>
							</Tr>
							<Tr>
								<Td>우산</Td>
								<Td>30</Td>
								<Td>30</Td>
							</Tr>
							<Tr>
								<Td>인공눈물</Td>
								<Td>100</Td>
								<Td />
							</Tr>
							<Tr>
								<Td>여성용품</Td>
								<Td>30</Td>
								<Td />
							</Tr>
							<Tr>
								<Td>비상약</Td>
								<Td />
								<Td />
							</Tr>
						</TBody>
					</Table>
				</Box>
			</Col>
		</Layout>
	);
}

export default Rental;
