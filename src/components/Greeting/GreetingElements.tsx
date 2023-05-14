import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 100px;
  padding-bottom: 200px;
  ${media.labtop`padding-bottom: 100px;`}
  ${media.tabletLarge`padding-bottom: 100px;`}
  ${media.tablet`padding-bottom: 100px;`}
  ${media.mobile`padding-top: 50px; padding-bottom: 100px;`}
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div``;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 1080px;
  ${media.labtop`width: 800px;`}
  ${media.tabletLarge`width: 600px;`}
  ${media.tablet`width: 500px;`}
  ${media.mobile`width: 380px;`};
`;

const GreetingBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
  position: relative;
  ${media.labtop`margin-top:30px;align-items:center;flex-direction:column;`}
  ${media.tabletLarge`margin-top:30px;align-items:center;flex-direction:column;`}
  ${media.tablet`margin-top:30px;align-items:center;flex-direction:column;`}
  ${media.mobile`margin-top:30px;align-items:center;flex-direction:column;`}
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #131b60;
  width: 650px;
  height: 650px;
  justify-content: center;
  ${media.labtop`width:520px;height:520px;`}
  ${media.tabletLarge`width:520px;height:520px;`}
  ${media.tablet`width:400px;height:400px;`}
  ${media.mobile`width:300px;height:300px;`}
`;

const LogoInnerBox = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  ${media.labtop`width:400px;height:400px;`}
  ${media.tabletLarge`width:400px;height:400px;`}
  ${media.tablet`width:300px;height:300px;`}
  ${media.mobile`width:200px;height:200px;`}
`;

const Logo = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  ${media.labtop`width:400px;height:400px;`}
  ${media.tabletLarge`width:400px;height:400px;`}
  ${media.tablet`width:300px;height:300px;`}
  ${media.mobile`width:200px;height:200px;`}
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  border: 3px solid #131b60;
  position: absolute;
  top: 40px;
  left: 550px;
  width: 500px;
  height: 580px;
  padding: 50px;
  background-color: #fff;
  ${media.labtop`position:static;width:520px;height:auto;margin:30px 0 0 0;padding:40px;`}
  ${media.tabletLarge`position:static;width:520px;height:auto;margin:30px 0 0 0;padding:40px;`}
  ${media.tablet`position:static;width:400px;height:auto;margin:30px 0 0 0;padding:40px;`}
  ${media.mobile`position:static;width:300px;height:auto;margin:30px 0 0 0;padding:20px;`}
`;

const TitleWrapper = styled.div`
  max-width: 500px;
`;

const Title = styled.div`
  font-size: 26px;
  font-family: "pre black";
  font-weight: 700;
  color: #131b60;
  letter-spacing: -0.22px;
  padding-bottom: 15px;
  text-align: center;
  border-bottom: 2px solid #000;
  ${media.labtop`font-size:24px;padding-bottom: 10px;text-align:center;`}
  ${media.tabletLarge`font-size:24px;padding-bottom: 10px;text-align:center;`}
  ${media.tablet`font-size:20px;padding-bottom: 10px;text-align:center;`}
  ${media.mobile`font-size:16.8px;padding-bottom: 10px;text-align:center;`}
`;

const TextWrapper = styled.div`
  max-width: 500px;
`;

const SubWrapper = styled.div`
  margin-top: 40px;
  max-width: 500px;
  ${media.labtop`font-size:16px;line-height:24px;margin-top: 30px;`}
  ${media.tabletLarge`font-size:16px;line-height:24px;margin-top: 30px;`}
  ${media.tablet`font-size:12px;line-height:18px;margin-top: 30px;`}
  ${media.mobile`font-size:12px;line-height:18px;margin-top: 30px;`}
`;

const Sub = styled.div<{ weight: string }>`
  font-size: 18px;
  font-family: "pre medium";
  font-weight: ${(props) => props.weight};
  line-height: 30px;
  ${media.labtop`font-size:16px;line-height:24px;`}
  ${media.tabletLarge`font-size:16px;line-height:24px;`}
  ${media.tablet`font-size:14px;line-height:18px;`}
  ${media.mobile`font-size:12px;line-height:18px;`}
`;

const Text = styled.div`
  font-size: 18px;
  font-family: "pre medium";
  font-weight: 500;
  line-height: 30px;
  margin-top: 30px;
  letter-spacing: 0.5px;
  ${media.labtop`font-size:20px;line-height:32px;margin-top:20px;`}
  ${media.tabletLarge`font-size:20px;line-height:32px;margin-top:20px;`}
  ${media.tablet`font-size:18px;line-height:30px;margin-top:20px;`}
  ${media.mobile`font-size:12px;line-height:18px;margin-top:20px;`}
`;

export {
  Layout,
  Col,
  Box,
  ImgBox,
  Image,
  GreetingBox,
  LogoBox,
  LogoInnerBox,
  Logo,
  TextBox,
  TitleWrapper,
  Title,
  TextWrapper,
  SubWrapper,
  Sub,
  Text,
};
