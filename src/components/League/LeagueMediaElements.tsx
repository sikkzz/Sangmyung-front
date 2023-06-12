import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

import img1 from "../../assets/league/background.png";

const GameBox = styled.div`
  display: none;
  ${media.tabletLarge`display: block;`}
  ${media.tablet`display: block;`}
  ${media.mobile`display: block;`}
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  ${media.tabletLarge`margin-top: 60px;`}
  ${media.tablet`margin-top: 30px;`}
  ${media.mobile`margin-top: 10px;`}
`;

const Title = styled.div`
  color: #222;
  font-weight: 600;
  ${media.tabletLarge`font-size: 24px;`}
  ${media.tablet`font-size: 24px;`}
  ${media.mobile`font-size: 15px;`}
`;

const LineUpBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const TeamBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc((100% - 20px) / 3);
  font-weight: 600;
  ${media.tabletLarge`font-size: 24px;`}
  ${media.tablet`font-size: 20px;`}
  ${media.mobile`font-size: 16px;`}
`;

const ImgBox = styled.div`
  ${media.tabletLarge`width: 120px;height: 120px;`}
  ${media.tablet`width: 100px;height: 100px;`}
  ${media.mobile`width: 60px;height: 60px;`}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Text = styled.div`
  margin-top: 6px;
`;

const MScoreBox = styled.div`
  display: inline-block;
  width: calc((100% - 20px) / 3);
  position: relative;
  ${media.tabletLarge`top: 30px;`}
  ${media.tablet`top: 20px;`}
  ${media.mobile`top: 10px;`}
`;

const Score = styled.p`
  margin: 0 auto;
  color: #001c48;
  background: #e6e9ed;
  font-weight: 700;
  border-radius: 6px;
  ${media.tabletLarge`width: 100px;padding: 11px 18px;font-size: 24px;`}
  ${media.tablet`width: 100px;padding: 11px 18px;font-size: 24px;`}
  ${media.mobile`width: 81px;padding: 7px 11px;font-size: 20px;`}
`;

const ScoreSpan = styled.span`
  margin: 0 10px;
`;

const StateSpan = styled.span`
  background: #ee2529;
  display: block;
  margin: 10px auto 0;
  color: #fff;
  border-radius: 10px;
  ${media.tabletLarge`width: 70px;height: 30px;font-size: 16px;line-height: 30px;margin-top: 16px;`}
  ${media.tablet`width: 70px;height: 30px;font-size: 16px;line-height: 30px;margin-top: 16px;`}
  ${media.mobile`width: 52px;height: 20px;font-size: 12px;line-height: 18px;`}
`;

const InfoBox = styled.div`
  display: inline-block;
  min-width: 104px;
  background-color: #001c48;
  background-image: url(${img1});
  background-size: cover;
  color: #fff;
  text-align: center;
  ${media.tabletLarge`padding: 12px 16px;font-size: 24px;margin-top: 24px;`}
  ${media.tablet`padding: 12px 16px;font-size: 20px;margin-top: 24px;`}
  ${media.mobile`padding: 8px 10px;font-size: 16px;margin-top: 20px;`}
`;

const Info = styled.div`
  display: inline-flex;
  vertical-align: middle;
  margin-left: 4px;
`;

export {
  GameBox,
  Content,
  Title,
  LineUpBox,
  TeamBox,
  ImgBox,
  Img,
  Text,
  MScoreBox,
  Score,
  ScoreSpan,
  StateSpan,
  InfoBox,
  Info,
};
