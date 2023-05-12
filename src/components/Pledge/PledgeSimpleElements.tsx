import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
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
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  position: relative;
  ${media.tabletLarge`margin-top: 100px;`}
  ${media.tablet`margin-top: 60px;`}
  ${media.mobile`margin-top: 30px;`}
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
  ${media.tabletLarge`font-size: 28px;`}
  ${media.tablet`font-size: 24px;`}
  ${media.mobile`font-size: 18px;`}
`;

const Line = styled.hr`
  width: 50px;
  height: 5px;
  border: none;
  outline: none;
  background-color: #000;
  ${media.tabletLarge`width: 48px;`}
  ${media.tablet`width: 40px;`}
  ${media.mobile`width: 31px;`}

  &:not(:first-of-type) {
    margin-top: 100px;
  }
`;

const Content = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  ${media.tabletLarge`font-size: 20px;`}
  ${media.tablet`font-size: 18px;`}
  ${media.mobile`font-size: 14px;`}
`;

const CommunicationBox = styled.div<{ padding: string }>`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: ${(props) => props.padding};
  ${media.tabletLarge`padding:0;margin-top:30px;justify-content: center;`}
  ${media.tablet`padding:0;margin-top:30px;justify-content: center;`}
  ${media.mobile`padding:0;margin-top:30px;justify-content: center;`}
`;

const CommunicationItemBox = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tabletLarge`align-items:center;padding: 0 42px;`}
  ${media.tablet`align-items:center;padding: 0 36px;`}
  ${media.mobile`align-items:center;padding: 0 16px;`}
`;

const CommunicationItem = styled.div`
  background: #dfdfdf;
  width: 180px;
  height: 180px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${media.tabletLarge`width:160px;height:160px;margin-bottom: 20px;`}
  ${media.tablet`width:120px;height:120px;margin-bottom: 20px;`}
  ${media.mobile`width:50px;height:50px;margin-bottom: 10px;`}
`;

const CommunicationInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tabletLarge`width:90px;height:90px;`}
  ${media.tablet`width:70px;height:70px;`}
  ${media.mobile`width:30px;height:30px;`}
`;

const CommunicationText = styled.div`
  font-size: 20px;
  font-weight: 700;
  max-width: 180px;
  text-align: center;
  line-height: 30px;
  ${media.tabletLarge`font-size:16px;line-height:18px;width:180px;`}
  ${media.tablet`font-size:14px;line-height:18px;width:140px;`}
  ${media.mobile`font-size:12px;line-height:18px;width:100px;`}
`;

export {
  Layout,
  Col,
  Box,
  PledgeBox,
  Title,
  Content,
  CommunicationBox,
  CommunicationItemBox,
  CommunicationItem,
  CommunicationInner,
  CommunicationText,
  Line,
};
