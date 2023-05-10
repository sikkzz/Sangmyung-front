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

const ProfileBox = styled.div``;

const ProfileItemBox = styled.div`
  display: flex;
  margin-top: 70px;
`;

const ImgBox = styled.div``;

const ImgOutBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;
  border-radius: 50%;
`;

const Img = styled.img<{ width: string; height: string; radius: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  width: 200px;
`;

const Position = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const Name = styled.div`
  font-size: 28px;
  margin-top: 10px;
`;

const Major = styled.div`
  font-size: 18px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 60px;
  padding-left: 20px;
  /* padding-right: 20px; */
  width: 600px;
  font-size: 18px;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: -25px;
    width: 45px;
    border-left: 10px solid #d9d9e0;
    border-top: 10px solid #d9d9e0;
    border-bottom: 10px solid #d9d9e0;
  }

  &::after{
    content: '';
    position: absolute;
    top: 20px;
    bottom: 20px;
    right: -45px;
    width: 45px;
    border-right: 10px solid #d9d9e0;
    border-top: 10px solid #d9d9e0;
    border-bottom: 10px solid #d9d9e0;
  }
`;

const Text = styled.p`
  line-height: 28px;
  white-space: pre-line;
  text-align: center;
`

export {
  Layout,
  Col,
  Box,
  Title,
  ProfileBox,
  ProfileItemBox,
  ImgBox,
  ImgOutBox,
  Img,
  InfoBox,
  Position,
  Name,
  Major,
  TextBox,
  Text,
};
