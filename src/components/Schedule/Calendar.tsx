import React, { useState } from "react";

import { format, addMonths, subMonths } from "date-fns";

import Header from "./Header";
import Day from "./Day";
import Cell from "./Cell";

import { Layout, Col, Box } from "./CalendarElements";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <Layout>
      <Col>
        <Box>
          <Header
            currentMonth={currentMonth}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
          />
          <Day />
          <Cell
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
          />
        </Box>
      </Col>
    </Layout>
  );
};

export default Calendar;
