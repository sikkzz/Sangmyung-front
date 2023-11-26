import { useNavigate } from "react-router-dom";

import Bachelor from "./Bachelor";
import Communication from "./Communication";
import Culture from "./Culture";
import {
	Layout,
	Col,
	Box,
	TabBox,
	TabInnerBox,
	TabList,
	TabItem,
	TabItemActive,
} from "./PledgeDetailElements";
import Welfare from "./Welfare";
import { PledgeTabData } from "../../constants/data/PledgeDetailData";

type Props = {
	state: string | undefined;
};

function PledgeDetail({ state }: Props) {
	const navigate = useNavigate();

	return (
		<Layout>
			<Col>
				<Box>
					<TabBox>
						<TabInnerBox>
							<TabList>
								{PledgeTabData.map((item) => (
									<>
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
									</>
								))}
							</TabList>
						</TabInnerBox>
					</TabBox>

					{state === "communication" ? (
						<Communication />
					) : state === "culture" ? (
						<Culture />
					) : state === "welfare" ? (
						<Welfare />
					) : state === "bachelor" ? (
						<Bachelor />
					) : (
						""
					)}
				</Box>
			</Col>
		</Layout>
	);
}

export default PledgeDetail;
