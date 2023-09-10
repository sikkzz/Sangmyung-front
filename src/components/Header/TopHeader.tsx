import { useState, useEffect } from "react";

import {
	Layout,
	Col,
	Box,
	MenuList,
	Menu,
	MenuLink,
} from "./TopHeaderElements";

function TopHeader() {
	const [scrollPosition, setScrollPosition] = useState(0);

	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener("scroll", updateScroll);
	});

	return (
		<Layout>
			<Col>
				<Box
					style={{
						background: scrollPosition < 80 ? "transparent" : "#fff",
						color: scrollPosition < 80 ? "#fff" : "#000",
					}}
				>
					<MenuList>
						<Menu>
							<MenuLink href="/">HOME</MenuLink>
						</Menu>
						<Menu>
							<MenuLink href="/sitemap">사이트맵</MenuLink>
						</Menu>
					</MenuList>
				</Box>
			</Col>
		</Layout>
	);
}

export default TopHeader;
