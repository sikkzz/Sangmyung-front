import {
	CommunicationBox,
	CommunicationItemBox,
	CommunicationItem,
	CommunicationInner,
	CommunicationText,
	Title,
	Content,
	Layout,
	Col,
	Box,
	PledgeBox,
	Line,
} from "./PledgeSimpleElements";
import {
	PledgeCommunicationData1,
	PledgeCommunicationData2,
	PledgeCultureData1,
	PledgeCultureData2,
	PledgWelfareData1,
	PledgWelfareData2,
	PledgWelfareData3,
	PledgeBachelorData1,
	PledgeBachelorData2,
} from "../../constants/data/PledgeSimpleData";

function PledgeSimple() {
	return (
		<Layout>
			<Col>
				<Box>
					<PledgeBox>
						<Line />
						<Title>소통</Title>
						<Content>
							'선[先]'이 원활하게 소통하고자 다짐하고 마련한 소통 공약
						</Content>
						<CommunicationBox padding='0 270px'>
							{PledgeCommunicationData1.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<CommunicationBox padding='0 120px'>
							{PledgeCommunicationData2.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<Line />
						<Title>문화</Title>
						<Content>
							'선[先]'이 즐거운 학교생활을 위해 마련한 문화 공약
						</Content>

						<CommunicationBox padding='0 120px'>
							{PledgeCultureData1.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<CommunicationBox padding='0 120px'>
							{PledgeCultureData2.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<Line />
						<Title>복지</Title>
						<Content>
							'선[先]'이 더 나은 학교생활을 책임지고자 마련한 복지 공약
						</Content>

						<CommunicationBox padding='0 120px'>
							{PledgWelfareData1.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<CommunicationBox padding='0 120px'>
							{PledgWelfareData2.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<CommunicationBox padding='0 120px'>
							{PledgWelfareData3.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<Line />
						<Title>학사</Title>
						<Content>
							'선[先]'이 학사활동 및 진로지원을 위해 마련한 학사 공약
						</Content>

						<CommunicationBox padding='0 270px'>
							{PledgeBachelorData1.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>

						<CommunicationBox padding='0 270px'>
							{PledgeBachelorData2.map((item, index) => (
								<CommunicationItemBox key={index}>
									<CommunicationItem>
										<CommunicationInner>{item.icon}</CommunicationInner>
									</CommunicationItem>
									<CommunicationText>{item.content}</CommunicationText>
									<CommunicationText>{item.content2}</CommunicationText>
								</CommunicationItemBox>
							))}
						</CommunicationBox>
					</PledgeBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default PledgeSimple;
