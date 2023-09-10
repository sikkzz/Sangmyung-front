import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import Bio from "../components/Bio/Bio";
// import Calendar from "../components/Calendar/Calendar";
import Calendar2 from "../components/Calendar/Calendar2";
import Footer from "../components/Footer/Footer";
// import Test from "../components/Schedule/Test";

import Header from "../components/Header/Header";
import TopHeader from "../components/Header/TopHeader";

function CalendarPage() {
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
			<Calendar2 />
			{/* <Test /> */}
			<Footer />
		</motion.div>
	);
}

export default CalendarPage;
