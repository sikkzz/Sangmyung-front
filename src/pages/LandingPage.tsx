import { motion } from "framer-motion";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopHeader from "../components/Header/TopHeader";
import Landing from "../components/Landing/Landing";
import Promiss from "../components/Promiss/Promiss";
import Slider from "../components/Slider/Slider";
import TimeLapse from "../components/Timelapse/Timelapse";
import { PromissData } from "../constants/data/PromissData";

function LandingPage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.5 }}
		>
			<TopHeader />
			<Header />
			<Slider />
			<TimeLapse />
			<Landing />
			{PromissData.map((item, index) => (
				<Promiss
					key={index}
					primary={item.primary}
					scroll={item.scroll}
					id={item.id}
					title={item.title}
					sub={item.sub}
					sub2={item.sub2}
					mark={item.mark}
				/>
			))}
			<Footer />
		</motion.div>
	);
}

export default LandingPage;
