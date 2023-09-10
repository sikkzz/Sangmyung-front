import { motion } from "framer-motion";

import NotFound from "../components/NotFound/NotFound";

function NotFoundPage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ delay: 0.5 }}
		>
			<NotFound />
		</motion.div>
	);
}

export default NotFoundPage;
