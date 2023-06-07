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
  align-items: center;
  margin-top: 100px;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 80%;
  height: 108%;
  border-radius: 10%;
  object-fit: cover;
`;

const ProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 30px;
`;

export {
  Layout,
  Col,
  Box,
  ProfileBox,
  ProfileImgBox,
  ImgBox,
  Img,
  ProfileTextBox,
  Title,
  Text,
};
