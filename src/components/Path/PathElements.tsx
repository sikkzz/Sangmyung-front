import styled from "styled-components";

const Box = styled.div`
	display: flex;
	align-items: center;
`;

const List = styled.ul``;

const ListItem = styled.li`
	display: inline-block;
	font-size: 14px;
	color: #666;
`;

const ListIconBox = styled.div`
	display: inline-block;
	vertical-align: middle;
	padding-top: 1px;
	margin-right: 6px;
`;

const ListLink = styled.a`
	margin-right: 6px;
`;

export { Box, List, ListItem, ListIconBox, ListLink };
