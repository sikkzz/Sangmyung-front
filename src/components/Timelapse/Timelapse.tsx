import { useRef } from "react";

import { Layout, VideoBox, Video, CopyRight } from "./TimelapseElements";
import TmVideo from "../../assets/timelapse1.mp4";

function TimeLapse() {
	const ref = useRef<HTMLVideoElement>(null);

	const setPlayRate = () => {
		ref!.current!.playbackRate = 3;
	};
	return (
		<Layout>
			<VideoBox>
				<Video
					src={TmVideo}
					autoPlay
					muted
					loop
					ref={ref}
					playsInline
					onCanPlay={() => {
						setPlayRate();
					}}
				/>
				<CopyRight>Photo by 교육학과 19학번 박준호</CopyRight>
			</VideoBox>
		</Layout>
	);
}

export default TimeLapse;
