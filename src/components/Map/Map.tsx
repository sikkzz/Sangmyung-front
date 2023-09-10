import { useEffect } from "react";

import { Layout, Col, Box, Title, Sub, MapBox } from "./MapElements";

const { kakao } = window as any;

function Map() {
	useEffect(() => {
		const container = document.getElementById("map");
		const options = {
			center: new kakao.maps.LatLng(37.602091, 126.954362),
			level: 2,
		};

		const map = new kakao.maps.Map(container, options);

		const markerPosition = new kakao.maps.LatLng(37.602091, 126.954362);

		const marker = new kakao.maps.Marker({
			position: markerPosition,
			clickable: true,
		});

		marker.setMap(map);
	});

	return (
		<Layout>
			<Col>
				<Box>
					<Title>총학생회실</Title>
					<Sub>학생회관 H212호</Sub>
					<MapBox>
						<div
							id='map'
							style={{ width: "100%", height: "100%", marginTop: "50px" }}
						/>
					</MapBox>
				</Box>
			</Col>
		</Layout>
	);
}

export default Map;
