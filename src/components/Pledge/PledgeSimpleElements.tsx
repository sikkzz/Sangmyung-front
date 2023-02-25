import styled from "styled-components";

const Layout = styled.div`
  /* padding-top: 30px; */
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

const Title = styled.div`
  /* border-top: 1px solid #000; */
  font-size: 30px;
  font-weight: 700;
  /* margin-top: 50px; */
  margin-top: 10px;
`

const Test = styled.hr`
  margin-top: 100px;
  width: 110px;
  height: 5px;
  border: none;
  outline: none;
  background-color: #000;
`

const Content = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
`

const CommunicationBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

const CommunicationItemBox = styled.div`
  display: flex;
  flex-direction: column;
`

const CommunicationItem = styled.div`
      background: #dfdfdf;
    width: 180px;
    height: 180px;
    border-radius: 100%;
    /* margin-right: 25px; */
    /* margin-bottom: 75px; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const CommunicationText = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  max-width: 180px;
  text-align: center;
  line-height: 30px;
`

const PledgeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* align-items: center; */
  justify-content: center;
  position: relative;
  /* justify-content: center; */
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
  Title,
  Content,
  CommunicationBox,
  CommunicationItemBox,
  CommunicationItem,
  CommunicationText,
  Test
};
