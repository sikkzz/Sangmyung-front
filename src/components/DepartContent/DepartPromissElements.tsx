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

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const PromissBox = styled.div`
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 30px;
`;

const PromissInnerBox = styled.div``;

const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  position: relative;
`;

const IconBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const IconSubBox = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #fff;
  position: absolute;
  bottom: -20px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PromissTitle = styled.div`
  margin-bottom: 30px;
  color: var(--main-blue);
  font-weight: 700;
  font-size: 24px;
  display: flex;
  justify-content: center;
`;

const PromissContent = styled.div`
  font-size: 18px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export {
  Layout,
  Col,
  Box,
  Title,
  PromissBox,
  PromissInnerBox,
  ItemBox,
  IconBox,
  IconSubBox,
  PromissTitle,
  PromissContent,
};
