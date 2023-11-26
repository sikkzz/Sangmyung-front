import { ChangeEvent, useEffect, useState } from "react";

import {
	Layout,
	Col,
	Box,
	Title,
	SearchBox,
	KindBox,
	KindTitle,
	KindList,
	KindListItem,
	KindListItemLink,
	KindIconBox,
	Search,
	Input,
	IconBox,
	NoticeBox,
	Table,
	ColGroup,
	ColStyle,
	MColStyle,
	THead,
	Tr,
	Th,
	TBody,
	Td,
	MTd,
	TdTitle,
	TdLink,
	MTdInfoBox,
	MTdInfo,
} from "./NoticeElements";
import { NoticeData, NoticeKindData } from "../../constants/data/NoticeData";
import Icons from "../../constants/icon";
import Pagination from "../Pagination/Pagination";

type Props = {
	id: number;
	link: string;
	title: string;
	date: string;
	owner: string;
	kind: string;
	content: string;
};

function Notice() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [posts, setPosts] = useState([] as any);
	const limit = 10;
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;

	const [userInput, setUserInput] = useState<string>("");

	const [isSearching, setIsSearching] = useState<boolean>(false);

	const [kindClick, isKindClick] = useState(false);
	const [list, setList] = useState(false);

	const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
		setUserInput(e.target.value);

		if (userInput.length <= 1) {
			setIsSearching(false);
		}
	};

	const onSearchClick = (e: React.MouseEvent) => {
		e.preventDefault();

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const search = posts.filter((item: any) => {
			return item.title
				.replace(" ", "")
				.toLocaleLowerCase()
				.includes(userInput.toLocaleLowerCase().replace(" ", ""));
		});
		setPosts(search);
		setIsSearching(true);
	};

	const onKindClick = () => {
		isKindClick(!kindClick);
	};

	const onItemClick = (items: string) => {
		if (items === "전체") {
			setPosts(NoticeData);
		} else {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const list = posts.filter((item: any) => {
				return item.kind === items;
			});
			setPosts(list);
			setList(true);
		}
	};

	useEffect(() => {
		if (isSearching === false && list === false) {
			setPosts(NoticeData);
		}
	}, [list, posts, isSearching]);

	return (
		<Layout>
			<Col>
				<Box>
					<Title>공지사항</Title>
					<SearchBox>
						<KindBox onClick={onKindClick}>
							<KindTitle>분류</KindTitle>
							<KindList
								style={{ display: kindClick === true ? "block" : "none" }}
							>
								{NoticeKindData.map((item, index) => (
									<KindListItem key={index}>
										<KindListItemLink
											onClick={() => {
												onItemClick(item.item);
											}}
										>
											{item.item}
										</KindListItemLink>
									</KindListItem>
								))}
							</KindList>
							<KindIconBox>
								<Icons.IoChevronDown size={16} color="#D5D5D5" />
							</KindIconBox>
						</KindBox>
						<Search>
							<Input
								onChange={getSearchData}
								type="text"
								placeholder="검색어를 입력해 주세요"
							/>
							<IconBox
								onClick={onSearchClick}
								disabled={userInput.length === 0}
							>
								<Icons.ImSearch size={24} color="#000" />
							</IconBox>
						</Search>
					</SearchBox>
					<NoticeBox>
						<Table>
							<ColGroup>
								<ColStyle size="8%" />
								<ColStyle size="8%" />
								<ColStyle size="auto" />
								<ColStyle size="12%" />
								<ColStyle size="12%" />
								<MColStyle />
							</ColGroup>
							<THead>
								<Tr>
									<Th size="8%">번호</Th>
									<Th size="8%">분류</Th>
									<Th size="auto">제목</Th>
									<Th size="12%">작성자</Th>
									<Th size="12%">작성일</Th>
								</Tr>
							</THead>
							<TBody>
								<Tr>
									<Td>
										<Icons.HiSpeakerphone size={20} color="#000" />
									</Td>
									<Td />
									<Td>
										<TdTitle>
											<TdLink>
												상명대학교 총학생회 공지사항 게시판입니다.
											</TdLink>
										</TdTitle>
									</Td>
									<Td />
									<Td />
								</Tr>
								{posts
									.slice(offset, offset + limit)
									.map(({ id, kind, link, title, owner, date }: Props) => (
										<Tr key={id}>
											<Td>{id}</Td>
											<Td>{kind}</Td>
											<Td>
												<TdTitle>
													<TdLink href={link}>{title}</TdLink>
												</TdTitle>
											</Td>
											<Td>{owner}</Td>
											<Td>{date}</Td>
											<MTd>
												<TdTitle>
													<TdLink href={link}>{title}</TdLink>
													<MTdInfoBox>
														<MTdInfo>{kind}</MTdInfo>
														<MTdInfo>상명대학교 총학생회</MTdInfo>
														<MTdInfo>{date}</MTdInfo>
													</MTdInfoBox>
												</TdTitle>
											</MTd>
										</Tr>
									))}
							</TBody>
						</Table>
						<Pagination
							total={posts.length}
							limit={limit}
							page={page}
							setPage={setPage}
						/>
					</NoticeBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Notice;
