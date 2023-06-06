import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const MLayout = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  padding: 0 30px;

  ${media.labtop`display: flex;padding:0 120px;margin:80px 0;`};
  ${media.tabletLarge`display: flex;padding:0 80px;margin:80px 0;`};
  ${media.tablet`display: flex;padding:0 40px;margin:80px 0;`};
  ${media.mobile`display: flex;padding:0 30px;margin:40px 0;`};
`;

const MBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const MTitleBox = styled.div`
  position: relative;
  max-width: 240px;
  ${media.labtop`max-width:800px;`};
  ${media.tabletLarge`max-width:600px;`};
  ${media.tablet`max-width:360px;`};
  ${media.mobile`max-width:240px;`};
`;

const MTitle = styled.h1`
  font-size: 12px;
  font-weight: 700;
  color: #3182f6;
  margin-bottom: 10px;
  ${media.labtop`font-size: 24px;`};
  ${media.tabletLarge`font-size: 20px;`};
  ${media.tablet`font-size: 16px;`};
  ${media.mobile`font-size: 12px;`};
`;

const MSub = styled.h2`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  color: #191f28;
  ${media.labtop`font-size: 28px;`};
  ${media.tabletLarge`font-size: 24px;`};
  ${media.tablet`font-size: 20px;`};
  ${media.mobile`font-size: 12px;`};
`;

const MImageBox = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 50%;
  ${media.labtop`width:160px;height:160px;`};
  ${media.tabletLarge`width:160px;height:160px;`};
  ${media.tablet`width:120px;height:120px;`};
  ${media.mobile`width:80px;height:80px;`};
`;

const MText = styled.div`
  font-size: 30px;
  color: #fff;
  ${media.labtop`font-size:60px;`};
  ${media.tabletLarge`font-size:60px;`};
  ${media.tablet`font-size:48px;`};
  ${media.mobile`font-size:30px;`};
`;

export { MLayout, MBox, MTitleBox, MTitle, MSub, MImageBox, MText };
