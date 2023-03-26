import { useParams, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Bio from "../components/Bio/Bio";
import Greeting from "../components/Greeting/Greeting";
import Organization from "../components/Organization/Organization";

const IntroducePage = () => {
  const param = useParams();
  const location = useLocation()
  // console.log(param.param)
  // console.log(location.pathname.split('/')[1])

  return (
    <>
      <Header />
      <Bio state={location.pathname.split('/')[1]}/>
      {param.param === "greeting" ? <Greeting /> : <Organization />}
      <Footer />
    </>
  );
};

export default IntroducePage;
