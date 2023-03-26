import styled from "styled-components";

const Container = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const OrganiContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const OrganiImage = styled.img`
  width: 1250px;
  height: 850px;
`;

const ChartContainer = styled.div`
  margin-bottom: 200px;
`;

const TextContainer = styled.div``;

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

const ImageContainer = styled.div``;

const Image = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50px;
  /* border-radius: 50%; */
  /* object-fit: contain; */
`;

const ProfileContainer = styled.div<{ marginTop: string }>`
  margin-top: ${(props) => props.marginTop};
  display: flex;
  justify-content: center;
`;

const ProfileInner = styled.div``;

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

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Group = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  margin-top: 14px;
`;

const Position = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  margin-top: 10px;
`;

const Name = styled.div`
  font-size: 30px;
`;

const Major = styled.div<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  color: #aaa;
`;

export {
  Container,
  OrganiContainer,
  OrganiImage,
  ChartContainer,
  TextContainer,
  Title,
  Line,
  ImageContainer,
  Image,
  ProfileContainer,
  ProfileInner,
  Profile,
  ProfileTextBox,
  Group,
  Position,
  Name,
  Major,
};
