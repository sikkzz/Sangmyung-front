import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  margin: 100px 0;
  ${media.labtop`flex-direction: column;margin: 60px 0;`}
  ${media.tabletLarge`flex-direction: column;margin: 60px 0;`}
  ${media.tablet`flex-direction: column;margin: 60px 0;`}
  ${media.mobile`flex-direction: column;margin: 60px 0;`}
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  ${media.labtop`align-items: center;`}
  ${media.tabletLarge`align-items: center;`}
  ${media.tablet`align-items: center;`}
  ${media.mobile`align-items: center;`}
`;

const ProfileBox = styled.div``;

const ImgBox = styled.div`
  width: 300px;
  height: 300px;
  ${media.labtop`margin: 0 auto;`}
  ${media.tabletLarge`margin: 0 auto;`}
  ${media.tablet`margin: 0 auto;`}
  ${media.mobile`width: 200px;height: 200px;margin: 0 auto;`}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 20px;
  ${media.labtop`text-align: center;`}
  ${media.tabletLarge`text-align: center;`}
  ${media.tablet`font-size: 30px;text-align: center;`}
  ${media.mobile`font-size: 24px;text-align: center;`}
`;

const Sub = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #666;
  ${media.labtop`text-align: center;`}
  ${media.tabletLarge`text-align: center;`}
  ${media.tablet`text-align: center;`}
  ${media.mobile`font-size: 18px;text-align: center;`}
`;

const IconList = styled.ul`
  margin-top: 30px;
`;

const IconListItem = styled.li`
  margin-top: 8px;
  ${media.labtop`text-align: center;`}
  ${media.tabletLarge`text-align: center;`}
  ${media.tablet`text-align: center;`}
  ${media.mobile`text-align: center;`}
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
`;

const Text = styled.span`
  padding-left: 10px;
  vertical-align: middle;
  font-weight: 500;
  ${media.labtop`text-align: center;`}
  ${media.tabletLarge`text-align: center;`}
  ${media.tablet`text-align: center;`}
  ${media.mobile`text-align: center;`}
`;

const RightBox = styled.div`
  margin-left: 100px;
  ${media.labtop`margin: 100px 100px 0;`}
  ${media.tabletLarge`margin: 60px 60px 0;`}
  ${media.tablet`margin: 30px 30px 0;`}
  ${media.mobile`margin: 30px 0 0 0;`}
`;

const IntroBox = styled.div`
  border: 1px solid #e3eaf5;
  box-shadow: 4px 4px 0 #e3eaf5;
  padding: 60px;
  border-radius: 30px;
  ${media.mobile`padding: 30px;`}
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 30px;
  ${media.labtop`display: none;`}
`;

const MediaTitle = styled.div`
  display: none;
  ${media.labtop`display: block;font-size: 18px;line-height: 30px;`}
  ${media.tabletLarge`display: block;font-size: 18px;line-height: 30px;`}
  ${media.tablet`display: block;font-size: 17px;line-height: 30px;`}
  ${media.mobile`display: block;font-size: 14px;line-height: 24px;`}
`;

const BadgeBox = styled.div`
  margin-top: 20px;
`;

const Badge = styled.a`
  margin-left: 3px;
  &:first-of-type {
    margin-left: 0;
  }
`;

const BadgeImg = styled.img``;

const HistoryBox = styled.div`
  margin-top: 20px;
`;

const HistoryText = styled.div`
  line-height: 24px;
  ${media.tablet`font-size: 11px;`}
  ${media.mobile`font-size: 11px;`}
`;

const TechBox = styled.div`
  margin-top: 20px;
`;

const TechText = styled.div`
  font-size: 18px;
  font-weight: 700;
  ${media.mobile`font-size: 16px;`}
`;

export {
  Layout,
  Col,
  Box,
  LeftBox,
  ProfileBox,
  ImgBox,
  Img,
  Name,
  Sub,
  IconList,
  IconListItem,
  Icon,
  Text,
  RightBox,
  IntroBox,
  Title,
  MediaTitle,
  BadgeBox,
  Badge,
  BadgeImg,
  HistoryBox,
  HistoryText,
  TechBox,
  TechText,
};
