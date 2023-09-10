import styled from "styled-components";

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

const Table = styled.table`
	width: 100%;
	table-layout: fixed;
	border-collapse: collapse;
	border-spacing: 0;
	font-size: 1em;
`;

const THead = styled.thead``;

const Tr = styled.tr``;

const Td = styled.td`
	border: 1px solid #ddd;
	vertical-align: top;
`;

const Th = styled.th`
	font-size: 1em;
	text-align: left;
	padding: 0 0 15px 10px;
`;

const TBody = styled.tbody``;

const WeekBox = styled.div``;

const Week = styled.div`
	min-height: 150px;
	position: relative;
`;

const WeekBack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const Table2 = styled(Table)`
	height: 100%;
`;

const WeekContent = styled.div`
	padding-bottom: 2px;
	position: relative;
`;

const Link = styled.a`
	color: #2a2a2a;
	background-color: #ffe0df;
	margin: 1px;
	padding: 3px 8px;
	margin-left: 0;
	padding-left: 1px;
	position: relative;
	display: block;
	font-size: 0.85em;
	font-weight: 400;
`;

const Content = styled.div``;

const Span = styled.span``;

export {
	Layout,
	Col,
	Box,
	Table,
	THead,
	Tr,
	Td,
	Th,
	TBody,
	WeekBox,
	Week,
	WeekBack,
	Table2,
	WeekContent,
	Link,
	Content,
	Span,
};
