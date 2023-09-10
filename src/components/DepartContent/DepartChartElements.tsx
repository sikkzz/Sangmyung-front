import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

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

const Box = styled.div``;

const Title = styled.div`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 20px;
`;

const ProfileBox = styled.div``;

const ProfileItemBox = styled.div`
	display: flex;
	margin-top: 70px;
	${media.labtop`flex-direction: column;align-items: center;`}
	${media.tabletLarge`flex-direction: column;align-items: center;`}
  ${media.tablet`flex-direction: column;align-items: center;`}
  ${media.mobile`flex-direction: column;align-items: center;`}
`;

const ImgBox = styled.div``;

const ImgOutBox = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: #000;
	border-radius: 50%;
	${media.labtop`width: 140px;height: 140px;`}
	${media.tabletLarge`width: 140px;height: 140px;`}
  ${media.tablet`width: 140px;height: 140px;`}
  ${media.mobile`width: 140px;height: 140px;`}
`;

const Img = styled.img<{ width: string; height: string; radius: string }>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.radius};
	${media.labtop`display: none;`}
	${media.tabletLarge`display: none;`}
  ${media.tablet`display: none;`}
  ${media.mobile`display: none;`}
`;

const MImg = styled.img<{ width: string; height: string; radius: string }>`
	display: none;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.radius};
	${media.labtop`display: block;`}
	${media.tabletLarge`display: block;`}
  ${media.tablet`display: block;`}
  ${media.mobile`display: block;`}
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 30px;
	width: 200px;
	${media.labtop`margin-left: 0;`}
	${media.tabletLarge`margin-left: 0;`}
  ${media.tablet`margin-left: 0;`}
  ${media.mobile`margin-left: 0;`}
`;

const Position = styled.div`
	font-size: 36px;
	font-weight: 700;
	${media.labtop`font-size: 28px;margin-top: 10px;`}
	${media.tabletLarge`font-size: 28px;margin-top: 10px;`}
  ${media.tablet`font-size: 28px;margin-top: 10px;`}
  ${media.mobile`font-size: 28px;margin-top: 10px;`}
`;

const Name = styled.div`
	font-size: 28px;
	margin-top: 10px;
	${media.labtop`font-size: 24px;`}
	${media.tabletLarge`font-size: 24px;`}
  ${media.tablet`font-size: 24px;`}
  ${media.mobile`font-size: 24px;`}
`;

const Major = styled.div`
	font-size: 18px;
	${media.labtop`font-size: 16px;`}
	${media.tabletLarge`font-size: 16px;`}
  ${media.tablet`font-size: 16px;`}
  ${media.mobile`font-size: 16px;`}
`;

const TextBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-left: 60px;
	padding-left: 20px;
	width: 600px;
	font-size: 18px;
	position: relative;
	${media.labtop`width: 500px;padding-left: 0; margin-left: 0;font-size: 16px;line-height: 24px;`}
	${media.tabletLarge`width: 500px;padding-left: 0; margin-left: 0;font-size: 16px;line-height: 24px;`}
  ${media.tablet`width: 420px;padding-left: 0; margin-left: 0;font-size: 16px;line-height: 24px;`}
  ${media.mobile`width: 320px;padding-left: 0; margin-left: 0;font-size: 12px;line-height: 20px;`}

  &::before {
		content: "";
		position: absolute;
		top: 20px;
		bottom: 20px;
		left: -25px;
		width: 45px;
		border-left: 10px solid #d9d9e0;
		border-top: 10px solid #d9d9e0;
		border-bottom: 10px solid #d9d9e0;
		${media.labtop`content:none;`}
		${media.tabletLarge`content:none;`}
    ${media.tablet`content:none;`}
    ${media.mobile`content:none;`}
	}

	&::after {
		content: "";
		position: absolute;
		top: 20px;
		bottom: 20px;
		right: -45px;
		width: 45px;
		border-right: 10px solid #d9d9e0;
		border-top: 10px solid #d9d9e0;
		border-bottom: 10px solid #d9d9e0;
		${media.labtop`content:none;`}
		${media.tabletLarge`content:none;`}
    ${media.tablet`content:none;`}
    ${media.mobile`content:none;`}
	}
`;

const Text = styled.p`
	line-height: 28px;
	white-space: pre-line;
	text-align: center;
	${media.labtop`line-height: 24px;margin-top: 20px;`}
	${media.tabletLarge`line-height: 24px;margin-top: 20px;`}
  ${media.tablet`line-height: 20px;margin-top: 20px;`}
  ${media.mobile`line-height: 20px;margin-top: 20px;`}
`;

export {
	Layout,
	Col,
	Box,
	Title,
	ProfileBox,
	ProfileItemBox,
	ImgBox,
	ImgOutBox,
	Img,
	MImg,
	InfoBox,
	Position,
	Name,
	Major,
	TextBox,
	Text,
};
