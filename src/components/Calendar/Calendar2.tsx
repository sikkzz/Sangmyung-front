import { Layout, Col, Box, ImgBox, Img } from "./Calendar2Elements";

import image1 from "../../assets/calendar/6/1.jpg";

const Calendar2 = () => {
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
};

export default Calendar2;
