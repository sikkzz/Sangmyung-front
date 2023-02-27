import { useState, useCallback, useEffect } from "react";

import {
  Layout,
  Col,
  Box,
  Title,
  Line,
  TextBox,
  Text,
  Frame,
  Header,
  MonthContainer,
  Month,
  MonthSub,
  LeftArrows,
  RightArrows,
  Body,
  DayWeekContainer,
  DayContainer,
  DayWeek,
  SubContainer,
  TopContainer,
  Day,
  TodayCircle,
  //   Option,
  //   Select,
  //   WeekDay,
  //   Day,
  //   Container,
  //   SunDay,
  //   SaturDay,
  //   Title,
  //   Pagination,
  //   Button,
  //   Week,
  //   Dated,
} from "./ScheduleElements";

const Schedule = () => {
  const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  }, [date]);

  const getStartDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const days = isLeapYear(date.getFullYear()) ? daysLeap : Days;

  const onClickArrow = (year: number, month: number, direct: number) => {
    if (month + direct === today.getMonth()) {
      setDate(new Date(year, month + direct, new Date().getDate()));
    } else {
      setDate(new Date(year, month + direct, 1));
    }
  };

  return (
    <Layout>
      <Col>
        <Box>
          <Title>캘린더</Title>
          <Line />
          <TextBox>
            <Text>학사일정을 확인하세요</Text>
          </TextBox>
          <Frame>
            <Header>
              <MonthContainer>
                <LeftArrows
                  onClick={() => {
                    onClickArrow(year, month, -1);
                  }}
                >
                  Prev
                </LeftArrows>
                <Month>
                  {months[month]}
                  <MonthSub>월</MonthSub>
                </Month>
                <RightArrows
                  onClick={() => {
                    onClickArrow(year, month, 1);
                  }}
                >
                  Next
                </RightArrows>
              </MonthContainer>
            </Header>

            <Body>
              <DayWeekContainer>
                {daysWeek.map((index) => (
                  <DayWeek key={index}>{<strong>{index}</strong>}</DayWeek>
                ))}
              </DayWeekContainer>
              <DayContainer>
                {Array(days[month] + startDay)
                  .fill(null)
                  .map((item, index) => {
                    const d = index - (startDay - 1);

                    return (
                      <SubContainer key={index}>
                        <TopContainer>
                          <TodayCircle
                            isToday={
                              year === today.getFullYear() &&
                              month === today.getMonth() &&
                              d === today.getDate()
                            }
                          />
                          <Day
                            isToday={
                              year === today.getFullYear() &&
                              month === today.getMonth() &&
                              d === today.getDate()
                            }
                            onClick={() => setDate(new Date(year, month, d))}
                          >
                            {d > 0 ? d : ""}
                          </Day>
                        </TopContainer>
                      </SubContainer>
                    );
                  })}
              </DayContainer>
            </Body>
          </Frame>
        </Box>
      </Col>
    </Layout>
  );
};

// const Schedule = () => {
//   const today = {
//     year: new Date().getFullYear(), //오늘 연도
//     month: new Date().getMonth() + 1, //오늘 월
//     date: new Date().getDate(), //오늘 날짜
//     day: new Date().getDay(), //오늘 요일
//   };

//   const week = ["일", "월", "화", "수", "목", "금", "토"]; //일주일
//   const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
//   const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
//   const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); //선택된 연도, 달의 마지막 날짜

//   const prevMonth = useCallback(() => {
//     //이전 달 보기 보튼
//     if (selectedMonth === 1) {
//       setSelectedMonth(12);
//       setSelectedYear(selectedYear - 1);
//     } else {
//       setSelectedMonth(selectedMonth - 1);
//     }
//   }, [selectedMonth]);

//   const nextMonth = useCallback(() => {
//     //다음 달 보기 버튼
//     if (selectedMonth === 12) {
//       setSelectedMonth(1);
//       setSelectedYear(selectedYear + 1);
//     } else {
//       setSelectedMonth(selectedMonth + 1);
//     }
//   }, [selectedMonth]);

//   const monthControl = useCallback(() => {
//     //달 선택박스에서 고르기
//     let monthArr = [];
//     for (let i = 0; i < 12; i++) {
//       monthArr.push(
//         <Option key={i + 1} value={i + 1}>
//           {i + 1}월
//         </Option>
//         // <option key={i + 1} value={i + 1}>
//         //   {i + 1}월
//         // </option>
//       );
//     }
//     return (
//       <Select onChange={changeSelectMonth} value={selectedMonth}>
//         {monthArr}
//       </Select>
//       //   <select
//       //     // className="monthSelect"
//       //     onChange={changeSelectMonth}
//       //     value={selectedMonth}
//       //   >
//       //     {monthArr}
//       //   </select>
//     );
//   }, [selectedMonth]);

//   const yearControl = useCallback(() => {
//     //연도 선택박스에서 고르기
//     let yearArr = [];
//     const startYear = today.year - 10; //현재 년도부터 10년전 까지만
//     const endYear = today.year + 10; //현재 년도부터 10년후 까지만
//     for (let i = startYear; i < endYear + 1; i++) {
//       yearArr.push(
//         <Option key={i} value={i}>
//           {i}년
//         </Option>
//       );
//     }
//     return (
//       <Select onChange={changeSelectYear} value={selectedYear}>
//         {yearArr}
//       </Select>
//       //   <select
//       //     // className="yearSelect"
//       //     onChange={changeSelectYear}
//       //     value={selectedYear}
//       //   >
//       //     {yearArr}
//       //   </select>
//     );
//   }, [selectedYear]);

//   const changeSelectMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedMonth(Number(e.target.value));
//   };
//   const changeSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedYear(Number(e.target.value));
//   };

//   const returnWeek = useCallback(() => {
//     //요일 반환
//     let weekArr: any[] = [];
//     week.forEach((index) => {
//       weekArr.push(
//         <WeekDay key={index}>{index}</WeekDay>
//         // <div
//         //   key={v}
//         //   className={cx(
//         //     { weekday: true },
//         //     { sunday: v === "일" },
//         //     { saturday: v === "토" }
//         //   )}
//         // >
//         //   {v}
//         // </div>
//       );
//     });
//     return weekArr;
//   }, []);

//   const returnDay = useCallback(() => {
//     //알짜 반화
//     let dayArr = [];

//     for (const nowDay of week) {
//       const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
//       if (week[day] === nowDay) {
//         for (let i = 0; i < dateTotalCount; i++) {
//           dayArr.push(
//             <Day key={i + 1}>{i + 1}</Day>
//             // <div
//             //   key={i + 1}
//             //   className={cx(
//             //     {
//             //       //오늘 날짜일 때 표시할 스타일 클라스네임
//             //       today:
//             //         today.year === selectedYear &&
//             //         today.month === selectedMonth &&
//             //         today.date === i + 1,
//             //     },
//             //     { weekday: true }, //전체 날짜 스타일
//             //     {
//             //       //전체 일요일 스타일
//             //       sunday:
//             //         new Date(
//             //           selectedYear,
//             //           selectedMonth - 1,
//             //           i + 1
//             //         ).getDay() === 0,
//             //     },
//             //     {
//             //       //전체 토요일 스타일
//             //       saturday:
//             //         new Date(
//             //           selectedYear,
//             //           selectedMonth - 1,
//             //           i + 1
//             //         ).getDay() === 6,
//             //     }
//             //   )}
//             // >
//             //   {i + 1}
//             // </div>
//           );
//         }
//       } else {
//         dayArr.push(<WeekDay></WeekDay>);
//         // dayArr.push(<div className="weekday"></div>);
//       }
//     }

//     return dayArr;
//   }, [selectedYear, selectedMonth, dateTotalCount]);

//   return (
//     <Container>
//       <Title>
//         <h3>
//           {yearControl()}년 {monthControl()}월
//         </h3>
//         <Pagination>
//           <Button onClick={prevMonth}>◀︎</Button>
//           <Button onClick={nextMonth}>▶︎</Button>
//         </Pagination>
//       </Title>
//       <Week>{returnWeek()}</Week>
//       <Dated>{returnDay()}</Dated>
//     </Container>
//     // <Layout>
//     //   <Col>
//     //     <Box>
//     //       <div className="container">
//     //         <div className="title">
//     //           <h3>
//     //             {yearControl()}년 {monthControl()}월
//     //           </h3>
//     //           <div className="pagination">
//     //             <button onClick={prevMonth}>◀︎</button>
//     //             <button onClick={nextMonth}>▶︎</button>
//     //           </div>
//     //         </div>
//     //         <div className="week">{returnWeek()}</div>
//     //         <div className="date">{returnDay()}</div>
//     //       </div>
//     //     </Box>
//     //   </Col>
//     // </Layout>
//   );
// };

export default Schedule;
