import CalendarImg from "@/assets/calendar/12/1.jpg";

import { Layout, Col, Box, ImgBox, Img } from "./CalendarElements";

function Calendar() {
	return (
		<Layout>
			<Col>
				<Box>
					<ImgBox>
						<Img src={CalendarImg} alt="CalendarImg" />
					</ImgBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Calendar;
