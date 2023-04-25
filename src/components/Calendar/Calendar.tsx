import {
  Layout,
  Col,
  Box,
  Title,
  CalendarBox,
  Header,
  Month,
} from "./CalendarElements";

const Calendar = () => {
  return (
    <Layout>
      <Col>
        <Box>
          <Title>학사일정</Title>
          <CalendarBox>
            <Header>
              <Month>April</Month>
            </Header>
          </CalendarBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Calendar;
