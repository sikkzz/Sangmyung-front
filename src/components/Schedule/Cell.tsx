import React from "react";

import { format } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameDay, addDays } from "date-fns";

import { Layout, Row, ColCell, ColSpan } from "./CellElements";

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
            background: isSameDay(day, selectedDate) ? "#f3c5b6" : "#fff",
          }}
        >
          <ColSpan
            style={{
              color:
                format(currentMonth, "M") !== format(day, "M")
                  ? "#c4c4c4"
                  : "#000",
            }}
          >
            {formattedDate}
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
