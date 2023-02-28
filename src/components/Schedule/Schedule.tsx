import { useState } from "react";
import moment from "moment";

import {
  Layout,
  Col,
  Box,
  ControlBox,
  ControlLeftBox,
  ControlRightBox,
  SelectBox,
  //   Select,
  //   Option,
  Table,
  TBody,
  Tr,
  Td,
  Span,
  LeftArrows,
  RightArrows,
} from "./ScheduleElements";

const Schedule = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  //   const [selectedYear, setSelectedYear] = useState<string>(
  //     today.format("YYYY")
  //   );
  //   const [selectedMonth, setSelectedMonth] = useState<string>(
  //     today.format("MM")
  //   );

  const calendarArr = () => {
    let result: any[] = [];
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
                    {/* <Span>{days.format("D")}</Span> */}
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

  //   const monthControl = useCallback(() => {
  //     //달 선택박스에서 고르기
  //     let monthArr = [];
  //     for (let i = 0; i < 12; i++) {
  //       monthArr.push(
  //         <Option key={i + 1} value={i + 1}>
  //           {i + 1}월
  //         </Option>
  //       );
  //     }
  //     console.log(monthArr);
  //     return (
  //       <select
  //         // className="monthSelect"
  //         onChange={changeSelectMonth}
  //         value={selectedMonth}
  //       >
  //         {monthArr}
  //       </select>
  //     );
  //   }, [selectedMonth]);

  //   const yearControl = useCallback(() => {
  //     let yearArr = [];
  //     const startYear = Number(today.format("YYYY")) - 10;
  //     const endYear = Number(today.format("YYYY")) + 10;

  //     console.log(endYear);

  //     for (let i = startYear; i < endYear + 1; i++) {
  //       yearArr.push(
  //         <option key={i} value={i}>
  //           {i}년
  //         </option>
  //       );
  //     }
  //     return (
  //       <select
  //         // className="yearSelect"
  //         onChange={changeSelectYear}
  //         value={selectedYear}
  //       >
  //         {yearArr}
  //       </select>
  //     );
  //   }, [selectedYear]);

  //   const changeSelectMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedMonth(String(e.target.value));
  //   };

  //   const changeSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSelectedYear(String(e.target.value));
  //   };

  return (
    <Layout>
      <Col>
        <Box>
          <ControlBox>
            <ControlLeftBox>
              {/* {yearControl()}년 {monthControl()}월 */}
              <LeftArrows
                onClick={() => {
                  setMoment(getMoment.clone().subtract(1, "month"));
                }}
              />
              <Span>{today.format("YYYY 년 MM 월")}</Span>
              <RightArrows
                onClick={() => {
                  setMoment(getMoment.clone().add(1, "month"));
                }}
              />
            </ControlLeftBox>
            <ControlRightBox>
              <SelectBox></SelectBox>
            </ControlRightBox>
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
