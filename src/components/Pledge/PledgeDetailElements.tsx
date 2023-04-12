import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
  ${media.tablet`padding-top:30px;`}
  ${media.mobile`padding-top:20px;`}
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div``;

const TabBox = styled.div``;

const TabInnerBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
`;

const TabList = styled.ul`
  width: auto;
  display: inline-block;
`;

const TabItem = styled.li`
  display: inline-block;
  color: rgb(132, 134, 134);
  margin: 0 20px;
  padding-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
  ${media.tablet`font-size:16px;`}
  ${media.mobile`font-size:12px;`}
`;

const TabItemActive = styled.li`
  display: inline-block;
  color: rgb(32, 71, 137);
  border-bottom: 1px solid rgb(32, 71, 137);
  margin: 0 20px;
  padding-bottom: 10px;
  font-size: 20px;
  cursor: pointer;
  ${media.tablet`font-size:20px;`}
  ${media.mobile`font-size:15px;`}
`;

const PldegeBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  position: relative;
  align-items: center;
  padding-left: 160px;
  ${media.tablet`margin-top:30px;padding:70px 100px;justify-content:space-between;height:100px;`}
  ${media.mobile`margin-top:30px;padding:0;justify-content:space-between;height:100px;`}
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
  ${media.tablet`width:100px;height:100px;`}
  ${media.mobile`width:60px;height:60px;`}
`;

const PledgeInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`width:48px;height:48px;`}
  ${media.mobile`width:36px;height:36px;`}
`;

const SubCircle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  ${media.tablet`width:40px;height:40px;top:86px;left:174px;`}
  ${media.mobile`width:32px;height:32px;top:56px;left:44px;`}
`;

const SubInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`width:26px;height:26px;`}
  ${media.mobile`width:20px;height:20px;`}
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  padding-left: 100px;
  ${media.tablet`padding-left:0;width:350px;`}
  ${media.mobile`padding-left:0;width:250px;`}
`;

const Text = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: #000;
  font-weight: 700;
  ${media.tablet`font-size:18px;`}
  ${media.mobile`font-size:16px;`}
`;

const PledgeContent = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  font-size: 20px;
  color: #000;
  font-weight: 700;
  line-height: 30px;
  ${media.tablet`font-size:14px;padding-top:5px;padding-left:8px;line-height:24px;`}
  ${media.mobile`font-size:12px;padding-top:0;padding-left:8px;line-height:18px;`}
`;

export {
  Layout,
  Col,
  Box,
  PldegeBox,
  PledgeCircle,
  PledgeInner,
  SubCircle,
  SubInner,
  Text,
  PledgeContent,
  TabBox,
  TabInnerBox,
  TabList,
  TabItem,
  TabItemActive,
  ContentBox,
};
