import Image from "next/image";

import { ImageContainer, TextContainer, Text } from "./BioElements";

import Img from "@/assets/back1.jpeg";
export default function Bio() {
  return (
    <ImageContainer>
      <TextContainer>
        <Text>총학생회 소개</Text>
      </TextContainer>
      <Image
        src={Img}
        alt="Bio"
        style={{ width: "100vw", height: "434px", objectFit: "cover" }}
      />
    </ImageContainer>
  );
}
