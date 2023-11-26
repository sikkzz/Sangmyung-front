import { useState, useEffect, ChangeEvent } from "react";

import {
	Layout,
	Col,
	Box,
	Title,
	SearchBox,
	Search,
	Input,
	IconBox,
	BoardBox,
	Board,
	BoardCol,
	BoardItem,
	BoardLink,
	BoardImg,
} from "./EducationForesightElements";
import { EducationForesightData } from "../../constants/data/EducationData";
import Icons from "../../constants/icon";

type Props = {
	id: number;
	link: string;
	img: string;
	alt: string;
};

function EducationForesight() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [posts, setPosts] = useState([] as any);

	const [userInput, setUserInput] = useState<string>("");

	const [isSearching, setIsSearching] = useState<boolean>(false);

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
			return item.content
				.replace(" ", "")
				.toLocaleLowerCase()
				.includes(userInput.toLocaleLowerCase().replace(" ", ""));
		});
		setPosts(search);
		setIsSearching(true);
	};

	useEffect(() => {
		if (isSearching === false) {
			setPosts(EducationForesightData);
		}
	}, [posts, isSearching]);

	return (
		<Layout>
			<Col>
				<Box>
					<Title>선[先]견지명</Title>
					<SearchBox>
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
					<BoardBox>
						<Board>
							<BoardCol>
								{posts.map(({ id, link, img, alt }: Props) => (
									<BoardItem key={id}>
										<BoardLink href={link}>
											<BoardImg src={img} alt={alt} />
										</BoardLink>
									</BoardItem>
								))}
							</BoardCol>
						</Board>
					</BoardBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default EducationForesight;
