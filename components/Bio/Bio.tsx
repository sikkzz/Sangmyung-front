import { ImageContainer } from "./BioElements";
import Image from "next/image";

import Img from "@/assets/back1.jpeg";
export default function Bio() {
  return (
    <ImageContainer>
      <Image src={Img} alt="Bio" style={{ width: "100vw", height: "434px", objectFit: "cover"}} />
    </ImageContainer>
  );
}
