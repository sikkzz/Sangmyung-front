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

const GreetingContainer = styled.div``;

const ImgContainer = styled.div`
    max-width: 1120px;
    /* background-color: #000; */
    display: flex;
    justify-content: space-between;
`

const ImgWrapper = styled.div`
    /* width: 350px; */
`

export { Container, InnerContainer, GreetingContainer, ImgContainer,ImgWrapper };
