import {
	Tr,
	Td,
	TdTitle,
	TdLink,
	MTd,
	MTdInfoBox,
	MTdInfo,
} from "./MinuteElements";
import { CenterData } from "../../constants/data/MinuteData";

function CenterMinute() {
	return (
		<>
			{CenterData.map((item, index) => (
				<Tr key={index}>
					<Td>{item.id}</Td>
					<Td>
						<TdTitle>
							<TdLink href={item.link}>{item.title}</TdLink>
						</TdTitle>
					</Td>
					<Td>{item.owner}</Td>
					<Td>{item.date}</Td>
					<MTd>
						<TdTitle>
							<TdLink href={item.link}>{item.title}</TdLink>
							<MTdInfoBox>
								<MTdInfo>상명대학교 총학생회</MTdInfo>
								<MTdInfo>{item.date}</MTdInfo>
							</MTdInfoBox>
						</TdTitle>
					</MTd>
				</Tr>
			))}
		</>
	);
}

export default CenterMinute;
