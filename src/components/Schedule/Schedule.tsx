import { useState } from "react";
import moment from "moment";

import {
  Layout,
  Col,
  Box,
  ControlBox,
  Table,
  TBody,
  Tr,
  Td,
  Button,
  Span,
} from "./ScheduleElements";

const Schedule = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    let result: any[] = [];
    // let week = firstWeek;
    for (let week = firstWeek; week <= lastWeek; week++) {
      result = result.concat(
        <Tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <Td key={index} style={{ backgroundColor: "red" }}>
                    <Span>{days.format("D")}</Span>
                  </Td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <Td key={index} style={{ backgroundColor: "gray" }}>
                    <Span>{days.format("D")}</Span>
                  </Td>
                );
              } else {
                return (
                  <Td key={index}>
                    <Span>{days.format("D")}</Span>
                  </Td>
                );
              }
            })}
        </Tr>
      );
    }
    return result;
  };

  return (
    <Layout>
      <Col>
        <Box>
          <ControlBox>
            <Button
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            >
              이전달
            </Button>
            <Span>{today.format("YYYY 년 MM 월")}</Span>
            <Button
              onClick={() => {
                setMoment(getMoment.clone().add(1, "month"));
              }}
            >
              다음달
            </Button>
          </ControlBox>
          <Table>
            <TBody>{calendarArr()}</TBody>
          </Table>
        </Box>
      </Col>
    </Layout>
  );
};

export default Schedule;
