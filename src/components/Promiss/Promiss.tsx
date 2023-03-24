import React, { useState, useEffect } from "react";

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

type PromissProps = {
  primary: boolean;
  scroll: number;
  id: number;
  title: string;
  sub: string;
  mark: string;
  sub2: string;
};

const Promiss = ({
  primary,
  scroll,
  id,
  title,
  sub,
  mark,
  sub2,
}: PromissProps) => {
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
  );
};

export default Promiss;
