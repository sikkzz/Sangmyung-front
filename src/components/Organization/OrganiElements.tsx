import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1400px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div``;

const OrganiBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const OrganiImage = styled.img`
  width: 900px;
  height: 810px;
  ${media.mobile`width: 300px;height: 270px;`}
`;

const ChartBox = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
  ${media.mobile`margin-top: 60px;`}
`;

const TextBox = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  ${media.mobile`font-size: 24px;`}
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  font-size: 48px;
  margin: 30px 0;
  ${media.mobile`font-size: 36px;`}
`;

const ImageBox = styled.div``;

const Image = styled.img<{ width: string; height: string; radius: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  ${media.mobile`display: none;`}
`;

const MImg = styled(Image)`
  display: none;
  ${media.mobile`display: block;`}
`;

const SubImg = styled(Image)``;

const MSubImg = styled(Image)`
  display: none;
  ${media.mobile`display: block;`}
`;

const ProfileBox = styled.div<{ marginTop: string }>`
  margin-top: ${(props) => props.marginTop};
  display: flex;
  justify-content: center;
  width: 50%;
  ${media.mobile`width: 100%;`}
`;

const ProfileMainBox = styled(ProfileBox)`
  width: 100%;
`;

const ProfileInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile`margin-bottom: 60px;`}
`;

const ProfileCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileInnerCol = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  ${media.mobile`max-width: 350px;flex-wrap: wrap;margin-top: 30px;`}
`;

const ProfileOuter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

const ProfileImageBox = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #000;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mobile`width: 120px;height: 120px;`}
`;

const ProfileImgSubBox = styled(ProfileImageBox)`
  width: 120px;
  height: 120px;
  ${media.mobile`width: 100px;height: 100px;`}
`;

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Group = styled.div`
  font-size: 24px;
  margin-top: 14px;
  color: var(--main-color);
  font-weight: 700;
  ${media.mobile`font-size: 18px;`}
`;

const SubGroup = styled(Group)`
  font-size: 16px;
  ${media.mobile`font-size: 12px;`}
`

const Position = styled.div`
  font-size: 30px;
  margin-top: 10px;
  ${media.mobile`font-size: 20px;`}
`;

const Name = styled.div`
  font-size: 30px;
  color: var(--main-color);
  font-weight: 700;
  ${media.mobile`font-size: 24px;`}
`;

const Sub = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  ${media.mobile`font-size: 14px;`}
`;

const SubName = styled.div`
  font-size: 22px;
  margin-top: 10px;
  font-weight: 600;
  color: var(--main-color);
  ${media.mobile`font-size: 18px;`}
`;

const Major = styled.div`
  font-size: 24px;
  color: rgb(77, 77, 77);
  margin-top: 6px;
  ${media.mobile`font-size: 18px;`}
`;

const SubMajor = styled(Major)`
  font-size: 16px;
  ${media.mobile`font-size: 12px;`}
`

const DepartBox = styled.div`
  display: flex;
  justify-content: center;
  ${media.mobile`flex-direction: column;`}
`;

export {
  Layout,
  Col,
  Box,
  OrganiBox,
  OrganiImage,
  ChartBox,
  TextBox,
  Title,
  Line,
  ImageBox,
  Image,
  MImg,
  SubImg,
  MSubImg,
  ProfileBox,
  ProfileMainBox,
  ProfileInnerBox,
  ProfileCol,
  ProfileInnerCol,
  ProfileOuter,
  ProfileImageBox,
  ProfileImgSubBox,
  ProfileTextBox,
  Group,
  SubGroup,
  Position,
  Name,
  Sub,
  SubName,
  Major,
  SubMajor,
  DepartBox,
};
