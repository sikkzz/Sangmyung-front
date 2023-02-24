import React, { useState, useEffect } from "react";

import {
  Layout,
  Col,
  Box,
  InnerBox,
  TitleBox,
  TitleBoxAni,
  Title,
  Sub,
  ImageBox,
  Image,
  ImageBoxAni,
} from "./PromissElements";

import Img from "../../assets/test.jpg";

type Props = {
  primary: boolean;
  scroll: number;
};

const Promiss: React.FC<Props> = ({ primary, scroll }) => {
  const [position, setPosition] = useState(0);

  //   const [animate, setAnimate] = useState(false);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  //   useEffect(() => {
  //     if (position > scroll) {
  //       setAnimate(true);
  //     }
  //   }, [position, scroll]);

  //   console.log(animate);
  //   console.log(primary);

  return (
    <Layout>
      <Col>
        <Box>
          <InnerBox>
            {primary === true ? (
              <>
                {position > scroll ? (
                  <>
                    <TitleBoxAni>
                      <Title>총학생회 선</Title>
                      <Sub>먼저 나서는 학생회가 되겠습니다.</Sub>
                    </TitleBoxAni>
                    <ImageBoxAni>
                      <Image src={Img} alt="img" />
                    </ImageBoxAni>
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              <>
                {position > scroll ? (
                  <>
                    <ImageBoxAni>
                      <Image src={Img} alt="img" />
                    </ImageBoxAni>
                    <TitleBoxAni>
                      <Title>총학생회 선</Title>
                      <Sub>먼저 나서는 학생회가 되겠습니다.</Sub>
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
  );
};

export default Promiss;
