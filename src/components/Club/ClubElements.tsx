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
	${media.tabletLarge`font-size: 28px;margin-top: 20px;`};
	${media.tablet`font-size: 26px;margin-top: 20px;`};
	${media.mobile`font-size: 24px;margin-top: 20px;`};
`;

const Table = styled.table`
	width: 100%;
	table-layout: fixed;
	border-spacing: 0;
	margin-top: 60px;
	border-top: 1px solid #000;
`;

const ColGroup = styled.colgroup``;

const TableCol = styled.col<{ size: string }>`
	width: ${(props) => props.size};
	${media.tabletLarge`width: 0;display: none;`}
	${media.tablet`width: 0;display: none;`}
  ${media.mobile`width: 0;display: none;`}
`;

const MTableCol = styled.col`
	width: 0;
	display: none;
	${media.tabletLarge`width: 100%;display: table-column;`};
	${media.tablet`width: 100%;display: table-column;`};
	${media.mobile`width: 100%;display: table-column;`};
`;

const THead = styled.thead`
	${media.tabletLarge`display: none;`};
	${media.tablet`display: none;`};
	${media.mobile`display: none;`};
`;

const Tr = styled.tr``;

const Th = styled.th<{ size: string }>`
	width: ${(props) => props.size};
	padding: 22px 10px;
	border-bottom: 1px solid #e5e5e5;
	background-color: #f6f9ef;
	font-size: 18px;
	line-height: 26px;
`;

const TBody = styled.tbody``;

const Td = styled.td`
	position: relative;
	padding: 23px 10px;
	border-bottom: 1px solid #e5e5e5;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	text-align: center;
	${media.tabletLarge`display: none;`}
	${media.tablet`display: none;`}
  ${media.mobile`display: none;`}
`;

const MTd = styled.td`
	display: none;
	padding: 13px 0;
	font-size: 15px;
	font-weight: 400;
	text-align: left;
	border-bottom: 1px solid #e5e5e5;
	${media.tabletLarge`display: table-cell;`}
	${media.tablet`display: table-cell;`}
  ${media.mobile`display: table-cell;`}
`;

const TdImageBox = styled.div`
	width: 140px;
	height: 140px;
	margin: 0 auto;
`;

const TdImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
`;

const TdTitle = styled.div`
	font-size: 18px;
	font-weight: 700;
`;

const TdKind = styled.div``;

const TdActive = styled.div`
	text-align: left;
`;

const TdIconBox = styled.div``;

const TdLink = styled.a`
	${media.tabletLarge`display: inline-block;vertical-align: middle;`}
	${media.tablet`display: inline-block;vertical-align: middle;`}
    ${media.mobile`display: inline-block;vertical-align: middle;`}
`;

const MTdInfoBox = styled.div`
	display: none;
	margin-top: 5px;
	${media.tabletLarge`display: block;`}
	${media.tablet`display: block;`}
  ${media.mobile`display: block;`}
`;

const MTdInfo = styled.span`
	display: none;
	position: relative;
	margin: 0 7px 0 0;
	padding: 0 8px 0 0;
	font-size: 14px;
	line-height: 20px;
	color: #777;

	&::after {
		content: "";
		display: block;
		position: absolute;
		top: 5px;
		right: 0;
		width: 1px;
		height: 10px;
		background-color: #8c8c8c;
	}

	&:last-child::after {
		content: none;
	}

	&:first-child {
		color: #000;
	}

	${media.tabletLarge`display: inline-block;`}
	${media.tablet`display: inline-block;`}
  ${media.mobile`display: inline-block;`}
`;

export {
	Layout,
	Col,
	Box,
	Title,
	Table,
	ColGroup,
	TableCol,
	THead,
	Tr,
	Th,
	TBody,
	Td,
	TdImageBox,
	TdImage,
	TdTitle,
	TdKind,
	TdActive,
	TdLink,
	TdIconBox,
	MTableCol,
	MTd,
	MTdInfoBox,
	MTdInfo,
};
