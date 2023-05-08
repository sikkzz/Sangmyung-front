import styled from "styled-components";

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
  width: 1700px;
  height: 957px;
`;

const ChartBox = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
`;

const TextBox = styled.div``;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  font-size: 48px;
  margin: 30px 0;
`;

const ImageBox = styled.div``;

const Image = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50px;
`;

const ProfileBox = styled.div<{ marginTop: string }>`
  margin-top: ${(props) => props.marginTop};
  display: flex;
  justify-content: center;
`;

const ProfileInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const ProfileOuter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

const ProfileImageBox = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  background-color: var(--main-color);
  background-color: #000;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Group = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  margin-top: 14px;
  color: var(--main-color);
  font-weight: 700;
`;

const Position = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  margin-top: 10px;
`;

const Name = styled.div`
  font-size: 30px;
  color: var(--main-color);
  font-weight: 700;
`;

const Sub = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

const SubName = styled.div`
  font-size: 22px;
  margin-top: 10px;
  font-weight: 600;
  color: var(--main-color);
`;

const Major = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: rgb(77, 77, 77);
  margin-top: 6px;
`;

const DepartBox = styled.div`
  display: flex;
  justify-content: center;
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
  ProfileBox,
  ProfileInnerBox,
  ProfileCol,
  ProfileInnerCol,
  ProfileOuter,
  ProfileImageBox,
  ProfileTextBox,
  Group,
  Position,
  Name,
  Sub,
  SubName,
  Major,
  DepartBox,
};
