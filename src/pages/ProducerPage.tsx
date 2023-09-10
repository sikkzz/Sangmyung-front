import { motion } from "framer-motion";

import BioSimple from "../components/Bio/BioSimple";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopHeader from "../components/Header/TopHeader";
import Producer from "../components/Producer/Producer";

function ProducerPage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.5 }}
		>
			<TopHeader />
			<Header />
			<BioSimple />
			<Producer />
			<Footer />
		</motion.div>
	);
}

export default ProducerPage;
