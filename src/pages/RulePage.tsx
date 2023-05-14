import TopHeader from "../components/Header/TopHeader";
import Header from "../components/Header/Header"
import Bio from "../components/Bio/Bio"
import Rule from "../components/Rule/Rule"
import Footer from "../components/Footer/Footer"

import { useLocation } from "react-router-dom"

const RulePage = () => {
  const location = useLocation()

  return (
    <>
      <TopHeader />
      <Header />
      <Bio state={location.pathname.split("/")[1]} />
      <Rule />
      <Footer />
    </>
  )
}

export default RulePage