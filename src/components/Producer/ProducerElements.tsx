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
  /* align-items: center; */
  /* margin-top: 100px; */
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
  /* text-align: center; */
`;

const Sub = styled.div`
  font-size: 24px;
  /* text-align: center; */
  font-weight: 600;
`;

const IconList = styled.ul`
  margin-top: 10px;
`;

const IconListItem = styled.li`
  margin-top: 2px;
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

const RightBox = styled.div``;

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
};
