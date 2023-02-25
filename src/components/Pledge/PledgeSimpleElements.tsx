import styled from "styled-components";

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

const PledgeBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const PledgeCircle = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background-color: #000d80;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Text = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: #fff;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 100px; */
`;

const DetailCircle = styled.div`
  display: flex;
  width: 500px;
  height: 140px;
  border-radius: 90px;
  justify-content: center;
  align-items: center;
`;

export {
  Layout,
  Col,
  Box,
  PledgeBox,
  PledgeCircle,
  Text,
  DetailBox,
  DetailCircle,
};
