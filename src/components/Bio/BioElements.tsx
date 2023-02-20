import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 434px;
  position: relative;
`;

const Image = styled.img`
  width: 100vw;
  height: 434px;
  object-fit: cover;
  /* opacity: 0.6; */
`;

const TextContainer = styled.div`
  position: absolute;
  top: 157px;
  left: 18%;
`;

const Title = styled.div`
  font-size: 50px;
  color: #fff;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 26px;
  line-height: 38px;
  color: #fff;
`;

export { ImageContainer, Image, TextContainer, Title, Text };
