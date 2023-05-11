import styled from "styled-components";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Box = styled.div``;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
`;

const CalendarBox = styled.div`
  margin-top: 50px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Month = styled.h2`
  font-weight: 700;
  font-size: 35px;
  color: #003d91;
  padding: 0 60px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeekLayout = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-size: 0.65em;
  padding: 2px;
  color: #686868;
  margin-top: 30px;
`;

const WeekCol = styled.div`
  width: 14.28%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(235, 207, 198, 1);
  background: rgb(0, 11, 111);
  font-size: 15px;
  color: #fff;
  border-radius: 10px;
`;

const DayLayout = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DayRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DayCol = styled.div`
  width: 14.28%;
  height: 93%;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0.4px solid rgba(128, 128, 128, 0.6);
  border-radius: 3px;
  font-size: 0.8em;
`;

const DaySpan = styled.span`
  margin: 4px 0 0 4px;
  font-size: 18px;
  position: relative;
  font-weight: 700;
`;

export {
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
};
