import { Layout, Col, Box, ImgBox, Img } from "./Calendar2Elements";
import image1 from "../../assets/calendar/9/1.jpg";

function Calendar2() {
	return (
		<Layout>
			<Col>
				<Box>
					<ImgBox>
						<Img src={image1} alt="image1" />
					</ImgBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Calendar2;
