import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const ImageContainer = styled.div`
  width: 100%;
  height: 434px;
  position: relative;
  ${media.labtop`height:400px;`}
  ${media.tabletLarge`height:380px;`}
  ${media.tablet`height:300px;`}
  ${media.mobile`height:250px;`}
`;

const Image = styled.img`
  width: 100%;
  height: 434px;
  ${media.labtop`width: 100%;height: 400px;opacity: 0.8;`};
  ${media.tabletLarge`width: 100%;height: 380px;opacity: 0.8;`};
  ${media.tablet`width: 100%;height: 300px;opacity: 0.8;`};
  object-fit: cover;
  ${media.mobile`width: 100%;height: 250px;opacity: 0.8;`};
`;

const TextContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 18%;
  ${media.labtop`top: 160px;left: 10%;`};
  ${media.tabletLarge`top: 160px;left: 10%;`};
  ${media.tablet`top: 130px;left: 10%;`};
  ${media.mobile`top: 110px;left: 5%;`};
`;

const Title = styled.div`
  font-size: 50px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: 700;
  ${media.labtop`font-size: 42px;`};
  ${media.tabletLarge`font-size: 42px;`};
  ${media.tablet`font-size: 36px;`};
  ${media.mobile`font-size: 20px;`};
`;

const Text = styled.div`
  font-size: 26px;
  line-height: 38px;
  color: #fff;
  ${media.labtop`font-size: 22px;line-height: 32px;`}
  ${media.tabletLarge`font-size: 22px;line-height: 32px;`}
  ${media.tablet`font-size: 20px;line-height: 30px;`}
  ${media.mobile`font-size: 16px;line-height: 24px;`}
`;

const MTabBox = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  ${media.labtop`display:flex;`};
  ${media.tabletLarge`display:flex;`};
  ${media.tablet`display:flex;`};
  ${media.mobile`display:flex;`};
`;

const MTabList = styled.ul`
  width: auto;
  display: inline-block;
`;

const MTabItem = styled.li`
  display: inline-block;
  color: rgb(132, 134, 134);
  margin: 10px 20px 0;
  padding-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
  ${media.labtop`font-size:16px;`};
  ${media.tabletLarge`font-size:16px;`};
  ${media.tablet`font-size:16px;`};
  ${media.mobile`font-size:14px;`};
`;

export {
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Text,
  MTabBox,
  MTabList,
  MTabItem,
};
