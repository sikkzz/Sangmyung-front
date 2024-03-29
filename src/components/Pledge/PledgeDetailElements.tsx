import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
	padding-top: 30px;
	padding-bottom: 100px;
	${media.labtop`padding-top:30px;`}
	${media.tabletLarge`padding-top:30px;`}
  ${media.tablet`padding-top:30px;`}
  ${media.mobile`padding-top:20px;`}
`;

const Col = styled.div`
	max-width: 1120px;
	padding-left: 20px;
	padding-right: 20px;
	margin-left: auto;
	margin-right: auto;
`;

const Box = styled.div``;

const TabBox = styled.div``;

const TabInnerBox = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	width: 100%;
	text-align: center;
`;

const TabList = styled.ul`
	width: auto;
	display: inline-block;
`;

const TabItem = styled.li`
	display: inline-block;
	color: rgb(132, 134, 134);
	margin: 0 20px;
	padding-bottom: 10px;
	font-size: 16px;
	cursor: pointer;
	${media.labtop`font-size:18px;`}
	${media.tabletLarge`font-size:18px;`}
  ${media.tablet`font-size:16px;`}
  ${media.mobile`font-size:12px;`}
`;

const TabItemActive = styled.li`
	display: inline-block;
	color: rgb(32, 71, 137);
	border-bottom: 1px solid rgb(32, 71, 137);
	margin: 0 20px;
	padding-bottom: 10px;
	font-size: 20px;
	cursor: pointer;
	${media.labtop`font-size:24px;`}
	${media.tabletLarge`font-size:24px;`}
  ${media.tablet`font-size:20px;`}
  ${media.mobile`font-size:15px;`}
`;

const PldegeBox = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 100px;
	position: relative;
	align-items: center;
	padding-left: 160px;
	${media.tabletLarge`margin-top:80px;padding:0;justify-content:center;height:100px;`}
	${media.tablet`margin-top:60px;padding:0;justify-content:center;height:100px;`}
  ${media.mobile`margin-top:30px;padding:0;justify-content:space-between;height:100px;`}
`;

const PledgeCircle = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-color: #000d80;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	${media.labtop`width:130px;height:130px;`}
	${media.tabletLarge`width:120px;height:120px;`}
  ${media.tablet`width:100px;height:100px;`}
  ${media.mobile`width:60px;height:60px;`}
`;

const PledgeInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	${media.labtop`width:60px;height:60px;`}
	${media.tabletLarge`width:60px;height:60px;`}
  ${media.tablet`width:50px;height:50px;`}
  ${media.mobile`width:36px;height:36px;`}
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	padding-left: 100px;
	${media.labtop`padding-left:80px;width:600px;`}
	${media.tabletLarge`padding-left:80px;width:450px;`}
  ${media.tablet`padding-left:50px;width:350px;`}
  ${media.mobile`padding-left:0;width:250px;`}
`;

const Text = styled.div<{ fontSize: string }>`
	font-size: ${(props) => props.fontSize};
	color: #000;
	font-weight: 700;
	${media.labtop`font-size:24px;`}
	${media.tabletLarge`font-size:20px;`}
  ${media.tablet`font-size:18px;`}
  ${media.mobile`font-size:16px;`}
`;

const PledgeContent = styled.div`
	padding-top: 10px;
	padding-left: 10px;
	font-size: 20px;
	color: #000;
	font-weight: 700;
	line-height: 30px;
	${media.labtop`font-size:16px;padding-top:5px;padding-left:8px;line-height:28px;`}
	${media.tabletLarge`font-size:16px;padding-top:5px;padding-left:8px;line-height:28px;`}
  ${media.tablet`font-size:14px;padding-top:5px;padding-left:8px;line-height:22px;`}
  ${media.mobile`font-size:12px;padding-top:0;padding-left:8px;line-height:18px;`}
`;

export {
	Layout,
	Col,
	Box,
	PldegeBox,
	PledgeCircle,
	PledgeInner,
	Text,
	PledgeContent,
	TabBox,
	TabInnerBox,
	TabList,
	TabItem,
	TabItemActive,
	ContentBox,
};
