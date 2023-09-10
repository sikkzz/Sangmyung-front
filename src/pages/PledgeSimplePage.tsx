import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import Bio from "../components/Bio/Bio";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopHeader from "../components/Header/TopHeader";
import PledgeSimple from "../components/Pledge/PledgeSimple";

function PledgeSimplePage() {
	const location = useLocation();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.5 }}
		>
			<TopHeader />
			<Header />
			<Bio state={location.pathname.split("/")[2]} />
			<PledgeSimple />
			<Footer />
		</motion.div>
	);
}

export default PledgeSimplePage;
