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
  flex-direction: column;
  justify-content: center;
`;

const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  width: 100px;
  height: 100px;
  ${media.labtop`width: 80px;height: 80px;`}
  ${media.tabletLarge`width: 80px;height: 80px;`}
  ${media.tablet`width: 80px;height: 80px;`}
  ${media.mobile`width: 80px;height: 80px;`}
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  ${media.labtop`margin-top: 60px;flex-direction: column;`}
  ${media.tabletLarge`margin-top: 60px;flex-direction: column;`}
  ${media.tablet`margin-top: 60px;flex-direction: column;`}
  ${media.mobile`margin-top: 60px;flex-direction: column;`}
`;

const Content = styled.div`
  ${media.labtop`margin: 0 auto;`}
  ${media.tabletLarge`margin: 0 auto;`}
  ${media.tablet`margin: 0 auto;`}
  ${media.mobile`margin: 0 auto;`}
`;

const Title = styled.div`
  font-size: 58px;
  font-weight: 700;
  margin-bottom: 20px;
  ${media.labtop`font-size: 36px;text-align: center;`}
  ${media.tabletLarge`font-size: 36px;text-align: center;`}
  ${media.tablet`font-size: 36px;text-align: center;`}
  ${media.mobile`font-size: 36px;text-align: center;`}
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #666;
  line-height: 32px;
  ${media.labtop`font-size: 14px;text-align: center;`}
  ${media.tabletLarge`font-size: 14px;text-align: center;`}
  ${media.tablet`font-size: 14px;text-align: center;`}
  ${media.mobile`font-size: 14px;text-align: center;`}
`;

const LinkBox = styled.div`
  margin-top: 80px;
  ${media.labtop`margin-top: 40px;text-align: center;`}
  ${media.tabletLarge`margin-top: 40px;text-align: center;`}
  ${media.tablet`margin-top: 40px;text-align: center;`}
  ${media.mobile`margin-top: 40px;text-align: center;`}
`;

const Link = styled.a`
  color: #fff;
  background-color: #191919;
  padding: 16px 70px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  margin-left: 30px;
  cursor: pointer;

  &:first-of-type {
    margin-left: 0;
  }

  ${media.labtop`padding: 16px 30px;`}
  ${media.tabletLarge`padding: 16px 30px;`}
  ${media.tablet`padding: 16px 30px;`}
  ${media.mobile`padding: 16px 30px;`}
`;

const ImageBox = styled.div`
  width: 550px;
  height: 366px;
  ${media.labtop`margin: 60px auto 0;;width: 300px;height: 100%;`}
  ${media.tabletLarge`margin: 60px auto 0;;width: 300px;height: 100%;`}
  ${media.tablet`margin: 60px auto 0;;width: 300px;height: 100%;`}
  ${media.mobile`margin: 60px auto 0;;width: 300px;height: 100%;`}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  Layout,
  Col,
  Box,
  HeadBox,
  LogoBox,
  Logo,
  ContentBox,
  Content,
  Title,
  Text,
  LinkBox,
  Link,
  ImageBox,
  Img,
};
