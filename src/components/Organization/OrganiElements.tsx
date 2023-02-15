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

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const ProfileContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const ProfileInner = styled.div``;

const Profile = styled.div`
  width: 160px;
  height: 160px;
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

const Group = styled.div`
  font-size: 24px;
  margin-top: 14px;
`;

const Position = styled.div`
  font-size: 30px;
  margin-top: 10px;
`;

const Name = styled.div`
  font-size: 30px;
`;

const Major = styled.div`
  font-size: 24px;
  color: #aaa;
`;

const SubProfileContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const SubProfileInner = styled.div``;

const SubProfile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--main-color);
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubGroup = styled.div`
  font-size: 16px;
  margin-top: 14px;
`;

const SubPosition = styled.div`
  font-size: 22px;
`;

const SubName = styled.div`
  font-size: 22px;
`;

const SubMajor = styled.div`
  font-size: 16px;
  color: #aaa;
`;

export {
  Container,
  OrganiContainer,
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
  SubProfileContainer,
  SubProfileInner,
  SubProfile,
  SubProfileTextBox,
  SubGroup,
  SubPosition,
  SubName,
  SubMajor,
};
