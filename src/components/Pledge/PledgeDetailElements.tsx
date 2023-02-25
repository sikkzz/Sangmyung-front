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

const PldegeBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  position: relative;
`;

const PledgeCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #000d80;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubCircle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Text = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: #fff;
  text-align: center;
  max-width: 120px;
`;

const PledgeContent = styled.div`
  /* width: 890px;
  height: 150px; */
  /* background-color: blue; */
  /* position: absolute;
  left: 190px; */
  /* padding-left: 200px; */
  max-width: 900px;
  padding-left: 100px;
  padding-top: 30px;
  font-size: 24px;
  color: #000;
  font-weight: 700;
  line-height: 40px;
  /* border-bottom: 2px solid #000; */
`;

export {
  Layout,
  Col,
  Box,
  PldegeBox,
  PledgeCircle,
  SubCircle,
  Text,
  PledgeContent,
};
