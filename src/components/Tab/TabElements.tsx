import styled from "styled-components";

const Box = styled.div`
  top: 80px;
  z-index: 99;
  right: 0;
  left: 0;
  position: sticky;
`;

const InnerBox = styled.div``;

const Container = styled.div`
  /* width: 100%; */
  /* height: 64px; */
  /* position: sticky; */
  background-color: rgb(255 255 255);
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 0px 4px 4px rgb(179 182 183 / 25%);
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 64px;
`;

const Item = styled.a`
  padding: 20px 0;
  color: rgb(32, 71, 137);
  font-size: 15px;
  line-height: 24px;
  border-bottom: 2px solid rgb(32, 71, 137);

  :not(:first-of-type) {
    color: rgb(132, 134, 134);
    margin-left: 24px;
  }
`;

export { Box, InnerBox, Container, InnerContainer, Wrapper, Item };
