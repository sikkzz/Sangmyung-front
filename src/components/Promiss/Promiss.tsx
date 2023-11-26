import { useState, useEffect } from "react";

import {
	Layout,
	Col,
	Box,
	InnerBox,
	TitleBoxAni,
	Title,
	Sub,
	ImageBox,
	Text,
} from "./PromissElements";
import {
	MLayout,
	MBox,
	MTitleBox,
	MTitle,
	MSub,
	MImageBox,
	MText,
} from "./PromissMediaElements";

type PromissProps = {
	primary: boolean;
	scroll: number;
	id: number;
	title: string;
	sub: string;
	mark: string;
	sub2: string;
};

function Promiss({ primary, scroll, title, sub, mark, sub2 }: PromissProps) {
	const [position, setPosition] = useState(0);

	function onScroll() {
		setPosition(window.scrollY);
	}

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<>
			<MLayout>
				<MBox>
					{primary === true ? (
						<>
							<MTitleBox>
								<MTitle>{title}</MTitle>
								<MSub>{sub}</MSub>
								<MSub>{sub2}</MSub>
							</MTitleBox>
							<MImageBox>
								<MText>{mark}</MText>
							</MImageBox>
						</>
					) : (
						<>
							<MImageBox>
								<MText>{mark}</MText>
							</MImageBox>
							<MTitleBox>
								<MTitle>{title}</MTitle>
								<MSub>{sub}</MSub>
								<MSub>{sub2}</MSub>
							</MTitleBox>
						</>
					)}
				</MBox>
			</MLayout>
			<Layout>
				<Col>
					<Box>
						<InnerBox>
							{primary === true ? (
								<>
									{position > scroll ? (
										<>
											<TitleBoxAni>
												<Title>{title}</Title>
												<Sub>{sub}</Sub>
												<Sub>{sub2}</Sub>
											</TitleBoxAni>
											<ImageBox>
												<Text>{mark}</Text>
											</ImageBox>
										</>
									) : (
										""
									)}
								</>
							) : (
								<>
									{position > scroll ? (
										<>
											<ImageBox>
												<Text>{mark}</Text>
											</ImageBox>
											<TitleBoxAni>
												<Title>{title}</Title>
												<Sub>{sub}</Sub>
												<Sub>{sub2}</Sub>
											</TitleBoxAni>
										</>
									) : (
										""
									)}
								</>
							)}
						</InnerBox>
					</Box>
				</Col>
			</Layout>
		</>
	);
}

export default Promiss;
