import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const ImageContainer = styled.div`
  width: 100%;
  height: 434px;
  position: relative;
  ${media.tablet`height:300px;`}
  ${media.mobile`height:250px;`}
`;

const Image = styled.img`
  width: 100%;
  height: 434px;
  ${media.tablet`width: 100%;height: 300px;opacity: 0.8;`};
  object-fit: cover;
  ${media.mobile`width: 100%;height: 250px;opacity: 0.8;`};
`;

const TextContainer = styled.div`
  position: absolute;
  top: 157px;
  left: 18%;
  ${media.tablet`top: 100px;left: 10%;`};
  ${media.mobile`top: 100px;left: 10%;`};
`;

const Title = styled.div`
  font-size: 50px;
  color: #fff;
  margin-bottom: 20px;
  ${media.tablet`font-size: 36px;`};
  ${media.mobile`font-size: 20px;`};
`;

const Text = styled.div`
  font-size: 26px;
  line-height: 38px;
  color: #fff;
  ${media.tablet`font-size: 20px;line-height: 30px;`}
  ${media.mobile`font-size: 16px;line-height: 24px;`}
`;

const MTabBox = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
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
  margin: 0 20px;
  padding-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
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
