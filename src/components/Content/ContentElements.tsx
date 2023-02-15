import styled from "styled-components";

const Container = styled.div`
  padding: 96px 0;
`;

const InnerContainer = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  /* height: 300px; */
  background-color: rgb(255 255 255);
`;

const Wrapper = styled.div``;

const ImgContainer = styled.div`
  max-width: 1120px;
  /* background-color: #000; */
  display: flex;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 350px; */
`;

const Image = styled.img`
  width: 500px;
  height: 700px;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;

  &:first-of-type {
    margin-top: 20px;
  }
`;

const Title = styled.p``;

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-left: 50px;
`;

const TextWrapper = styled.div`
  max-width: 620px;
  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;

const Text = styled.div`
  text-align: left;
  font-size: 16px;
  line-height: 24px;
`;

export {
  Container,
  InnerContainer,
  Wrapper,
  ImgContainer,
  ImgWrapper,
  Image,
  TitleContainer,
  Title,
  GreetingContainer,
  LogoContainer,
  TextContainer,
  TextWrapper,
  Text,
};
