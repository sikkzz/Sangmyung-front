import styled from "styled-components";

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
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  margin-top: 120px;
`;

const Content = styled.div``;

const Title = styled.div`
  font-size: 58px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #666;
  line-height: 32px;
`;

const LinkBox = styled.div`
  margin-top: 80px;
`;

const Link = styled.a`
  color: #fff;
  background-color: #191919;
  padding: 16px 80px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
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
};
