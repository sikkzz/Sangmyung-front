import {
  Layout,
  Col,
  Box,
  Title,
  CalendarBox,
  Header,
  Month,
  IconBox,
  WeekLayout,
  WeekCol,
  DayLayout,
  DayRow,
  DayCol,
  DaySpan,
} from "./CalendarElements";

import { useState } from "react";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  addDays,
} from "date-fns";

import Icons from "../../constants/icon";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dates = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

//   console.log(selectedDate.getDay());

  for (let i = 0; i < 7; i++) {
    dates.push(<WeekCol key={i}>{date[i]}</WeekCol>);
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      days.push(
        <DayCol
          style={{
            background: isSameDay(day, selectedDate) ? "#f3c5b6" : "",
          }}
        >
          <DaySpan
            style={{
              color:
                format(currentMonth, "M") !== format(day, "M")
                  ? "#c4c4c4"
                  : day.getDay() === 0
                  ? "red"
                  : day.getDay() === 6
                  ? "blue"
                  : "#000",
            }}
          >
            {formattedDate}
          </DaySpan>
        </DayCol>
      );
      day = addDays(day, 1);
    }
    rows.push(<DayRow>{days}</DayRow>);
    days = [];
  }

  return (
    <Layout>
      <Col>
        <Box>
          <Title>학사일정</Title>
          <CalendarBox>
            <Header>
              <IconBox onClick={prevMonth}>
                <Icons.AiOutlineLeft size={24} color="#003d91" />
              </IconBox>
              <Month>
                {format(currentMonth, "yyyy")}년 {format(currentMonth, "M")}월
              </Month>
              <IconBox onClick={nextMonth}>
                <Icons.AiOutlineRight size={24} color="#003d91" />
              </IconBox>
            </Header>
            <WeekLayout>{dates}</WeekLayout>
            <DayLayout>{rows}</DayLayout>
          </CalendarBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Calendar;
