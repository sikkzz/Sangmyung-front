import React, { useState, useEffect } from "react";

import {
  Layout,
  Col,
  Box,
  InnerBox,
  TitleBox,
  TitleBoxAnimation,
  Title,
  Sub,
  ImageBox,
  Image,
  ImageBoxAni,
} from "./PromissElements";

import Img from "../../assets/test.jpg";

const Promiss = () => {
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

  console.log(position);

  return (
    <Layout>
      <Col>
        <Box>
          <InnerBox>
            {position < 1000 ? (
              <TitleBox>
                <Title>총학생회 선</Title>
                <Sub>먼저 나서는 학생회가 되겠습니다.</Sub>
              </TitleBox>
            ) : (
              <TitleBoxAnimation>
                <Title>총학생회 선</Title>
                <Sub>먼저 나서는 학생회가 되겠습니다.</Sub>
              </TitleBoxAnimation>
            )}

            {position < 1000 ? (
              <ImageBox>
                <Image src={Img} alt="img" />
              </ImageBox>
            ) : (
              <ImageBoxAni>
                <Image src={Img} alt="img" />
              </ImageBoxAni>
            )}
          </InnerBox>
        </Box>
      </Col>
    </Layout>
  );
};

export default Promiss;
