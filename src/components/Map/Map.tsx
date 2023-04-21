import React, { useEffect } from "react";

import styled from "styled-components";

const Layout = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Col = styled.div`
  max-width: 1120px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 36px;
`;

const kakao = (window as any).kakao;

const Map = () => {
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
          <div id="map" style={{ width: "100%", height: "100vh" }} />
        </Box>
      </Col>
    </Layout>
  );
};

export default Map;
