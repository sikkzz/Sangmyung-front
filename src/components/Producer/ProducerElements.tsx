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
  margin-top: 100px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileBox = styled.div``;

const ImgBox = styled.div`
  width: 300px;
  height: 300px;
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
`;

const Sub = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const IconList = styled.ul`
  margin-top: 30px;
`;

const IconListItem = styled.li`
  margin-top: 8px;
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
`;

const RightBox = styled.div`
  margin-left: 100px;
`;

const IntroBox = styled.div`
  border: 1px solid #e3eaf5;
  box-shadow: 4px 4px 0 #e3eaf5;
  padding: 60px;
  border-radius: 30px;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 30px;
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
`;

const TechBox = styled.div`
  margin-top: 20px;
`;

const TechText = styled.div``;

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
  BadgeBox,
  Badge,
  BadgeImg,
  HistoryBox,
  HistoryText,
  TechBox,
  TechText,
};
