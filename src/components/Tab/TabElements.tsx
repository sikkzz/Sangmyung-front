import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
	top: 110px;
	z-index: 99;
	right: 0;
	left: 0;
	position: sticky;
	${media.labtop`display: none;`};
	${media.tabletLarge`display: none;`};
	${media.tablet`display: none;`};
	${media.mobile`display: none;`};
`;

const Col = styled.div``;

const Box = styled.div`
	background-color: rgb(255 255 255);
	z-index: 10;
`;

const InnerBox = styled.div`
	width: 100%;
	height: 64px;
	box-shadow: 0px 4px 4px rgb(179 182 183 / 25%);
`;

const FlexBox = styled.div`
	display: flex;
	max-width: 1120px;
	padding: 0 20px;
	margin: 0 auto;
	height: 64px;
	justify-content: space-between;
`;

const Wrapper = styled.div`
	display: flex;
`;

const Item = styled.div`
	padding: 20px 0;
	color: rgb(132, 134, 134);
	font-size: 15px;
	line-height: 24px;
	cursor: pointer;

	:not(:first-of-type) {
		margin-left: 24px;
	}
`;

export { Layout, Col, Box, InnerBox, FlexBox, Wrapper, Item };
