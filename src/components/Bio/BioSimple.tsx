import { ImgBox, Img } from "./BioSimpleElements";
import Image from "../../assets/background1-min.jpg";

function BioSimple() {
	return (
		<ImgBox>
			<Img src={Image} alt='image' />
		</ImgBox>
	);
}

export default BioSimple;
