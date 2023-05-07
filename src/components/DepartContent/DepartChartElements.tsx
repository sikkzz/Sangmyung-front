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

const ProfileBox = styled.div`
  
`;

const ProfileItemBox = styled.div`
  display: flex;
`;

const ImgBox = styled.div`
  
`

const ImgOutBox = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const ImgInnerBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;
  /* margin: 0 30px; */
  display: flex;
  justify-content: center;
  /* align-items: flex-end; */
  align-items: center;
`

const Img = styled.img`
  width: 80%;
  height: 108%;
  border-radius: 20%;
  object-fit: cover;
`

const Tests = styled.div`
  width: 200px;
  height: 200px;
`

const TestImg = styled.img`
  width: 100%;
  height: 100%;
`

const InfoBox = styled.div`
  
`

const TextBox = styled.div`
  
`


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
  ProfileItemBox,
  ImgBox,
  ImgOutBox,
  ImgInnerBox,
  Img,
  InfoBox,
  TextBox,

  Tests,
  TestImg,


  Profile,
  Image,
  ProfileTextBox,
  Position,
  Name,
  Major,
};
