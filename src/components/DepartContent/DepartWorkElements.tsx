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

const Box = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 20px;
`;

const WorkBox = styled.div`
	display: flex;
	justify-content: space-between;
	${media.labtop`flex-wrap: wrap;align-items: center;margin-top: 20px;padding:60px;`}
	${media.tabletLarge`flex-wrap: wrap;align-items: center;margin-top: 20px;padding:60px;`}
  ${media.tablet`flex-wrap: wrap;align-items: center;margin-top: 20px;padding:30px;`}
  ${media.mobile`flex-direction: column;align-items: center;margin-top: 20px;padding:0;`}
`;

const WorkInnerBox = styled.div`
	padding: 20px;
	border-radius: 10px;
	background-color: #f1eeee;
	width: 250px;
	height: 250px;
	display: flex;
	flex-direction: column;
	${media.labtop`padding: 30px;margin-top: 20px;`}
	${media.tabletLarge`padding: 30px;margin-top: 20px;`}
  ${media.tablet`padding: 30px;margin-top: 20px;`}
  ${media.mobile`padding: 30px;justify-content: center;margin-top: 20px;`}
`;

const ItemBox = styled.div``;

const IconBox = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 20px;
	background-color: #161e2d;
	padding: 6px;
	margin-bottom: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const WorkTitle = styled.div`
	margin-bottom: 12px;
	color: var(--main-blue);
	font-weight: 700;
	font-size: 18px;
	margin-top: 12px;
	${media.labtop`font-size: 16px;`}
	${media.tabletLarge`font-size: 16px;`}
  ${media.tablet`font-size: 14px;`}
  ${media.mobile`font-size: 14px;`}
`;

const WorkContent = styled.div`
	font-size: 16px;
	line-height: 26px;
	${media.labtop`font-size: 14px;line-height: 22px;`}
	${media.tabletLarge`font-size: 14px;line-height: 22px;`}
  ${media.tablet`font-size: 12px;line-height: 20px;`}
  ${media.mobile`font-size: 12px;line-height: 20px;`}
`;

export {
	Layout,
	Col,
	Box,
	Title,
	WorkBox,
	WorkInnerBox,
	ItemBox,
	IconBox,
	WorkTitle,
	WorkContent,
};
