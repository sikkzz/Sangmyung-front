import { Layout, Col, Box, DateBox, Month, IconBox } from "./LeagueElements";

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

import { useState } from "react";

import Icons from "../../constants/icon";

const League = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <Layout>
      <Col>
        <Box>
          <DateBox>
            <Month>
              {format(currentMonth, "yyyy")}년 {format(currentMonth, "MM")}월
            </Month>
            <IconBox onClick={prevMonth}>
              <Icons.BiLeftArrow size={16} color="#808080" />
            </IconBox>
            <IconBox onClick={nextMonth}>
              <Icons.BiRightArrow size={16} color="#808080" />
            </IconBox>
          </DateBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default League;
