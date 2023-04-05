import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ColCell = styled.div`
  width: 14.28%;
  height: 93%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0.4px solid rgba(128, 128, 128, 0.6);
  border-radius: 3px;
  font-size: 0.8em;
/* 
  &:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    transform: scale(1.01);
    background-color: #f3c5b6;
  } */
`;

const ColSpan = styled.span`
  margin: 4px 0 0 4px;
  font-size: 18px;
  position: relative;
  font-weight: 700;
`;

const ColSchedule = styled.div`
  position: absolute;
  width: 155px;
  height: 30px;
  background-color: rgb(167, 230, 253);
  position: absolute;
  top: 60px;
  left: -5px;
  display: flex;
  align-items: center;
`;

const ColText = styled.span`
  font-size: 16px;
  margin-left: 5px;
  font-weight: 500;
`;

const ColScheduleMain = styled.div`
  position: absolute;
  width: 155px;
  height: 30px;
  background-color: rgb(1, 126, 196);
  position: absolute;
  top: 30px;
  left: -5px;
  display: flex;
  align-items: center;
`;

const ColTextMain = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-left: 5px;
  color: #fff;
`;

export {
  Layout,
  Row,
  ColCell,
  ColSpan,
  ColSchedule,
  ColText,
  ColScheduleMain,
  ColTextMain,
};
