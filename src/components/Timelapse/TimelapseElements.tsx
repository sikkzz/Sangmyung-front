import styled from "styled-components";

import { media } from "../../styles/MediaQuery";

const Layout = styled.div`
	width: 100%;
	height: 100%;
`;

const VideoBox = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
`;

const Video = styled.video`
	width: 100%;
	height: 100%;
`;

const CopyRight = styled.div`
	font-size: 18px;
	color: #fff;
	position: absolute;
	top: 95%;
	right: 2%;
	${media.tabletLarge`font-size:16px;top:92%;right:2%;`}
	${media.tablet`font-size:14px;top:92%;right:2%;`}
  ${media.mobile`font-size:10px;top:90%;right:2%;`}
`;

export { Layout, VideoBox, Video, CopyRight };
