import styled, { keyframes } from "styled-components";

import { media } from "../../styles/MediaQuery";

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${media.labtop`padding-top: 50px;`};
  ${media.tabletLarge`padding-top: 50px;`};
  ${media.tablet`padding-top: 50px;`};
  ${media.mobile`padding-top: 50px;`};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const move = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  animation: 1s ease-in-out 0s 1 normal forwards running ${move};
  ${media.labtop`height: 600px;`}
  ${media.tabletLarge`height: 500px;`}
  ${media.tablet`height: 400px;`}
  ${media.mobile`height: 225px;`}
`;

const Title = styled.div`
  font-size: 80px;
  font-weight: 700;
  color: #fff;
  position: absolute;
  top: 75%;
  left: 3%;
  ${media.labtop`top:60%;left:3%;font-size:60px;`}
  ${media.tabletLarge`top:60%;left:3%;font-size:50px;`}
  ${media.tablet`top:60%;left:3%;font-size:50px;`}
  ${media.mobile`top:65%;left:3%;font-size:16px;`}
`;

const Content = styled.div`
  font-size: 36px;
  color: #fff;
  font-weight: 700;
  position: absolute;
  top: 85%;
  left: 3%;
  ${media.labtop`top:75%;left:3%;font-size:30px;`}
  ${media.tabletLarge`top:75%;left:3%;font-size:24px;`}
  ${media.tablet`top:75%;left:3%;font-size:24px;`}
  ${media.mobile`top:75%;left:3%;font-size:12px;`}
`;

const CopyRight = styled.div`
  font-size: 18px;
  color: #fff;
  position: absolute;
  top: 95%;
  right: 2%;
  ${media.labtop`top:94%;right:2%;font-size:18px;`}
  ${media.tabletLarge`top:92%;right:2%;font-size:16px;`}
  ${media.tablet`top:92%;right:2%;font-size:14px;`}
  ${media.mobile`top:90%;right:2%;font-size:10px;`}
`;

export { Container, Wrapper, ImageContainer, Image, Title, Content, CopyRight };
