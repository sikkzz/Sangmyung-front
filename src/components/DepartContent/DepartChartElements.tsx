import styled from "styled-components";

const Layout = styled.div`
  padding-top: 30px;
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

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ProfileBox = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  /* margin-bottom: 50px; */
`;

const ProfileInnerBox = styled.div`
  margin-bottom: 50px;
`;

const Profile = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  background-color: var(--main-color);
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
`;

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Position = styled.div<{ fontSize: string }>`
  font-size: 30px;
  font-size: ${(props) => props.fontSize};
  margin-top: 10px;
`;

const Name = styled.div<{ fontSize: string }>`
  font-size: 30px;
  font-size: ${(props) => props.fontSize};
`;

const Major = styled.div<{ fontSize: string }>`
  font-size: 24px;
  font-size: ${(props) => props.fontSize};
  color: #aaa;
`;

export {
  Layout,
  Col,
  Box,
  Title,
  ProfileBox,
  ProfileInnerBox,
  Profile,
  Image,
  ProfileTextBox,
  Position,
  Name,
  Major,
};
