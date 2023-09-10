import { useLocation } from "react-router-dom";

import { Box, List, ListItem, ListIconBox, ListLink } from "./PathElements";
import { PathData, PathData2, PathData3 } from "../../constants/data/PathData";
import Icons from "../../constants/icon";

function Path() {
	const location = useLocation();

	return (
		<Box>
			<List>
				<ListItem>
					<ListLink href='/'>Home</ListLink>
					<ListIconBox>
						<Icons.IoChevronForward size={16} color='#666' />
					</ListIconBox>
				</ListItem>
				{PathData.map((item, index) => (
					<ListItem
						key={index}
						style={{
							display:
								item.id === location.pathname.split("/")[1]
									? "inline-block"
									: "none",
						}}
					>
						<ListLink href={item.link}>{item.item}</ListLink>
						<ListIconBox>
							<Icons.IoChevronForward size={16} color='#666' />
						</ListIconBox>
					</ListItem>
				))}
				{PathData2.map((item, index) => (
					<ListItem
						key={index}
						style={{
							display:
								item.id === location.pathname.split("/")[2]
									? "inline-block"
									: "none",
						}}
					>
						<ListLink href={item.link}>{item.item}</ListLink>
					</ListItem>
				))}
				{PathData3.map((item, index) => (
					<ListItem
						key={index}
						style={{
							display:
								item.id === location.pathname.split("/")[3]
									? "inline-block"
									: "none",
						}}
					>
						<ListIconBox>
							<Icons.IoChevronForward size={16} color='#666' />
						</ListIconBox>
						<ListLink href={item.link}>{item.item}</ListLink>
					</ListItem>
				))}
			</List>
		</Box>
	);
}

export default Path;
