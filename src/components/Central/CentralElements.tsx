import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

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
  ${media.labtop`font-size: 28px;margin-top: 20px;`}
  ${media.tabletLarge`font-size: 28px;margin-top: 20px;`}
  ${media.tablet`font-size: 24px;margin-top: 20px;`}
  ${media.mobile`font-size: 24px;margin-top: 20px;`}
`;

const IntroBox = styled.div`
  margin-top: 50px;
  border: 1px solid #e3eaf5;
  box-shadow: 4px 4px 0 #e3eaf5;
  padding: 100px 150px;
  border-radius: 30px;
  ${media.labtop`padding: 80px;`}
  ${media.tabletLarge`padding: 60px;`}
  ${media.tablet`padding: 30px;`}
  ${media.mobile`padding: 30px;`}
`;

const IntroText = styled.p`
  font-size: 20px;
  line-height: 36px;
  margin-top: 30px;

  &:first-of-type {
    margin-top: 0;
  }

  ${media.labtop`font-size: 18px;line-height: 30px;`}
  ${media.tabletLarge`font-size: 16px;line-height: 28px;`}
  ${media.tablet`font-size: 12px;line-height: 20px;`}
  ${media.mobile`font-size: 12px;line-height: 20px;`}
`;

const ContentBox = styled.div<{ padding: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  margin: 100px auto 0;
  padding: ${(props) => props.padding};
  ${media.labtop`flex-wrap: nowrap;padding: 0;flex-direction: column;justify-content: flex-start;align-items: center;margin-top: 60px;&:last-of-type{margin-top: 0;}`}
  ${media.tabletLarge`flex-wrap: nowrap;padding: 0;flex-direction: column;justify-content: flex-start;align-items: center;margin-top: 60px;&:last-of-type{margin-top: 0;}`}
  ${media.tablet`flex-wrap: nowrap;padding: 0;flex-direction: column;justify-content: flex-start;align-items: center;margin-top: 60px;&:last-of-type{margin-top: 0;}`}
  ${media.mobile`flex-wrap: nowrap;padding: 0;flex-direction: column;justify-content: flex-start;margin-top: 60px;&:last-of-type{margin-top: 0;}`}
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  ${media.labtop`margin-top: 40px;`}
  ${media.tabletLarge`margin-top: 40px;`}
  ${media.tablet`margin-top: 30px;`}
  ${media.mobile`margin-top: 30px;`}
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
