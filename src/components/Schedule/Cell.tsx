import React from "react";

import { format } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameDay, addDays } from "date-fns";

import {
  Layout,
  Row,
  ColCell,
  ColSpan,
  ColSchedule,
  ColText,
  ColScheduleMain,
  ColTextMain,
} from "./CellElements";

type Props = {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: any) => void;
};

const Cell: React.FC<Props> = ({ currentMonth, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      days.push(
        <ColCell
          style={{
            background: isSameDay(day, selectedDate) ? "#f3c5b6" : "",
          }}
        >
          <ColSpan
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
            {day.getDate() === 2 || day.getDate() === 3 ? (
              <ColSchedule>
                {day.getDate() === 2 ? <ColText>후보자 등록</ColText> : ""}
              </ColSchedule>
            ) : (
              ""
            )}

            {day.getDate() === 6 ? (
              <ColSchedule>
                <ColText>후보자 확정 공고</ColText>
              </ColSchedule>
            ) : (
              ""
            )}

            {day.getDate() === 20 || day.getDate() === 21 ? (
              <ColSchedule>
                {day.getDate() === 20 ? <ColText>유세</ColText> : ""}
              </ColSchedule>
            ) : (
              ""
            )}

            {day.getDate() === 22 ||
            day.getDate() === 23 ||
            day.getDate() === 24 ? (
              <ColScheduleMain>
                {day.getDate() === 22 ? (
                  <ColTextMain>투표(09:00 - 19:00)</ColTextMain>
                ) : (
                  ""
                )}
              </ColScheduleMain>
            ) : (
              ""
            )}

            {!(format(currentMonth, "M") !== format(day, "M")) &&
            (day.getDate() === 25 || day.getDate() === 26) ? (
              <ColSchedule>
                {day.getDate() === 25 ? (
                  <ColText style={{ color: "#000" }}>이의 신청</ColText>
                ) : (
                  ""
                )}
              </ColSchedule>
            ) : (
              ""
            )}

            {!(format(currentMonth, "M") !== format(day, "M")) &&
            day.getDate() === 27 ? (
              <ColScheduleMain>
                <ColTextMain>당선자 확정 공고</ColTextMain>
              </ColScheduleMain>
            ) : (
              ""
            )}
          </ColSpan>
        </ColCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<Row>{days}</Row>);
    days = [];
  }

  return <Layout>{rows}</Layout>;
};

export default Cell;
