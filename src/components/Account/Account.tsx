import {
	Layout,
	Col,
	Box,
	Title,
	BoardBox,
	Board,
	BoardCol,
	BoardItem,
	BoardLink,
	BoardImg,
} from "./AccountElements";
import { AccountData } from "../../constants/data/AccountData";

function Account() {
	return (
		<Layout>
			<Col>
				<Box>
					<Title>결산 목록</Title>
					<BoardBox>
						<Board>
							<BoardCol>
								{AccountData.map((item, index) => (
									<BoardItem key={index}>
										<BoardLink href={item.link}>
											<BoardImg src={item.img} alt={item.alt} />
										</BoardLink>
									</BoardItem>
								))}
							</BoardCol>
						</Board>
					</BoardBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Account;
