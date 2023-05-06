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

const Box = styled.div``;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-top: 50px;
`;

const IntroBox = styled.div`
  padding: 30px;
  background-color: #f4f4f4;
  margin-top: 50px;
`;

const IntroText = styled.p`
  font-size: 20px;
  line-height: 36px;
  margin-top: 30px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const ContentBox = styled.div<{ padding: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  margin: 100px auto 0;
  padding: ${(props) => props.padding};
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitleBox = styled.div`
  display: flex;
`;

const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemTitle = styled.div`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
`;

const ItemSub = styled.div`
  margin-top: 20px;
`;

const ItemSns = styled.div`
  margin-top: 16px;
`;

const ItemInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImgBox = styled.div``;

const ItemImg = styled.img`
  width: 160px;
`;

const ItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemText = styled.div`
  margin-top: 12px;

  &:first-of-type {
    margin-top: 0;
  }
`;

export {
  Layout,
  Col,
  Box,
  Title,
  IntroBox,
  IntroText,
  ContentBox,
  ItemBox,
  ItemTitleBox,
  ItemIcon,
  ItemTitle,
  ItemSub,
  ItemSns,
  ItemInfoBox,
  ItemImgBox,
  ItemImg,
  ItemTextBox,
  ItemText,
};