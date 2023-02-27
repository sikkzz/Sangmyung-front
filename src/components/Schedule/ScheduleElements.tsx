import styled from "styled-components";
import { BsFillArrowLeftCircleFill as LeftArrow } from "react-icons/bs";
import { BsFillArrowRightCircleFill as RightArrow } from "react-icons/bs";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div``;

// const Title = styled.h1`
//   color: #000;
// `;

// const Line = styled.div`
//   border-bottom: 1px solid #000;
// `;

// const TextBox = styled.div`
//   margin: 30px auto 0;
// `;

// const Text = styled.h3``;

// const Frame = styled.div`
//   margin: 0 auto;
// `;

// const Header = styled.div`
//   font-size: 18px;
//   font-weight: bold;
//   padding: 10px 10px 5px 10px;
//   background-color: #fff;
// `;

// const MonthContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const SelectContainer = styled.div`
//   display: flex;
// `;

// const Month = styled.div`
//   margin: 0 60px;
//   font-size: 60px;
// `;

// const MonthSub = styled.span`
//   font-size: 30px;
// `;

// const LeftArrows = styled(LeftArrow)`
//   display: flex;
//   cursor: pointer;
//   margin: 25px 0 0 0;
//   font-size: 30px;
// `;

// const RightArrows = styled(RightArrow)`
//   display: flex;
//   cursor: pointer;
//   font-size: 30px;
//   margin: 25px 0 0 0;
// `;

// const Body = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const DayWeekContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const DayContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const DayWeek = styled.div`
//   width: 14%;
//   height: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   font-size: 16px;
//   border: 1px solid #ccc;
// `;

// const SubContainer = styled.div`
//   width: 14%;
//   height: 140px;
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
//   font-size: 16px;
//   border: 1px solid #ccc;
// `;

// const TopContainer = styled.a`
//   display: block;
//   position: relative;
//   margin-top: 10px;
//   padding-top: 50px;
// `;

// const Day = styled.span<{ isToday: boolean }>`
//   margin: 0 40px 0 12px;
//   position: absolute;
//   top: 0;
//   font-size: 1.4rem;
//   line-height: 1;
//   color: ${({ isToday }) => (isToday ? "#fff" : "000")};
// `;

// const TodayCircle = styled.span<{ isToday: boolean }>`
//   position: absolute;
//   left: 5px;
//   bottom: 16px;
//   width: 40px;
//   height: 40px;
//   border-radius: ${({ isToday }) => (isToday ? "100%" : "0")};
//   background: ${({ isToday }) => (isToday ? "#000" : "#fff")};
// `;

const Select = styled.select``;

const Option = styled.option``;

const WeekDay = styled.div`
  width: calc(500px / 7);
  float: left;
  text-align: center;
  height: 50px;
  line-height: 50px;
`;

const SunDay = styled.div`
  color: red;
`;

const SaturDay = styled.div`
  color: blue;
`;

const Day = styled.div``;

const Container = styled.div`
  width: 500px;
  height: 400px;
  margin: auto;
  margin-top: 300px;
  padding: 20px 20px;
  border: 1px solid rgba(128, 128, 128, 0.267);
  /* position: absolute;
  left: 50%;
  top: 50%; */
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  display: flex;
`;

const Pagination = styled.div`
  margin-left: auto;
  align-self: center;
`;

const Button = styled.button`
  margin: 0 10px;
  border: none;
  background: none;
`;

const Week = styled.div`
  display: flex;
`;

const Dated = styled.div`
  margin-top: 20px;
`;

export {
  Layout,
  Col,
  Box,
//   Title,
//   Line,
//   TextBox,
//   Text,
//   Frame,
//   Header,
//   SelectContainer,
//   MonthContainer,
//   Month,
//   MonthSub,
//   LeftArrows,
//   RightArrows,
//   Body,
//   DayWeekContainer,
//   DayContainer,
//   DayWeek,
//   SubContainer,
//   TopContainer,
//   Day,
//   TodayCircle,
  Option,
  Select,
    WeekDay,
    Day,
    Container,
    SunDay,
    SaturDay,
    Title,
    Pagination,
    Button,
    Week,
    Dated,
};
