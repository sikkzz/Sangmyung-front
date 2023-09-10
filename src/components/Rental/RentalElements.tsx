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
	margin: 0 auto;
`;

const Box = styled.div``;

const Title = styled.div`
	font-size: 36px;
	font-weight: 700;
	margin-top: 50px;
	${media.mobile`font-size: 24px;margin-top: 20px;`};
`;

const Location = styled.div`
	font-size: 24px;
	margin-top: 30px;
	${media.mobile`font-size: 18px;margin-top: 20px;`};
`;

const DownloadBox = styled.a`
	margin-top: 50px;
	margin-bottom: 100px;
	padding: 15px 20px;
	background-color: var(--main-blue);
	font-size: 16px;
	color: #fff;
	font-weight: 400;
	width: 190px;
	display: block;
	${media.mobile`margin-bottom: 50px;`}
`;

const Line = styled.hr``;

const Link = styled.div`
	display: inline-block;
`;

const IconBox = styled.div`
	display: inline-block;
	vertical-align: middle;
	margin-left: 20px;
`;

const Table = styled.table`
	width: 100%;
	border-top: 1px solid #000;
	margin-top: 50px;
`;

const ColGroup = styled.colgroup``;

const ColStyle = styled.col`
	width: 33%;
`;

const THead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
	width: 33%;
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
`;

export {
	Layout,
	Col,
	Box,
	Title,
	Location,
	DownloadBox,
	Line,
	Link,
	IconBox,
	Table,
	ColGroup,
	ColStyle,
	THead,
	Tr,
	Th,
	TBody,
	Td,
};
