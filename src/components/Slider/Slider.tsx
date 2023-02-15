import { useState, useEffect, useRef } from "react";
import { Container, Wrapper, ImageContainer, Image } from "./SliderElements";
import { SliderData } from "../../constants/data/sliderData";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = window.setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <Container>
      {SliderData.map((item, index) => (
        <Wrapper key={index}>
          {index === current && (
            <ImageContainer>
              {
                {
                  0: (
                    <Image
                      src={item.image}
                      alt={item.alt}
                    />
                  ),
                  1: (
                    <Image
                      src={item.image}
                      alt={item.alt}
                    />
                  ),
                  2: (
                    <Image
                      src={item.image}
                      alt={item.alt}
                    />
                  ),
                  3: (
                    <Image
                      src={item.image}
                      alt={item.alt}
                    />
                  ),
                }[current]
              }
            </ImageContainer>
          )}
        </Wrapper>
      ))}
    </Container>
  );
}
